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

export const dynamic = 'force-dynamic'

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
  const [permohonanSearch, setPermohonanSearch] = useState('');
  const [pengajuanSearch, setPengajuanSearch] = useState('');
  const [currentPermohonanSearch, setCurrentPermohonanSearch] = useState('');
  const [currentPengajuanSearch, setCurrentPengajuanSearch] = useState('');
  const [permohonanPage, setPermohonanPage] = useState(1);
  const [pengajuanPage, setPengajuanPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [permohonanMeta, setPermohonanMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    showPagination: false,
    currentSearch: '',
  });
  
  const [pengajuanMeta, setPengajuanMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    showPagination: false,
    currentSearch: '',
  });

  // Auto-refresh interval (30 detik)
  const REFRESH_INTERVAL = 30000;

  const fetchRequestPeople = useCallback(async (search: string, page: number) => {
    setLoading(true);
    try {
      const url = new URL('/api/status-check-request', window.location.origin);
      url.searchParams.append('page', page.toString());
      url.searchParams.append('limit', '10');
      url.searchParams.append('search', search);
      url.searchParams.append('timestamp', Date.now().toString());
      
      const response = await fetch(url.toString(), {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      const data: ApiResponse<RequestPerson> = await response.json();
      setRequestPeople(data.data);
      setPermohonanMeta(data.meta);
      setCurrentPermohonanSearch(search);
    } catch (error) {
      console.error('Error fetching request people:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSubmissions = useCallback(async (search: string, page: number) => {
    setLoading(true);
    try {
      const url = new URL('/api/status-check-submission', window.location.origin);
      url.searchParams.append('page', page.toString());
      url.searchParams.append('limit', '10');
      url.searchParams.append('search', search);
      url.searchParams.append('timestamp', Date.now().toString());
      
      const response = await fetch(url.toString(), {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      const data: ApiResponse<Submission> = await response.json();
      setSubmissions(data.data);
      setPengajuanMeta(data.meta);
      setCurrentPengajuanSearch(search);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeTab === 'cekStatusPermohonan') {
        fetchRequestPeople(currentPermohonanSearch, permohonanPage);
      } else {
        fetchSubmissions(currentPengajuanSearch, pengajuanPage);
      }
    }, REFRESH_INTERVAL);

    return () => clearInterval(intervalId);
  }, [activeTab, currentPermohonanSearch, currentPengajuanSearch, permohonanPage, pengajuanPage, fetchRequestPeople, fetchSubmissions]);

  // Load initial data
  useEffect(() => {
    if (activeTab === 'cekStatusPermohonan') {
      fetchRequestPeople('', 1);
    } else {
      fetchSubmissions('', 1);
    }
  }, [activeTab, fetchRequestPeople, fetchSubmissions]);

  const handlePermohonanSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPermohonanPage(1);
    fetchRequestPeople(permohonanSearch, 1);
  };

  const handlePengajuanSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPengajuanPage(1);
    fetchSubmissions(pengajuanSearch, 1);
  };

  const handlePermohonanPageChange = (newPage: number) => {
    setPermohonanPage(newPage);
    fetchRequestPeople(currentPermohonanSearch, newPage);
  };

  const handlePengajuanPageChange = (newPage: number) => {
    setPengajuanPage(newPage);
    fetchSubmissions(currentPengajuanSearch, newPage);
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

  const handleManualRefresh = () => {
    if (activeTab === 'cekStatusPermohonan') {
      fetchRequestPeople(currentPermohonanSearch, permohonanPage);
    } else {
      fetchSubmissions(currentPengajuanSearch, pengajuanPage);
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
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Cek Status Permohonan</CardTitle>
                <CardDescription>
                  Cari dan lihat status permohonan Anda
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleManualRefresh}
                disabled={loading}
              >
                {loading ? 'Memuat...' : 'Refresh'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePermohonanSearch} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Cari berdasarkan nama..." 
                  value={permohonanSearch}
                  onChange={(e) => setPermohonanSearch(e.target.value)}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Mencari...' : 'Cari'}
                </Button>
              </div>
            </form>

            {loading && activeTab === 'cekStatusPermohonan' ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
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
                        <TableCell>{(permohonanMeta.page - 1) * permohonanMeta.limit + index + 1}</TableCell>
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

                {permohonanMeta.showPagination && (
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Menampilkan {(permohonanMeta.page - 1) * permohonanMeta.limit + 1} - {Math.min(permohonanMeta.page * permohonanMeta.limit, permohonanMeta.total)} dari {permohonanMeta.total} data
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        disabled={!permohonanMeta.hasPreviousPage || loading}
                        onClick={() => handlePermohonanPageChange(permohonanMeta.page - 1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        disabled={!permohonanMeta.hasNextPage || loading}
                        onClick={() => handlePermohonanPageChange(permohonanMeta.page + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                {currentPermohonanSearch ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Tidak ada data permohonan'}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cekStatusPengajuan">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Cek Status Pengajuan</CardTitle>
                <CardDescription>
                  Cari dan lihat status pengajuan Anda
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleManualRefresh}
                disabled={loading}
              >
                {loading ? 'Memuat...' : 'Refresh'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePengajuanSearch} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Cari berdasarkan nama..." 
                  value={pengajuanSearch}
                  onChange={(e) => setPengajuanSearch(e.target.value)}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Mencari...' : 'Cari'}
                </Button>
              </div>
            </form>

            {loading && activeTab === 'cekStatusPengajuan' ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
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
                        <TableCell>{(pengajuanMeta.page - 1) * pengajuanMeta.limit + index + 1}</TableCell>
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

                {pengajuanMeta.showPagination && (
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Menampilkan {(pengajuanMeta.page - 1) * pengajuanMeta.limit + 1} - {Math.min(pengajuanMeta.page * pengajuanMeta.limit, pengajuanMeta.total)} dari {pengajuanMeta.total} data
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        disabled={!pengajuanMeta.hasPreviousPage || loading}
                        onClick={() => handlePengajuanPageChange(pengajuanMeta.page - 1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        disabled={!pengajuanMeta.hasNextPage || loading}
                        onClick={() => handlePengajuanPageChange(pengajuanMeta.page + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                {currentPengajuanSearch ? 'Tidak ditemukan data yang sesuai dengan pencarian' : 'Tidak ada data pengajuan'}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}