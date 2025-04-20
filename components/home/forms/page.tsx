import { FormPermohonan } from "./form-permohonan/FormPermohonan";
import { FormPengajuan } from "./form-pengajuan/FormPengajuan";
import { CekStatus } from "./cek-status/CekStatus";
import { Statistik } from "./Statistik";

export const Forms = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FormPermohonan />
        <FormPengajuan />
        <CekStatus />
        <Statistik />
    </div>
)