'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@tremor/react"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]
const REFRESH_INTERVAL = 30000 // 30 detik

// Add this interface for daily chart data
interface DailyChartData {
  date: string;
  LKPD?: number;
  PPID?: number;
  Survei?: number;
}

interface ReportStats {
  success: boolean
  data: {
    totals: {
      lkpd: number
      ppid: number
      survei: number
    }
    daily: Array<{
      type: 'LKPD' | 'PPID' | 'Survei'
      date: string
      count: number
    }>
  }
}

async function fetchReportStats(): Promise<ReportStats> {
  const res = await fetch('/api/statistics/reports', {
    cache: 'no-store'
})
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.error || 'Failed to fetch report statistics')
  }
  return res.json()
}

export default function ReportStatistics() {
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>()

  const { data, isLoading, error, refetch } = useQuery<ReportStats, Error>({
    queryKey: ['report-stats'],
    queryFn: async () => {
      const result = await fetchReportStats()
      setLastUpdated(new Date().toLocaleTimeString())
      return result
    },
    refetchInterval: autoRefresh ? REFRESH_INTERVAL : false,
    refetchOnWindowFocus: true
  })

  useEffect(() => {
    return () => setAutoRefresh(false)
  }, [])

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        <h3 className="font-bold">Error loading statistics</h3>
        <p>{error.message}</p>
        <button 
          onClick={() => refetch()}
          className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    )
  }

  // Format data untuk chart total
  const totalsData = [
    { name: 'Laporan LKPD', value: data?.data?.totals?.lkpd || 0 },
    { name: 'Laporan PPID', value: data?.data?.totals?.ppid || 0 },
    { name: 'Survei', value: data?.data?.totals?.survei || 0 }
  ]

  const dailyChartData = data?.data?.daily?.reduce((acc: DailyChartData[], item) => {
    const existingDate = acc.find(d => d.date === item.date)
    if (existingDate) {
      existingDate[item.type] = item.count
    } else {
      const newEntry: DailyChartData = { 
        date: item.date,
        [item.type]: item.count 
      }
      acc.push(newEntry)
    }
    return acc
  }, []) || []

  // Urutkan data harian berdasarkan tanggal
  const sortedDailyChartData = [...dailyChartData].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <CardTitle>Statistik Laporan</CardTitle>
            <div className="flex items-center space-x-4 flex-wrap gap-2">
              {lastUpdated && (
                <span className="text-sm text-gray-500">
                  Terakhir diperbarui: {lastUpdated}
                </span>
              )}
              <button
                onClick={() => refetch()}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Memuat...' : 'Refresh'}
              </button>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={() => setAutoRefresh(!autoRefresh)}
                  className="h-4 w-4"
                  disabled={isLoading}
                />
                <span className="text-sm">Auto Refresh (30s)</span>
              </label>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-[300px] w-full" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {totalsData.map((item, index) => (
                  <Card key={item.name}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {item.name}
                      </CardTitle>
                      <div 
                        className="h-4 w-4 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{item.value.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribusi Laporan</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={totalsData}
                      index="name"
                      categories={["value"]}
                      colors={COLORS}
                      yAxisWidth={60}
                      showAnimation={true}
                      valueFormatter={(value) => value.toLocaleString()}
                      className="h-full"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Aktivitas 7 Hari Terakhir</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={sortedDailyChartData}
                      index="date"
                      categories={["LKPD", "PPID", "Survei"]}
                      colors={COLORS}
                      yAxisWidth={40}
                      showLegend={true}
                      stack={true}
                      valueFormatter={(value) => value.toLocaleString()}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}