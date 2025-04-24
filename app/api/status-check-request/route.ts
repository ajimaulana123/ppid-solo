import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { requestPeople } from '@/lib/schemaDb'
import { like, or, sql } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const rawPage = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''

    // Always start at page 1 when searching (if there are results)
    const page = search ? 1 : rawPage

    // Count query - use raw SQL for reliability
    const countSql = search
      ? sql`SELECT COUNT(*) FROM "RequestPeople" 
           WHERE "fullName" ILIKE ${`%${search}%`}`
      : sql`SELECT COUNT(*) FROM "RequestPeople"`

    const totalResult = await db.execute(countSql)
    const total = Number(totalResult.rows[0].count) || 0

    // Data query
    const dataQuery = db
      .select()
      .from(requestPeople)

    if (search) {
      dataQuery.where(
        or(
          like(requestPeople.fullName, `%${search}%`),
        )
      )
    }

    const requestData = await dataQuery
      .orderBy(requestPeople.createdAt)
      .limit(limit)
      .offset((page - 1) * limit)

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page * limit < total
    const hasPreviousPage = page > 1

    // Ensure pagination is always shown when there are results
    const showPagination = total > 0

    return NextResponse.json({
      data: requestData,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        showPagination, // Explicit flag for UI
        currentSearch: search,
      },
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
