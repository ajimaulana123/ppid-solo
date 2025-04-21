import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { requestPeople } from '@/lib/schemaDb'
import { like, or, sql } from 'drizzle-orm'

export const dynamic = 'force-dynamic' // Disable static rendering

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''

    // Query untuk data dengan pagination
    const requestData = await db
      .select()
      .from(requestPeople)
      .where(
        search
          ? or(
              like(requestPeople.fullName, `%${search}%`)
            )
          : undefined
      )
      .orderBy(requestPeople.createdAt)
      .limit(limit)
      .offset((page - 1) * limit)

    // Query untuk total data (count)
    const totalQuery = await db
      .select({ count: sql<number>`count(*)` })
      .from(requestPeople)
      .where(
        search
          ? or(
              like(requestPeople.fullName, `%${search}%`)
            )
          : undefined
      )

    const total = totalQuery[0]?.count || 0

    return NextResponse.json({
      data: requestData,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
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
