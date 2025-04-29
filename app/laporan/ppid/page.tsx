'use client';

import { HeroSections } from "@/components/entities/HeroSections";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const url = `/api/news?page=${currentPage}${
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
        console.error("Error fetching news:", err);
        setError("Gagal memuat data Laporan");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, currentSearch]);

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

  if (isLoading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Laporan PPID" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Cari Laporan..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Button type="submit">Cari</Button>
              {currentSearch && (
                <Button 
                  variant="outline" 
                  onClick={clearSearch}
                  type="button"
                >
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
                    ? `Tidak ditemukan Laporan dengan kata kunci "${currentSearch}"`
                    : 'Tidak ada Laporan tersedia'}
                </p>
                {currentSearch && (
                  <Button 
                    variant="link" 
                    onClick={clearSearch}
                    className="mt-4"
                  >
                    Tampilkan semua Laporan
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
                    <NewsCard key={item.id} item={item} />
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

// Komponen Pagination
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

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
        aria-label="First page"
      >
        «
      </button>
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
        aria-label="Previous page"
      >
        ‹
      </button>

      {startPage > 1 && <span className="px-3 py-1">...</span>}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? 'page' : undefined}
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
        aria-label="Next page"
      >
        ›
      </button>
      
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50"
        aria-label="Last page"
      >
        »
      </button>
    </div>
  );
}

// Komponen NewsCard
function NewsCard({ item }: { item: News }) {
  return (
    <Link href={`/report-ppid/${item.id}`} passHref legacyBehavior>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={item.imageUrl 
              ? `${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE}${item.imageUrl}`
              : '/default-news.jpg'}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(item.createdAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
            {item.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {item.content}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              #PPID
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Komponen LoadingView
function LoadingView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Laporan Surakarta" />
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Komponen ErrorView
function ErrorView({ error }: { error: string }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Laporan Surakarta" />
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
            <p className="font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}