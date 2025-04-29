import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { publicInformation } from '@/lib/schemaDb';
import { like, sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawPage = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';

    // Always start at page 1 when searching (if there are results)
    const page = search ? 1 : rawPage;

    // Count query with search functionality - now searching by title
    const countSql = search
      ? sql`SELECT COUNT(*) FROM "PublicInformation" 
           WHERE "title" ILIKE ${`%${search}%`}`
      : sql`SELECT COUNT(*) FROM "PublicInformation"`;

    const totalResult = await db.execute(countSql);
    const total = Number(totalResult.rows[0].count) || 0;

    // Data query with search and pagination
    const dataQuery = db
      .select()
      .from(publicInformation);

    if (search) {
      dataQuery.where(
        like(publicInformation.title, `%${search}%`) // Search by title only
      );
    }

    const documentData = await dataQuery
      .orderBy(publicInformation.createdAt)
      .limit(limit)
      .offset((page - 1) * limit);

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page * limit < total;
    const hasPreviousPage = page > 1;

    // Ensure pagination is always shown when there are results
    const showPagination = total > 0;

    return NextResponse.json({
      data: documentData,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        showPagination,
        currentSearch: search,
      },
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}