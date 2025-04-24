// app/api/statistics/submissions/route.ts
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { submission } from '@/lib/schemaDb'
import { count, sql } from 'drizzle-orm'

export async function GET() {
  try {
    // Get total count
    const totalCount = await db.select({ count: count() }).from(submission)
    
    // Get counts by status
    const statusCounts = await db
      .select({
        status: submission.requestStatus,
        count: count(),
      })
      .from(submission)
      .groupBy(submission.requestStatus)
    
    // Get counts by reason
    const reasonCounts = await db
      .select({
        reason: sql`unnest(${submission.reasonOfSubmission})`,
        count: count(),
      })
      .from(submission)
      .groupBy(sql`unnest(${submission.reasonOfSubmission})`)
    
    // Get daily counts for the last 7 days
    const dailyCounts = await db
      .select({
        date: sql<string>`DATE(${submission.createdAt})`,
        count: count(),
      })
      .from(submission)
      .where(
        sql`${submission.createdAt} >= NOW() - INTERVAL '7 days'`
      )
      .groupBy(sql`DATE(${submission.createdAt})`)
      .orderBy(sql`DATE(${submission.createdAt})`)

    return NextResponse.json({
      success: true,
      data: {
        total: totalCount[0].count,
        byStatus: statusCounts,
        byReason: reasonCounts,
        daily: dailyCounts,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    )
  }
}