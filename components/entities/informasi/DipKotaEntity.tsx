import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InformationItem {
  no: string;
  title: string;
  summary: string;
  informationOfficer: string;
  responsibleOfficer: string;
  creationTime: string;
  availableForm: string;
  retentionPeriod: string;
  mediaType: string;
}

interface DipKotaEntityProps {
  items: InformationItem[];
}

export const DipKotaEntity = ({ items }: DipKotaEntityProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [items, searchTerm]);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle>Daftar Informasi Publik</CardTitle>
          
          <div className="w-full max-w-2xl relative">
            <div className="relative">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari berdasarkan judul atau isi informasi..."
                className="w-full pl-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Menampilkan {filteredItems.length} dari {items.length} informasi
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No</TableHead>
              <TableHead>Judul Informasi</TableHead>
              <TableHead>Ringkasan</TableHead>
              <TableHead>Pejabat Pengelola</TableHead>
              <TableHead>Penanggung Jawab</TableHead>
              <TableHead className="w-[120px]">Waktu Pembuatan</TableHead>
              <TableHead className="w-[120px]">Bentuk Informasi</TableHead>
              <TableHead className="w-[120px]">Jangka Waktu</TableHead>
              <TableHead>Media</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.no}>
                <TableCell className="font-medium">{item.no}</TableCell>
                <TableCell className="font-semibold">{item.title}</TableCell>
                <TableCell className="text-sm">{item.summary}</TableCell>
                <TableCell className="text-sm">{item.informationOfficer}</TableCell>
                <TableCell className="text-sm">{item.responsibleOfficer}</TableCell>
                <TableCell className="text-sm">{item.creationTime}</TableCell>
                <TableCell className="text-sm">{item.availableForm}</TableCell>
                <TableCell className="text-sm">{item.retentionPeriod}</TableCell>
                <TableCell>
                  {item.mediaType.startsWith("http") ? (
                    <a
                      href={item.mediaType}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline break-all text-sm"
                    >
                      Link
                    </a>
                  ) : (
                    <span className="text-sm">{item.mediaType}</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Tidak ada data yang ditemukan
          </div>
        )}
      </CardContent>
    </Card>
  );
};