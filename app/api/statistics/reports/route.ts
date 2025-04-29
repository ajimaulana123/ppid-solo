import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { reportLkpd, reportPpid, survei } from '@/lib/schemaDb'
import { count, sql, and, gte, isNotNull } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

interface DailyDataRow {
  type: string;
  date: string;
  count: number;
}

export async function GET() {
  try {
    // 1. Verifikasi koneksi database dengan Drizzle
    await db.execute(sql`SELECT 1`)
    console.log('Database connection verified')

    // 2. Query total count menggunakan Drizzle ORM
    const [lkpdTotal, ppidTotal, surveiTotal] = await Promise.all([
      db.select({ count: count() }).from(reportLkpd),
      db.select({ count: count() }).from(reportPpid),
      db.select({ count: count() }).from(survei)
    ])

    console.log('Total counts:', {
      lkpd: lkpdTotal[0]?.count,
      ppid: ppidTotal[0]?.count,
      survei: surveiTotal[0]?.count
    })

    // 3. Dapatkan data harian 7 hari terakhir dengan Drizzle ORM
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6) // 7 hari termasuk hari ini

    // Data LKPD
    const lkpdDaily = await db
      .select({
        date: sql<string>`to_char(${reportLkpd.createdAt}, 'YYYY-MM-DD')`,
        count: count()
      })
      .from(reportLkpd)
      .where(
        and(
          gte(sql`date(${reportLkpd.createdAt})`, sevenDaysAgo),
          isNotNull(reportLkpd.createdAt)
        )
      )
      .groupBy(sql`to_char(${reportLkpd.createdAt}, 'YYYY-MM-DD')`)

    // Data PPID
    const ppidDaily = await db
      .select({
        date: sql<string>`to_char(${reportPpid.createdAt}, 'YYYY-MM-DD')`,
        count: count()
      })
      .from(reportPpid)
      .where(
        and(
          gte(sql`date(${reportPpid.createdAt})`, sevenDaysAgo),
          isNotNull(reportPpid.createdAt)
        )
      )
      .groupBy(sql`to_char(${reportPpid.createdAt}, 'YYYY-MM-DD')`)

    // Data Survei
    const surveiDaily = await db
      .select({
        date: sql<string>`to_char(${survei.createdAt}, 'YYYY-MM-DD')`,
        count: count()
      })
      .from(survei)
      .where(
        and(
          gte(sql`date(${survei.createdAt})`, sevenDaysAgo),
          isNotNull(survei.createdAt)
        )
      )
      .groupBy(sql`to_char(${survei.createdAt}, 'YYYY-MM-DD')`)

    // Generate dates series untuk memastikan semua tanggal ada
    const dateSeries = await db.execute<{ date: string }>(sql`
      SELECT to_char(generate_series(
        CURRENT_DATE - INTERVAL '6 days',
        CURRENT_DATE,
        INTERVAL '1 day'
      )::date, 'YYYY-MM-DD') AS date
    `)

    // Format data harian
    const dailyData: DailyDataRow[] = dateSeries.rows.flatMap(({ date }) => {
      const dateStr = date
      const result: DailyDataRow[] = []

      // Tambahkan data untuk setiap tipe
      const lkpdCount = lkpdDaily.find(d => d.date === dateStr)?.count || 0
      const ppidCount = ppidDaily.find(d => d.date === dateStr)?.count || 0
      const surveiCount = surveiDaily.find(d => d.date === dateStr)?.count || 0

      if (lkpdCount > 0) result.push({ type: 'LKPD', date: dateStr, count: lkpdCount })
      if (ppidCount > 0) result.push({ type: 'PPID', date: dateStr, count: ppidCount })
      if (surveiCount > 0) result.push({ type: 'Survei', date: dateStr, count: surveiCount })

      // Jika tidak ada data sama sekali, tetap tampilkan dengan count 0
      if (result.length === 0) {
        result.push(
          { type: 'LKPD', date: dateStr, count: 0 },
          { type: 'PPID', date: dateStr, count: 0 },
          { type: 'Survei', date: dateStr, count: 0 }
        )
      }

      return result
    })

    console.log('Daily data:', dailyData)

    // 4. Format response
    const response = {
      success: true,
      data: {
        totals: {
          lkpd: Number(lkpdTotal[0]?.count) || 0,
          ppid: Number(ppidTotal[0]?.count) || 0,
          survei: Number(surveiTotal[0]?.count) || 0
        },
        daily: dailyData
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in statistics API:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : null
      },
      { status: 500 }
    )
  }
}