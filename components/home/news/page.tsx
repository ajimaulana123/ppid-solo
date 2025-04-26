'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: News[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
  };
}

interface NewsProps {
  horizontalNewsView?: string;
  topGap?: string;
}

export const News = ({ horizontalNewsView = "grid grid-cols-1 md:grid-cols-3", topGap = "mt-16" }: NewsProps) => {
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await fetch('/api/news?limit=3');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const responseData: ApiResponse = await res.json();
        
        if (!responseData.data || !Array.isArray(responseData.data)) {
          throw new Error('Format data tidak valid');
        }
        
        setLatestNews(responseData.data);
      } catch (err) {
        console.error("Error fetching latest news:", err);
        setError(err instanceof Error ? err.message : "Gagal memuat berita terbaru");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  if (loading) {
    return (
      <div className={topGap}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Berita Terkini</h2>
          <Link href="/berita/surakarta" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
            Lihat Semua »
          </Link>
        </div>
        <div className={`${horizontalNewsView} gap-6`}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48 w-full bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-full bg-gray-200 rounded mb-3"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={topGap}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Berita Terkini</h2>
          <Link href="/berita/surakarta" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
            Lihat Semua »
          </Link>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded text-sm"
          >
            Muat Ulang Halaman
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={topGap}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Berita Terkini</h2>
        <Link href="/berita/surakarta" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
          Lihat Semua »
        </Link>
      </div>

      <div className={`${horizontalNewsView} gap-6`}>
        {Array.isArray(latestNews) && latestNews.map((news) => (
          <Link
            key={news.id}
            href={`/berita/surakarta/${news.id}`}
            className="block hover:no-underline"
          >
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
              {news.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE}${news.imageUrl}`}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={true}
                  />
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(news.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {news.content}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">#PPID</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};