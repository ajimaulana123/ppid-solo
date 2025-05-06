'use client';

import { HeroSections } from "@/components/entities/HeroSections";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { DialogNews } from "@/components/admin/laporan/lkpd/NewsFormDialog";
import { useState, useEffect, useCallback } from "react";
import { NewsCard } from '@/components/admin/laporan/lkpd/NewsCard';
import { LoadingView } from '@/components/admin/laporan/lkpd/LoadingView';
import { ErrorView } from '@/components/admin/laporan/lkpd/ErrorView';

interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentSearch = searchParams.get('search') || '';

  useEffect(() => {
    setSearchInput(currentSearch);
  }, [currentSearch]);

  const fetchNews = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const url = `/api/report-lkpd?page=${currentPage}${
        currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ''
      }`;
      
      const res = await fetch(url, {
        cache: 'no-store'
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const { data, pagination } = await res.json();
      setNewsData(data);
      setPagination(pagination);
    } catch (err) {
      console.error("Error fetching LKPD reports:", err);
      setError("Gagal memuat data LKPD");
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentSearch]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchInput) params.set('search', searchInput);
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    setSearchInput('');
    router.push(`${pathname}?page=1`);
  };

  const handleNewsUpdate = useCallback(() => {
    fetchNews();
  }, [fetchNews]);

  if (isLoading) return <LoadingView />;
  if (error) return <ErrorView error={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Laporan Keuangan Pemerintah Daerah (LKPD)" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <div className="w-full mx-auto flex justify-between items-center">
            <DialogNews onNewsAdded={handleNewsUpdate} />
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Cari laporan..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Button type="submit">Cari</Button>
              {currentSearch && (
                <Button variant="outline" onClick={clearSearch} type="button">
                  Reset
                </Button>
              )}
            </form>
          </div>

          <div>
            {newsData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {currentSearch
                    ? `Tidak ditemukan laporan dengan kata kunci "${currentSearch}"`
                    : 'Tidak ada laporan tersedia'}
                </p>
                {currentSearch && (
                  <Button variant="link" onClick={clearSearch} className="mt-4">
                    Tampilkan semua laporan
                  </Button>
                )}
              </div>
            ) : (
              <>
                {currentSearch && (
                  <p className="text-sm text-gray-500 mb-4">
                    {`Menampilkan hasil untuk "${currentSearch}" (${pagination?.totalItems} hasil)`}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {newsData.map((item) => (
                    <NewsCard 
                      key={item.id} 
                      item={item} 
                      onNewsUpdated={handleNewsUpdate} 
                    />
                  ))}
                </div>

                {pagination && pagination.totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <Pagination
                      currentPage={pagination.currentPage}
                      totalPages={pagination.totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const maxVisiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        «
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        ‹
      </button>

      {startPage > 1 && <span className="px-3 py-1">...</span>}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border ${
            currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && <span className="px-3 py-1">...</span>}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        »
      </button>
    </div>
  );
}