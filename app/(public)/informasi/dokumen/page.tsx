'use client'

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { HeroSections } from "@/components/entities/HeroSections";

type PublicInformation = {
  id: number;
  title: string;
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
    fetchDocuments();
  }, [fetchDocuments]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Dokumen Informasi Publik" />
        <div className="mx-auto px-12 py-12 space-y-12">
          <form onSubmit={handleSearch} className="mb-4 flex gap-2">
            <Input
              placeholder="Cari berdasarkan judul informasi..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button type="submit">Cari</Button>
          </form>

          {loading ? (
            <div className="text-center py-4">Memuat...</div>
          ) : documents.length > 0 ? (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No</TableHead>
                      <TableHead>Judul</TableHead>
                      <TableHead>Waktu Pembuatan</TableHead>
                      <TableHead>Bentuk Tersedia</TableHead>
                      <TableHead>Masa Retensi</TableHead>
                      <TableHead>Jenis Media</TableHead>
                      <TableHead>Tanggal Dibuat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documents.map((doc, index) => (
                      <TableRow key={doc.id}>
                        <TableCell>{(meta.page - 1) * meta.limit + index + 1}</TableCell>
                        <TableCell className="font-medium">{doc.title}</TableCell>
                        <TableCell>{new Date(doc.creationTime).toLocaleDateString()}</TableCell>
                        <TableCell>{doc.availableForm}</TableCell>
                        <TableCell>{doc.retentionPeriod}</TableCell>
                        <TableCell>{doc.mediaType}</TableCell>
                        <TableCell>{new Date(doc.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {meta.showPagination && (
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={!meta.hasPreviousPage}
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
                      >
                        {">"}
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              {searchTerm ? 'Tidak ditemukan informasi dengan judul tersebut' : 'Tidak ada informasi tersedia'}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}