import { NavItem as NavItemType } from "@/types";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";

const navItems: NavItemType[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Struktur Organisasi", href: "/profil/struktur" },
    ],
  },
  {
    label: "Informasi Publik",
    href: "/informasi",
    children: [
      { label: "Informasi Berkala", href: "/informasi/berkala" },
      { label: "Informasi Serta Merta", href: "/informasi/serta-merta" },
      { label: "Informasi Setiap Saat", href: "/informasi/setiap-saat" },
    ],
  },
  { label: "Standar Layanan", href: "/standar-layanan" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
          
          <MobileMenu items={navItems} />
        </div>
      </div>
    </nav>
  );
}; 