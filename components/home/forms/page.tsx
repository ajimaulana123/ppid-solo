import { FormPermohonan } from "./form-pengajuan/FormPermohonan";
import { FormPengajuan } from "./FormPengajuan";
import { CekStatus } from "./CekStatus";
import { Statistik } from "./Statistik";

export const Forms = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FormPermohonan />
        <FormPengajuan />
        <CekStatus />
        <Statistik />
    </div>
)