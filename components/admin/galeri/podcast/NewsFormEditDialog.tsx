import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newsSchema, NewsSchema } from "@/lib/schemaNews";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";

interface DialogEditNewsProps {
    news: {
        id: number;
        title: string;
        content: string;
        imageUrl?: string; // URL gambar yang sudah ada
    };
    onNewsUpdated?: () => void;
    children?: React.ReactNode;
}

const updateData = async (id: number, formData: FormData) => {
    const response = await fetch(`/api/podcast-ppid/${id}`, {
        method: "PUT",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to update request");
    }

    return response.json();
};

export function DialogEditNews({ news, onNewsUpdated, children }: DialogEditNewsProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<NewsSchema>({
        resolver: zodResolver(newsSchema),
        defaultValues: {
            title: news.title,
            content: news.content,
            imageUrl: undefined, // File tidak di-set di defaultValues
        },
    });

    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(news.imageUrl || null);

    useEffect(() => {
        if (open) {
            reset({
                title: news.title,
                content: news.content,
                imageUrl: undefined,
            });
            setCurrentImageUrl(news.imageUrl || null);
            setPreview(null);
        }
    }, [open, news, reset]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue("imageUrl", file);
            setPreview(URL.createObjectURL(file));
            setCurrentImageUrl(null); // Reset URL gambar yang ada
        } else {
            setValue("imageUrl", undefined);
            setPreview(null);
        }
    };

    const removeImage = () => {
        setValue("imageUrl", undefined);
        setPreview(null);
        setCurrentImageUrl(null);
    };

    const onSubmit = async (data: NewsSchema) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", data.content);
            
            // Jika ada file baru
            if (data.imageUrl instanceof File) {
                formData.append("image", data.imageUrl);
            }
            // Jika gambar dihapus (tidak ada file baru dan tidak ada gambar yang ada)
            else if (!currentImageUrl) {
                formData.append("removeImage", "true");
            }

            await updateData(news.id, formData);

            toast({
                title: "Foro Diperbarui",
                description: "Podcast telah berhasil diperbarui.",
                variant: "default",
            });

            if (onNewsUpdated) {
                onNewsUpdated();
            }

            setOpen(false);
        } catch (error) {
            console.error("Error submitting request:", error);
            toast({
                title: "Gagal Memproses",
                description: "Terjadi kesalahan saat memperbarui Podcast. Silakan coba lagi.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild  className="absolute top-4 right-[70px] z-10">
                {children || (
                    <Button variant="outline" size="sm">
                        Edit
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Edit Podcast</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Judul laporan */}
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="title" className="font-bold">
                                Judul Podcast
                            </Label>
                            <Input
                                id="title"
                                className="col-span-4"
                                {...register("title")}
                            />
                            {errors.title && (
                                <p className="col-span-4 text-right text-sm text-red-500">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        {/* Konten laporan */}
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="content" className="font-bold">
                                Isi Podcast
                            </Label>
                            <Textarea
                                id="content"
                                className="col-span-4"
                                rows={6}
                                {...register("content")}
                            />
                            {errors.content && (
                                <p className="col-span-4 text-right text-sm text-red-500">
                                    {errors.content.message}
                                </p>
                            )}
                        </div>

                        {/* Upload Gambar */}
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="image" className="font-bold">
                                Gambar
                            </Label>
                            <div className="col-span-4 space-y-2">
                                {(preview || currentImageUrl) && (
                                    <div className="relative group">
                                        <Image
                                            src={preview || `${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE}${currentImageUrl}`}
                                            alt="Preview"
                                            width={300}
                                            height={200}
                                            className="h-32 w-full object-cover rounded-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    className="cursor-pointer"
                                    onChange={handleImageChange}
                                />
                                {errors.imageUrl && (
                                    <p className="text-right text-sm text-red-500">
                                        {typeof errors.imageUrl.message === 'string'
                                            ? errors.imageUrl.message
                                            : 'File gambar tidak valid'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="gap-2">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                isSubmitting && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Memproses...
                                </>
                            ) : (
                                "Simpan Perubahan"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}