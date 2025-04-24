// app/api/statistics/request-people/route.ts
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { requestPeople } from '@/lib/schemaDb'
import { count, sql } from 'drizzle-orm'

export async function GET() {
  try {
    // Get total count
    const totalCount = await db.select({ count: count() }).from(requestPeople)
    
    // Get counts by status
    const statusCounts = await db
      .select({
        status: requestPeople.requestStatus,
        count: count(),
      })
      .from(requestPeople)
      .groupBy(requestPeople.requestStatus)
    
    // Get daily counts for the last 7 days
    const dailyCounts = await db
      .select({
        date: sql<string>`DATE(${requestPeople.createdAt})`,
        count: count(),
      })
      .from(requestPeople)
      .where(
        sql`${requestPeople.createdAt} >= NOW() - INTERVAL '7 days'`
      )
      .groupBy(sql`DATE(${requestPeople.createdAt})`)
      .orderBy(sql`DATE(${requestPeople.createdAt})`)

    return NextResponse.json({
      success: true,
      data: {
        total: totalCount[0].count,
        byStatus: statusCounts,
        daily: dailyCounts,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    )
  }
}