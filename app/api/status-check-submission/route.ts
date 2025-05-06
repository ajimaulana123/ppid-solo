import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { submission } from '@/lib/schemaDb'
import { like, or, sql } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const rawPage = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''

    const page = search ? 1 : rawPage

    // Count query - perbaiki tabel yang diquery
    const countSql = search
      ? sql`SELECT COUNT(*) FROM "Submission" 
           WHERE "fullName" ILIKE ${`%${search}%`}`
      : sql`SELECT COUNT(*) FROM "Submission"`

    const totalResult = await db.execute(countSql)
    const total = Number(totalResult.rows[0].count) || 0

    // Data query
    const dataQuery = db
      .select()
      .from(submission)

    if (search) {
      dataQuery.where(
        or(
          like(submission.fullName, `%${search}%`),
        )
      )
    }

    const submissionData = await dataQuery
      .orderBy(submission.createdAt)
      .limit(limit)
      .offset((page - 1) * limit)

    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page * limit < total
    const hasPreviousPage = page > 1
    const showPagination = total > 0

    return NextResponse.json({
      data: submissionData,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        showPagination,
        currentSearch: search,
      }
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'CDN-Cache-Control': 'no-cache',
        'Vercel-CDN-Cache-Control': 'no-cache'
      }
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      }
    )
  }
}