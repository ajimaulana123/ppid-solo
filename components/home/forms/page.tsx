import React from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from "@/components/ui/skeleton";

// Define a more specific type for your components
type FormComponentProps = Record<string, never>; // For components with no props

// Dynamic imports with proper typing - using named exports
const FormPermohonan = dynamic<FormComponentProps>(
  () => import("./form-permohonan/FormPermohonan").then((mod) => mod.FormPermohonan),
  { 
    loading: () => <Skeleton className="h-[200px] w-full rounded-2xl" />,
    ssr: false 
  }
);

const FormPengajuan = dynamic<FormComponentProps>(
  () => import("./form-pengajuan/FormPengajuan").then((mod) => mod.FormPengajuan),
  { 
    loading: () => <Skeleton className="h-[200px] w-full rounded-2xl" />,
    ssr: false 
  }
);

const CekStatus = dynamic<FormComponentProps>(
  () => import("./cek-status/CekStatus").then((mod) => mod.CekStatus),
  { 
    loading: () => <Skeleton className="h-[200px] w-full rounded-2xl" />,
    ssr: false 
  }
);

const Statistik = dynamic<FormComponentProps>(
  () => import("./statistik/Statistik").then((mod) => mod.Statistik),
  { 
    loading: () => <Skeleton className="h-[200px] w-full rounded-2xl" />,
    ssr: false 
  }
);

export const Forms = React.memo(function Forms() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <FormPermohonan />
      <FormPengajuan />
      <CekStatus />
      <Statistik />
    </div>
  );
});