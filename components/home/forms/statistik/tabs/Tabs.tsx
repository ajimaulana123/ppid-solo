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
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@/components/ui/skeleton"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { PieData, StatusCount } from "./types"
import { fetchSubmissionStats, fetchRequestStats } from "./api"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

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
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Total Pengajuan</CardTitle>
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
                                        <CardTitle>Status Pengajuan</CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-[250px] sm:h-[300px] lg:h-[350px]">
                                        <div className="w-full h-full min-h-[200px]">
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
                                        </div>
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                    <CardContent className="h-[250px] sm:h-[300px] lg:h-[350px]">
                                        <div className="w-full h-full min-h-[200px]">
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
                                        </div>
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