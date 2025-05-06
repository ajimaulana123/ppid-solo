'use client'

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
import { HeroSections } from '@/components/entities/HeroSections';

const ReasonOptions = {
  PENOLAKAN_1: "Penolakan atas informasi berdasarkan alasan pengecualian sebagaimana dimaksud dalam pasal 17 UU No. 14 tahun 2008.",
  PENOLAKAN_2: "Tidak ditanggapinya permintaan Informasi.",
  PENOLAKAN_3: "Tidak dipenuhi permintaan Informasi.",
  PENOLAKAN_4: "Penyampaian informasi melebihi jangka waktu yang diatur dalam UU No. 14 tahun 2008.",
  PENOLAKAN_5: "Tidak disediakannya informasi berkala.",
  PENOLAKAN_6: "Pengenaan biaya yang tidak wajar."
} as const;

type Submission = {
  id: number;
  fullName: string;
  nik: string;
  reasonOfSubmission: (keyof typeof ReasonOptions)[];
  chronology: string;
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

export default function AdminSubmissionDashboard() {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
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

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/status-check-submission?page=${page}&limit=10&search=${search}`, {
        cache: 'no-store'
      });
      const data: ApiResponse<Submission> = await response.json();

      setSubmissions(data.data);
      setMeta({
        total: data.meta.total,
        page: data.meta.page,
        limit: data.meta.limit,
        totalPages: data.meta.totalPages,
        hasNextPage: data.meta.hasNextPage,
        hasPreviousPage: data.meta.hasPreviousPage,
      });
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Gagal memuat data pengajuan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [page, search, toast]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

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
      const response = await fetch(`/api/submission/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestStatus: newStatus })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal mengupdate status');
      }

      setSubmissions(prev => prev.map(sub =>
        sub.id === id ? { ...sub, requestStatus: newStatus } : sub
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

  const getReasonText = (reasonKey: keyof typeof ReasonOptions) => {
    return ReasonOptions[reasonKey];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Pengajuan" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <div className="w-full mx-auto flex justify-between items-center">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Daftar Pengajuan</CardTitle>
                    <CardDescription>
                      Total {meta.total} pengajuan ditemukan
                    </CardDescription>
                  </div>
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <Input
                      placeholder="Cari (Nama/NIK)..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-64"
                    />
                    <Button type="submit">Cari</Button>
                  </form>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Memuat data...</div>
                ) : submissions.length > 0 ? (
                  <>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader className="bg-gray-50">
                          <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Nama Lengkap</TableHead>
                            <TableHead>NIK</TableHead>
                            <TableHead>Alasan Pengajuan</TableHead>
                            <TableHead>Kronologi</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Tanggal</TableHead>
                            <TableHead>Aksi</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {submissions.map((submission, index) => (
                            <TableRow key={submission.id}>
                              <TableCell>{(meta.page - 1) * meta.limit + index + 1}</TableCell>
                              <TableCell className="font-medium">{submission.fullName}</TableCell>
                              <TableCell>{submission.nik}</TableCell>
                              <TableCell>
                                <div className="flex flex-col gap-1">
                                  {submission.reasonOfSubmission.map((reason, i) => (
                                    <div key={i} className="text-sm">
                                      {getReasonText(reason)}
                                    </div>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell className="max-w-xs truncate">{submission.chronology}</TableCell>
                              <TableCell>{getStatusBadge(submission.requestStatus)}</TableCell>
                              <TableCell>
                                <div>Dibuat: {new Date(submission.createdAt).toLocaleDateString()}</div>
                                <div className="text-sm text-gray-500">
                                  Diupdate: {new Date(submission.updatedAt).toLocaleDateString()}
                                </div>
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={updatingId === submission.id}>
                                      {updatingId === submission.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        <MoreVertical className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(submission.id, 'sedang diproses')}
                                      disabled={updatingId === submission.id || submission.requestStatus === 'sedang diproses'}
                                    >
                                      Set Diproses
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(submission.id, 'ditolak')}
                                      disabled={updatingId === submission.id || submission.requestStatus === 'ditolak'}
                                    >
                                      Set Ditolak
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => updateStatus(submission.id, 'selesai diproses')}
                                      disabled={updatingId === submission.id || submission.requestStatus === 'selesai diproses'}
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

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
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
                    {search ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Belum ada data pengajuan'}
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