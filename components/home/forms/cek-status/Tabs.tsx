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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type RequestPerson = {
  id: number;
  fullName: string;
  detailInformation: string;
  requestStatus: 'sedang diproses' | 'ditolak' | 'selesai diproses';
  createdAt: string;
}

type Submission = {
  id: number;
  fullName: string;
  chronology: string;
  requestStatus: 'sedang diproses' | 'ditolak' | 'selesai diproses';
  createdAt: string;
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
    showPagination: boolean;
    currentSearch: string;
  };
}

export function TabsCekStatus() {
  const [activeTab, setActiveTab] = useState<'cekStatusPermohonan' | 'cekStatusPengajuan'>('cekStatusPermohonan');
  const [requestPeople, setRequestPeople] = useState<RequestPerson[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    showPagination: false,
    currentSearch: '',
  });

  const fetchRequestPeople = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/status-check-request?page=${page}&limit=10&search=${search}`);
      const data: ApiResponse<RequestPerson> = await response.json();
      setRequestPeople(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error('Error fetching request people:', error);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/status-check-submission?page=${page}&limit=10&search=${search}`);
      const data: ApiResponse<Submission> = await response.json();
      setSubmissions(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    if (activeTab === 'cekStatusPermohonan') {
      fetchRequestPeople();
    } else {
      fetchSubmissions();
    }
  }, [activeTab, fetchRequestPeople, fetchSubmissions]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1); // Reset to first page when searching
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selesai diproses':
        return 'bg-green-100 text-green-800';
      case 'ditolak':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Tabs 
      defaultValue="cekStatusPermohonan" 
      className="w-full mt-5"
      onValueChange={(value) => setActiveTab(value as 'cekStatusPermohonan' | 'cekStatusPengajuan')}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="cekStatusPermohonan">Cek Status Permohonan</TabsTrigger>
        <TabsTrigger value="cekStatusPengajuan">Cek Status Pengajuan</TabsTrigger>
      </TabsList>
      
      <TabsContent value="cekStatusPermohonan">
        <Card>
          <CardHeader>
            <CardTitle>Cek Status Permohonan</CardTitle>
            <CardDescription>
              Cari dan lihat status permohonan Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Cari berdasarkan nama..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button type="submit">Cari</Button>
              </div>
            </form>

            {loading ? (
              <div className="text-center py-4">Memuat data...</div>
            ) : requestPeople.length > 0 ? (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No</TableHead>
                      <TableHead>Nama Lengkap</TableHead>
                      <TableHead>Detail Informasi</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal Dibuat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requestPeople.map((person, index) => (
                      <TableRow key={person.id}>
                        <TableCell>{(meta.page - 1) * meta.limit + index + 1}</TableCell>
                        <TableCell>{person.fullName}</TableCell>
                        <TableCell>{person.detailInformation}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(person.requestStatus)}`}>
                            {person.requestStatus}
                          </span>
                        </TableCell>
                        <TableCell>{new Date(person.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {meta.showPagination && (
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Menampilkan {(meta.page - 1) * meta.limit + 1} - {Math.min(meta.page * meta.limit, meta.total)} dari {meta.total} data
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        disabled={!meta.hasPreviousPage}
                        onClick={() => setPage(meta.page - 1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        disabled={!meta.hasNextPage}
                        onClick={() => setPage(meta.page + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                {search ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Tidak ada data permohonan'}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cekStatusPengajuan">
        <Card>
          <CardHeader>
            <CardTitle>Cek Status Pengajuan</CardTitle>
            <CardDescription>
              Cari dan lihat status pengajuan Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Cari berdasarkan nama..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button type="submit">Cari</Button>
              </div>
            </form>

            {loading ? (
              <div className="text-center py-4">Memuat data...</div>
            ) : submissions.length > 0 ? (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No</TableHead>
                      <TableHead>Nama Lengkap</TableHead>
                      <TableHead>Kronologi</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal Dibuat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission, index) => (
                      <TableRow key={submission.id}>
                        <TableCell>{(meta.page - 1) * meta.limit + index + 1}</TableCell>
                        <TableCell>{submission.fullName}</TableCell>
                        <TableCell>{submission.chronology}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(submission.requestStatus)}`}>
                            {submission.requestStatus}
                          </span>
                        </TableCell>
                        <TableCell>{new Date(submission.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {meta.showPagination && (
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Menampilkan {(meta.page - 1) * meta.limit + 1} - {Math.min(meta.page * meta.limit, meta.total)} dari {meta.total} data
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        disabled={!meta.hasPreviousPage}
                        onClick={() => setPage(meta.page - 1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        disabled={!meta.hasNextPage}
                        onClick={() => setPage(meta.page + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                {search ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Tidak ada data pengajuan'}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}