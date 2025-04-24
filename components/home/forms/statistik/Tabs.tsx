import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { BarChart } from "@tremor/react";
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@/components/ui/skeleton"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

interface StatusCount {
    status: string;
    count: number;
}

interface DailyCount {
    date: string;
    count: number;
}

interface RequestStats {
    total: number;
    byStatus: StatusCount[];
    daily: DailyCount[];
}

interface SubmissionStats {
    total: number;
    byStatus: StatusCount[];
    daily: DailyCount[];
}

interface PieData {
    name: string;
    value: number;
}

async function fetchRequestStats(): Promise<{ data: RequestStats }> {
    const res = await fetch('/api/statistics/request-people')
    return res.json()
}

async function fetchSubmissionStats(): Promise<{ data: SubmissionStats }> {
    const res = await fetch('/api/statistics/submissions')
    return res.json()
}

export function TabsStatistik() {
    const { data: requestData, isLoading: requestLoading } = useQuery({
        queryKey: ['request-stats'],
        queryFn: fetchRequestStats,
    })

    const { data: submissionData, isLoading: submissionLoading } = useQuery({
        queryKey: ['submission-stats'],
        queryFn: fetchSubmissionStats,
    })

    // Format data for Recharts PieChart
    const formatPieData = (data: StatusCount[] | undefined): PieData[] => {
        return data?.map(item => ({
            name: item.status,
            value: item.count
        })) || []
    }

    return (
        <Tabs defaultValue="requestStatistik" className="w-full mt-5">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="requestStatistik">Statistik Permohonan</TabsTrigger>
                <TabsTrigger value="submissionStatistik">Statistik Pengajuan</TabsTrigger>
            </TabsList>

            <TabsContent value="requestStatistik">
                <Card>
                    <CardHeader>
                        <CardTitle>Statistik Permohonan</CardTitle>
                        <CardDescription>
                            Data statistik permohonan masyarakat
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {requestLoading ? (
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-1/2" />
                                <Skeleton className="h-[300px] w-full" />
                                <Skeleton className="h-[300px] w-full" />
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-3 gap-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Total Permohonan</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-3xl font-bold">
                                                {requestData?.data?.total || 0}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {requestData?.data?.byStatus?.map((stat) => (
                                        <Card key={stat.status}>
                                            <CardHeader>
                                                <CardTitle className="text-lg capitalize">
                                                    {stat.status}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-3xl font-bold">{stat.count}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Status Permohonan</CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-[350px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={formatPieData(requestData?.data?.byStatus)}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {formatPieData(requestData?.data?.byStatus).map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Permohonan 7 Hari Terakhir</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <BarChart
                                            data={requestData?.data?.daily || []}
                                            index="date"
                                            categories={["count"]}
                                            colors={["blue"]}
                                            className="h-72"
                                        />
                                    </CardContent>
                                </Card>
                            </>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="submissionStatistik">
                <Card>
                    <CardHeader>
                        <CardTitle>Statistik Pengajuan</CardTitle>
                        <CardDescription>
                            Data statistik pengajuan masyarakat
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {submissionLoading ? (
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-1/2" />
                                <Skeleton className="h-[300px] w-full" />
                                <Skeleton className="h-[300px] w-full" />
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-3 gap-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Total Pengajuan</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-3xl font-bold">
                                                {submissionData?.data?.total || 0}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {submissionData?.data?.byStatus?.map((stat) => (
                                        <Card key={stat.status}>
                                            <CardHeader>
                                                <CardTitle className="text-lg capitalize">
                                                    {stat.status}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-3xl font-bold">{stat.count}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Status Pengajuan</CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-[350px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={formatPieData(submissionData?.data?.byStatus)}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {formatPieData(submissionData?.data?.byStatus).map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Pengajuan 7 Hari Terakhir</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <BarChart
                                            data={submissionData?.data?.daily || []}
                                            index="date"
                                            categories={["count"]}
                                            colors={["blue"]}
                                            className="h-72"
                                        />
                                    </CardContent>
                                </Card>
                            </>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}