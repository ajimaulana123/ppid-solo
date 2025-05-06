'use client'

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { HeroSections } from "@/components/entities/HeroSections";

type PublicInformation = {
  id: number;
  title: string;
  summary: string;
  informationOfficer: string;
  responsibleOfficer: string;
  creationTime: string;
  availableForm: string;
  retentionPeriod: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
};

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
};

const InformationRow = memo(({ 
  doc, 
  index,
  meta 
}: { 
  doc: PublicInformation;
  index: number;
  meta: ApiResponse<PublicInformation>['meta'];
}) => (
  <TableRow>
    <TableCell>{(meta.page - 1) * meta.limit + index + 1}</TableCell>
    <TableCell className="font-medium">{doc.title}</TableCell>
    <TableCell>{doc.summary}</TableCell>
    <TableCell>{doc.informationOfficer}</TableCell>
    <TableCell>{doc.responsibleOfficer}</TableCell>
    <TableCell>{new Date(doc.creationTime).toLocaleDateString()}</TableCell>
    <TableCell>{doc.availableForm}</TableCell>
    <TableCell>{doc.retentionPeriod}</TableCell>
    <TableCell>{doc.mediaType}</TableCell>
    <TableCell>{new Date(doc.createdAt).toLocaleDateString()}</TableCell>
  </TableRow>
));
InformationRow.displayName = 'InformationRow';

export default function PublicInformationTable() {
  const [documents, setDocuments] = useState<PublicInformation[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<ApiResponse<PublicInformation>['meta']>({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    showPagination: false,
    currentSearch: '',
  });

  const fetchDocuments = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/public-information?page=${page}&limit=10&search=${searchTerm}`, {
        cache: 'no-store'
    });
      if (!res.ok) throw new Error('Failed to fetch information');
      
      const data: ApiResponse<PublicInformation> = await res.json();
      setDocuments(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error("Error fetching public information:", error);
    } finally {
      setLoading(false);
    }
  }, [page, searchTerm]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchDocuments();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [fetchDocuments]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setPage(1);
  }, [searchInput]);

  const paginationControls = useMemo(() => (
    meta.showPagination && (
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={!meta.hasPreviousPage}
              aria-label="Previous page"
            >
              {"<"}
            </Button>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 py-2 text-sm">
              Halaman {meta.page} dari {meta.totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!meta.hasNextPage}
              aria-label="Next page"
            >
              {">"}
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  ), [meta]);

  const emptyStateMessage = useMemo(() => (
    <div className="text-center py-4">
      {searchTerm ? 'Tidak ditemukan informasi dengan judul tersebut' : 'Tidak ada informasi tersedia'}
    </div>
  ), [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Daftar Informasi Publik PPID Perangkat Daerah" />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
          <form onSubmit={handleSearch} className="mb-4 flex gap-2">
            <Input
              placeholder="Cari berdasarkan judul informasi..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Search information"
            />
            <Button type="submit">Cari</Button>
          </form>

          {loading ? (
            <div className="text-center py-4">Memuat...</div>
          ) : documents.length > 0 ? (
            <>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No</TableHead>
                      <TableHead>Judul</TableHead>
                      <TableHead>Ringkasan</TableHead>
                      <TableHead>Pejabat Pengelola</TableHead>
                      <TableHead>Penanggung Jawab</TableHead>
                      <TableHead>Waktu Pembuatan</TableHead>
                      <TableHead>Bentuk Tersedia</TableHead>
                      <TableHead>Masa Retensi</TableHead>
                      <TableHead>Jenis Media</TableHead>
                      <TableHead>Tanggal Dibuat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documents.map((doc, index) => (
                      <InformationRow key={doc.id} doc={doc} index={index} meta={meta} />
                    ))}
                  </TableBody>
                </Table>
              </div>

              {paginationControls}
            </>
          ) : (
            emptyStateMessage
          )}
        </div>
      </main>
    </div>
  );
}