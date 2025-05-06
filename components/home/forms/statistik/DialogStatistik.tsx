import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TabsStatistik } from "./tabs/Tabs";

export const DialogStatistik = React.memo(function DialogStatistik() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    className="w-full px-4 py-2.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
                    aria-label="Lihat statistik permohonan dan pengajuan"
                >
                    Lihat Statistik
                </Button>
            </DialogTrigger>
            <DialogContent 
                className="max-w-4xl max-h-[90vh] overflow-y-auto"
                onOpenAutoFocus={(e) => e.preventDefault()} // Mencegah auto-focus yang tidak perlu
            >
                <React.Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Memuat statistik...</div>}>
                    <TabsStatistik />
                </React.Suspense>
            </DialogContent>
        </Dialog>
    );
});