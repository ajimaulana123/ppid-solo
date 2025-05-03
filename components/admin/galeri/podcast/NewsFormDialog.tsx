// components/admin/news/NewsFormDialog.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema, NewsSchema } from "@/lib/schemaNews";
import { Form } from "@/components/ui/form";
import { NewsFormFields } from "./NewsFormFields";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react"; // Import Loader2 dari lucide-react

export function DialogNews({ onNewsAdded }: { onNewsAdded?: () => void }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading
  const { toast } = useToast();
  
  const form = useForm<NewsSchema>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: undefined
    }
  });

  const onSubmit = async (data: NewsSchema) => {
    setIsSubmitting(true); // Aktifkan loading state
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      if (data.imageUrl) formData.append('image', data.imageUrl);

      const res = await fetch('/api/podcast-ppid', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error('Gagal menambahkan Podcast');

      toast({
        title: "Berhasil",
        description: "Podcast baru telah ditambahkan",
        variant: "default"
      });

      form.reset();
      setOpen(false);
      onNewsAdded?.();
    } catch (error: any) {
      toast({
        title: "Gagal",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false); // Matikan loading state
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Tambah Podcast
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Podcast Baru</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <NewsFormFields form={form} />
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting} // Disable tombol saat loading
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}