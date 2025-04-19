import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReasonOptions, submissionFormSchema, SubmissionFormSchema } from "@/lib/submission/schemaSubmissionForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

const sendData = async (data: SubmissionFormSchema) => {
  const response = await fetch("/api/submission", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to send request")
  }

  return response.json()
}

type ReasonOptionKey = keyof typeof ReasonOptions;

export function DialogFormPengajuan() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<SubmissionFormSchema>({
    resolver: zodResolver(submissionFormSchema),
    defaultValues: {
      nik: undefined,
      reasonOfSubmission: [],
      chronology: "",
    }
  })

  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const selectedReasons = watch("reasonOfSubmission");
  
  const handleReasonChange = (reasonId: ReasonOptionKey) => {
    const newReasons = selectedReasons.includes(reasonId)
      ? selectedReasons.filter(id => id !== reasonId)
      : [...selectedReasons, reasonId];
    setValue("reasonOfSubmission", newReasons);
  };

  const onSubmit = async (data: SubmissionFormSchema) => {
    setIsSubmitting(true)

    try {
      await sendData(data)
      toast({
        title: "Permohonan Berhasil",
        description: "Permohonan Anda telah berhasil dikirim.",
        variant: "default",
      })
      reset()
      setOpen(false)
    } catch (error) {
      console.error("Error submitting request:", error)
      toast({
        title: "Gagal Mengirim Permohonan",
        description: "Terjadi kesalahan saat mengirim permohonan. Silakan coba lagi.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
          Ajukan Permohonan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Form Permohonan Keberatan</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
                {Object.entries(ReasonOptions).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={key}
                      checked={(selectedReasons as string[]).includes(key)}
                      onChange={() => handleReasonChange(key as keyof typeof ReasonOptions)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor={key} className="text-sm font-normal">
                      {value}
                    </Label>
                  </div>
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
                "Kirim Permohonan"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}