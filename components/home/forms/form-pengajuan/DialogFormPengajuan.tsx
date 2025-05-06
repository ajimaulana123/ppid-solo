import React, { useCallback, useMemo } from 'react';
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
import { ReasonOptions, submissionFormSchema, SubmissionFormSchema } from "@/lib/submission/schemaSubmissionForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Komponen Checkbox yang di-memo
const ReasonCheckbox = React.memo(({
  id,
  label,
  checked,
  onChange
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="grid grid-cols-[auto_1fr] gap-2">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <Label htmlFor={id} className="text-sm font-normal">
      {label}
    </Label>
  </div>
));
ReasonCheckbox.displayName = 'ReasonCheckbox';

const DialogFormPengajuan = React.memo(function DialogFormPengajuan() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<SubmissionFormSchema>({
    resolver: zodResolver(submissionFormSchema),
    defaultValues: useMemo(() => ({
      nik: undefined,
      reasonOfSubmission: [],
      chronology: "",
      fullName: ""
    }), [])
  });

  const selectedReasons = watch("reasonOfSubmission");

  // Handler untuk pengiriman data dengan useCallback
  const sendData = useCallback(async (data: SubmissionFormSchema) => {
    const response = await fetch("/api/submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to send request");
    return response.json();
  }, []);

  // Handler untuk perubahan checkbox reason
  const handleReasonChange = useCallback((reasonId: keyof typeof ReasonOptions) => {
    const newReasons = selectedReasons.includes(reasonId)
      ? selectedReasons.filter(id => id !== reasonId)
      : [...selectedReasons, reasonId];
    setValue("reasonOfSubmission", newReasons);
  }, [selectedReasons, setValue]);

  // Handler untuk submit form
  const onSubmit = useCallback(async (data: SubmissionFormSchema) => {
    setIsSubmitting(true);
    try {
      await sendData(data);
      toast({
        title: "Permohonan Berhasil",
        description: "Permohonan Anda telah berhasil dikirim.",
        variant: "default",
      });
      reset();
      setOpen(false);
    } catch {
      toast({
        title: "Gagal Mengirim Permohonan",
        description: "Terjadi kesalahan saat mengirim permohonan.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [sendData, toast, reset]);

  // Handler untuk perubahan dialog
  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
    if (!open) reset();
  }, [reset]);

  // Memoisasi daftar reason options
  const reasonOptionsList = useMemo(() => 
    Object.entries(ReasonOptions).map(([key, value]) => ({
      key: key as keyof typeof ReasonOptions,
      value
    })), []);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
          Ajukan Pengajuan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Form Permohonan Keberatan</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Nama Lengkap */}
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="fullName" className="font-bold">
                Nama Lengkap
              </Label>
              <Input
                id="fullName"
                className="col-span-4"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="col-span-4 text-right text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            
            {/* NIK */}
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="nik" className="font-bold">
                NIK
              </Label>
              <Input
                id="nik"
                type="number"
                className="col-span-4"
                {...register("nik", { valueAsNumber: true })}
              />
              {errors.nik && (
                <p className="col-span-4 text-right text-sm text-red-500">
                  {errors.nik.message}
                </p>
              )}
            </div>

            {/* Alasan Pengajuan Keberatan */}
            <div className="grid grid-cols-1 gap-4">
              <Label className="font-bold">Alasan Pengajuan Keberatan</Label>
              <div className="space-y-2">
                {reasonOptionsList.map(({key, value}) => (
                  <ReasonCheckbox
                    key={key}
                    id={key}
                    label={value}
                    checked={(selectedReasons as string[]).includes(key)}
                    onChange={() => handleReasonChange(key)}
                  />
                ))}
                {errors.reasonOfSubmission && (
                  <p className="text-sm text-red-500">
                    {errors.reasonOfSubmission.message}
                  </p>
                )}
              </div>
            </div>

            {/* Kronologi */}
            <div className="grid grid-cols-1 gap-4">
              <Label htmlFor="chronology" className="font-bold">
                Kronologi
              </Label>
              <Textarea
                id="chronology"
                className="w-full"
                rows={5}
                {...register("chronology")}
              />
              {errors.chronology && (
                <p className="text-sm text-red-500">
                  {errors.chronology.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
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
                  Mengirim...
                </>
              ) : (
                "Kirim Pengajuan"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export  { DialogFormPengajuan };