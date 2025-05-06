'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DialogEditNews } from "@/components/admin/galeri/video/NewsFormEditDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export function NewsCard({ item, onNewsUpdated }: { 
  item: News, 
  onNewsUpdated: () => void 
}) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/activities-video-ppid/${item.id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Gagal menghapus Video');
      }

      toast({
        title: "Berhasil",
        description: "Video telah dihapus",
        variant: "default"
      });

      onNewsUpdated();
    } catch (error) {
      toast({
        title: "Gagal",
        description: error instanceof Error ? error.message : 'Terjadi kesalahan saat menghapus video',
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="group relative">
      <DialogEditNews
        news={{
          id: item.id,
          title: item.title,
          content: item.content,
          imageUrl: item.imageUrl || undefined
        }}
        onNewsUpdated={onNewsUpdated}
      />

      <Link href={`/admin/galeri/video/${item.id}`} passHref legacyBehavior>
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

      <div className="absolute top-4 right-4">
        <Button 
          variant="destructive" 
          size="sm"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Penghapusan</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus laporan &quot;{item.title}&quot;? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>
              Batal
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menghapus...
                </>
              ) : (
                'Hapus'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}