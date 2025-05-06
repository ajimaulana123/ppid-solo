'use client'

import { 
  Home, 
  Newspaper, 
  Image as ImageIcon, 
  Video, 
  Book, 
  Headphones, 
  Mail, 
  FileText,
  Plus
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const menuGroups = [
    {
      name: 'main',
      items: [
        { 
          href: '/admin/form-permohonan', 
          icon: <Home className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Permohonan' 
        },
        { 
          href: '/admin/form-pengajuan', 
          icon: <Home className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Pengajuan' 
        }
      ]
    },
    {
      name: 'berita',
      label: 'Berita',
      icon: <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />,
      items: [
        { 
          href: '/admin/berita/surakarta', 
          icon: <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Surakarta' 
        },
        { 
          href: '/admin/berita/transparansi', 
          icon: <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Transparansi' 
        }
      ]
    },
    {
      name: 'galeri',
      label: 'Galeri',
      icon: <ImageIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
      items: [
        { 
          href: '/admin/galeri/foto', 
          icon: <ImageIcon className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Foto' 
        },
        { 
          href: '/admin/galeri/video', 
          icon: <Video className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Video' 
        },
        { 
          href: '/admin/galeri/komik', 
          icon: <Book className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Komik' 
        },
        { 
          href: '/admin/galeri/podcast', 
          icon: <Headphones className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Podcast' 
        }
      ]
    },
    {
      name: 'kontak',
      items: [
        { 
          href: '/admin/kontak/hubungi', 
          icon: <Mail className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Hubungi Kami' 
        }
      ]
    },
    {
      name: 'laporan',
      label: 'Laporan',
      icon: <FileText className="mr-2 h-4 w-4" aria-hidden="true" />,
      items: [
        { 
          href: '/admin/laporan/lkpd', 
          icon: <FileText className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'LKPD' 
        },
        { 
          href: '/admin/laporan/ppid', 
          icon: <FileText className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'PPID' 
        },
        { 
          href: '/admin/laporan/survei', 
          icon: <FileText className="mr-2 h-4 w-4" aria-hidden="true" />, 
          label: 'Survei' 
        }
      ]
    }
  ]

  return (
    <Sidebar>
      <SidebarContent>
        {/* Main Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Tambah Baru</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGroups.find(group => group.name === 'main')?.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Berita Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center">
              <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Berita</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGroups.find(group => group.name === 'berita')?.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Galeri Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center">
              <ImageIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Galeri</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGroups.find(group => group.name === 'galeri')?.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Kontak Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Kontak</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGroups.find(group => group.name === 'kontak')?.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Laporan Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center">
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Laporan</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGroups.find(group => group.name === 'laporan')?.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}