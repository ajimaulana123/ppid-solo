import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Loader2 } from "lucide-react"

interface TableStatusPermohonanProps {
    data: Array<{
        id: string
        fullName: string // Tambahkan field ini
        requestStatus: "sedang diproses" | "ditolak" | "selesai diproses" // Sesuaikan dengan nilai enum
        detailInformation: string
        createdAt: string
    }>
    isLoading: boolean
}

export function TableStatusPermohonan({ data, isLoading }: TableStatusPermohonanProps) {
    if (isLoading) return (
        <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
    )

    if (data.length === 0) return (
        <div className="text-center p-8 text-gray-500">
            Tidak ada data ditemukan
        </div>
    )

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'selesai diproses':
                return 'bg-green-100 text-green-800'
            case 'ditolak':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-yellow-100 text-yellow-800'
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Nama Lengkap</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="min-w-[200px]">Detail Informasi</TableHead> {/* Kolom baru */}
                        <TableHead className="text-right">Tanggal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.fullName}</TableCell>
                            <TableCell>
                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(item.requestStatus)}`}>
                                    {item.requestStatus}
                                </span>
                            </TableCell>
                            <TableCell>
                                <div className="max-w-[300px] truncate" title={item.detailInformation}>
                                    {item.detailInformation}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                {new Date(item.createdAt).toLocaleDateString('id-ID', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}