// components/admin/news/NewsFormFields.tsx
'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { NewsSchema } from "@/lib/schemaNews";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

interface NewsFormFieldsProps {
  form: UseFormReturn<NewsSchema>;
}

export function NewsFormFields({ form }: NewsFormFieldsProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("imageUrl", file);
      setPreview(URL.createObjectURL(file));
    } else {
      form.setValue("imageUrl", undefined);
      setPreview(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Judul Berita */}
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Judul Berita</FormLabel>
            <FormControl>
              <Input placeholder="Masukkan judul berita" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Konten Berita */}
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Isi Berita</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tulis isi berita disini..."
                className="min-h-[200px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Upload Gambar */}
      <FormField
        control={form.control}
        name="imageUrl"
        render={() => (
          <FormItem>
            <FormLabel>Gambar Berita (Opsional)</FormLabel>
            <FormControl>
              <div className="space-y-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {preview && (
                  <div className="relative mt-2 h-48 w-full">
                    <Image
                      src={preview}
                      alt="Preview"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            </FormControl>
            <FormDescription>
              Ukuran maksimal 5MB. Format: JPG, PNG, atau WebP.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}