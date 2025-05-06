'use client'

import { HeroSections } from "@/components/entities/HeroSections";
import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

type RequestPerson = {
  id: number;
  fullName: string;
  nik: string;
  phone: string;
  email: string;
  detailInformation: string;
  requestStatus: 'sedang diproses' | 'ditolak' | 'selesai diproses';
  createdAt: string;
  updatedAt: string;
}

type ApiResponse<T> = {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export default function AdminRequestDashboard() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<RequestPerson[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/status-check-request?page=${page}&limit=10&search=${search}`);
      const data: ApiResponse<RequestPerson> = await response.json();
      setRequests(data.data);
      setMeta({
        total: data.meta.total,
        page: data.meta.page,
        limit: data.meta.limit,
        totalPages: data.meta.totalPages,
        hasNextPage: data.meta.hasNextPage,
        hasPreviousPage: data.meta.hasPreviousPage,
      });
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast({
        title: "Error",
        description: "Gagal memuat data permohonan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [page, search, toast]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const updateStatus = async (id: number, newStatus: 'sedang diproses' | 'ditolak' | 'selesai diproses') => {
    setUpdatingId(id);
    try {
      const response = await fetch(`/api/request/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestStatus: newStatus })
      });

      if (!response.ok) throw new Error('Gagal mengupdate status');

      setRequests(prev => prev.map(req =>
        req.id === id ? { ...req, requestStatus: newStatus } : req
      ));

      toast({
        title: "Berhasil",
        description: `Status berhasil diubah menjadi ${getStatusText(newStatus)}`,
      });

    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Gagal",
        description: error instanceof Error ? error.message : 'Gagal mengupdate status',
        variant: "destructive",
      });
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'selesai diproses': return 'Selesai Diproses';
      case 'ditolak': return 'Ditolak';
      default: return 'Sedang Diproses';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'selesai diproses':
        return <Badge variant="default">Selesai</Badge>;
      case 'ditolak':
        return <Badge variant="destructive">Ditolak</Badge>;
      default:
        return <Badge variant="secondary">Diproses</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Permohonan" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
          <div className="w-full">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <CardTitle>Daftar Permohonan</CardTitle>
                    <CardDescription>
                      Total {meta.total} permohonan ditemukan
                    </CardDescription>
                  </div>
                  <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Input
                      placeholder="Cari (Nama/NIK/Email)..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full sm:w-64"
                    />
                    <Button type="submit" className="w-full sm:w-auto">Cari</Button>
                  </form>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Memuat data...</div>
                ) : requests.length > 0 ? (
                  <>
                    <div className="rounded-md border overflow-x-auto">
                      <Table className="min-w-full">
                        <TableHeader className="bg-gray-50">
                          <TableRow>
                            <TableHead className="whitespace-nowrap">No</TableHead>
                            <TableHead className="whitespace-nowrap">Nama Lengkap</TableHead>
                            <TableHead className="whitespace-nowrap">NIK</TableHead>
                            <TableHead className="whitespace-nowrap">Kontak</TableHead>
                            <TableHead className="whitespace-nowrap">Detail</TableHead>
                            <TableHead className="whitespace-nowrap">Status</TableHead>
                            <TableHead className="whitespace-nowrap">Tanggal</TableHead>
                            <TableHead className="whitespace-nowrap">Aksi</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {requests.map((request, index) => (
                            <TableRow key={request.id}>
                              <TableCell className="whitespace-nowrap">{(meta.page - 1) * meta.limit + index + 1}</TableCell>
                              <TableCell className="font-medium whitespace-nowrap">{request.fullName}</TableCell>
                              <TableCell className="whitespace-nowrap">{request.nik}</TableCell>
                              <TableCell className="whitespace-nowrap">
                                <div>{request.phone}</div>
                                <div className="text-sm text-gray-500">{request.email}</div>
                              </TableCell>
                              <TableCell className="max-w-xs truncate">{request.detailInformation}</TableCell>
                              <TableCell className="whitespace-nowrap">{getStatusBadge(request.requestStatus)}</TableCell>
                              <TableCell className="whitespace-nowrap">
                                <div>Dibuat: {new Date(request.createdAt).toLocaleDateString()}</div>
                                <div className="text-sm text-gray-500">
                                  Diupdate: {new Date(request.updatedAt).toLocaleDateString()}
                                </div>
                              </TableCell>
                              <TableCell className="whitespace-nowrap">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={updatingId === request.id}>
                                      {updatingId === request.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        <MoreVertical className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(request.id, 'sedang diproses')}
                                      disabled={updatingId === request.id || request.requestStatus === 'sedang diproses'}
                                    >
                                      Set Diproses
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(request.id, 'ditolak')}
                                      disabled={updatingId === request.id || request.requestStatus === 'ditolak'}
                                    >
                                      Set Ditolak
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(request.id, 'selesai diproses')}
                                      disabled={updatingId === request.id || request.requestStatus === 'selesai diproses'}
                                    >
                                      Set Selesai
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-sm text-muted-foreground text-center sm:text-left">
                        Halaman {meta.page} dari {meta.totalPages} ({meta.total} total data)
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!meta.hasPreviousPage || loading}
                          onClick={() => setPage(meta.page - 1)}
                        >
                          Sebelumnya
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!meta.hasNextPage || loading}
                          onClick={() => setPage(meta.page + 1)}
                        >
                          Selanjutnya
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    {search ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Belum ada data permohonan'}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}