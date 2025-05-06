'use client';

import { HeroSections } from '@/components/entities/HeroSections';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface News {
    id: number;
    title: string;
    content: string;
    imageUrl: string | null;
    createdAt: string;
    updatedAt: string;
}

export default function NewsDetailPage() {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState<News | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/news/${id}`, {
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setNewsItem(data);
            } catch (err) {
                console.error("Error fetching news detail:", err);
                setError("Gagal memuat detail berita");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <LoadingView />;
    }

    if (error) {
        return <ErrorView error={error} />;
    }

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-gray-50">
                <main>
                    <HeroSections title="Detail Berita" />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <p>Berita tidak ditemukan</p>
                        <Link href="/admin/berita/transparansi">
                            <Button className="mt-4">
                                Kembali ke Daftar Berita
                            </Button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main>
                <HeroSections title="Detail Berita" />
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/admin/berita/transparansi">
                            <Button variant="ghost" className="mb-6">
                                <ChevronLeft className="mr-2 h-4 w-4" />
                                Kembali ke Daftar Berita
                            </Button>
                        </Link>

                        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            {newsItem.imageUrl && (
                                <div className="relative h-96 w-full">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE}${newsItem.imageUrl}`}
                                        alt={newsItem.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                            )}

                            <div className="p-6 md:p-8">
                                <div className="text-sm text-gray-500 mb-4">
                                    {new Date(newsItem.createdAt).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>

                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    {newsItem.title}
                                </h1>

                                <div className="prose max-w-none text-gray-700">
                                    {newsItem.content.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Komponen yang sama seperti sebelumnya
function LoadingView() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main>
                <HeroSections title="Detail Berita" />
                <div className="container mx-auto px-6 py-12 text-center">
                    <p>Memuat detail berita...</p>
                </div>
            </main>
        </div>
    );
}

function ErrorView({ error }: { error: string }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <main>
                <HeroSections title="Detail Berita" />
                <div className="container mx-auto px-6 py-12 text-center">
                    <p className="text-red-500">{error}</p>
                    <Link href="/admin/berita/transaparnsi">
                        <Button className="mt-4">
                            Kembali ke Daftar Berita
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}