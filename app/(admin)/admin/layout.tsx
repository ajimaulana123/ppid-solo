import { LoadingScreen } from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/toaster"
import { Providers } from '@/app/providers'
import { SvgCursor } from '@/app/CustomCursor'

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <LoadingScreen />
        <Toaster />
        <SvgCursor />
        <Providers>{children}</Providers>
      </>
    )
  }