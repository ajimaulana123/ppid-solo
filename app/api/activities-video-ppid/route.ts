import { db } from '@/lib/db';
import { activiesVideoPpid } from '@/lib/schemaDb';
import { desc, sql, ilike, and } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const search = searchParams.get('search') || '';
    const limit = Number(searchParams.get('limit')) || 9; 
    const offset = (page - 1) * limit;

    // Query dengan filter pencarian
    const query = db
      .select()
      .from(activiesVideoPpid)
      .where(
        search 
          ? and(
              ilike(activiesVideoPpid.title, `%${search}%`),
              // Bisa ditambahkan field lain untuk dicari:
              // or(ilike(news.content, `%${search}%`))
            )
          : undefined
      )
      .orderBy(desc(activiesVideoPpid.createdAt));

    const allNews = await query.limit(limit).offset(offset);

    // Hitung total data dengan filter yang sama
    const totalQuery = await db
      .select({ count: sql<number>`count(*)` })
      .from(activiesVideoPpid)
      .where(
        search 
          ? and(
              ilike(activiesVideoPpid.title, `%${search}%`),
              // or(ilike(news.content, `%${search}%`))
            )
          : undefined
      );

    const totalPages = Math.ceil(totalQuery[0].count / limit);

    return NextResponse.json({
      data: allNews,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalQuery[0].count,
        itemsPerPage: limit,
        searchQuery: search
      }
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Gagal memuat berita' },
      { status: 500 }
    );
  }
}