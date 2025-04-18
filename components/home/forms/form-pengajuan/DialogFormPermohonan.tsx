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
import { requestFormSchema, RequestFormSchema } from "../../../../lib/schemaRequestForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const sendData = async (data: RequestFormSchema) => {
  const response = await fetch("/api/request", {
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

export function DialogFormPermohonan() {
  const {
    register,
    reset,
    resetField,
    setValue,
    getValues,
    getFieldState,
    clearErrors,
    trigger,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormSchema>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      fullName: "",
      nik: undefined,
      phone: undefined,
      email: "",
      detailInformation: ""
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit = async (data: RequestFormSchema) => {
    setIsSubmitting(true)
    setIsSuccess(false)
    setErrorMessage(null)

    try {
      const result = await sendData(data)
      console.log("Request submitted:", result)
      setIsSuccess(true)
      reset()
      // Optionally, close the dialog or show a success message
    } catch (error: any) {
      console.error("Error submitting request:", error)
      setErrorMessage(
        error.message || "An error occurred while submitting the request."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
          Ajukan Permohonan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Form Permohonan</DialogTitle>
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

            {/* Nomor Telepon */}
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="phone" className="font-bold">
                Nomor Telepon
              </Label>
              <Input
                id="phone"
                type="number"
                className="col-span-4"
                {...register("phone", { valueAsNumber: true })}
              />
              {errors.phone && (
                <p className="col-span-4 text-right text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="email" className="font-bold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="col-span-4"
                {...register("email")}
              />
              {errors.email && (
                <p className="col-span-4 text-right text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Detail Informasi */}
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="detailInformation" className="font-bold">
                Detail Informasi
              </Label>
              <Textarea
                id="detailInformation"
                className="col-span-4"
                {...register("detailInformation")}
              />
              {errors.detailInformation && (
                <p className="col-span-4 text-right text-sm text-red-500">
                  {errors.detailInformation.message}
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
                "Simpan Permohonan"
              )}
            </Button>
            {isSuccess && (
              <p className="mt-2 text-sm text-green-500">Permohonan berhasil dikirim!</p>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
