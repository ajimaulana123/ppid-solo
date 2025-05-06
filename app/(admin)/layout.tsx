// app/(admin)/layout.tsx
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AppSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const token = cookies().get('admin_token')?.value
  
    if (token !== process.env.ADMIN_PERMANENT_TOKEN) {
      redirect('/login')
    }
  

  return (
    <>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </>
  )
}
