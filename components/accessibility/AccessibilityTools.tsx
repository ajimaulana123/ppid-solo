"use client";

import { Button } from "../common/Button";

export const AccessibilityTools = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Alat Bantu Aksesibilitas</h3>
      <div className="space-y-2">
        <Button className="w-full text-left px-3 py-2">
          Perbesar Teks
        </Button>
        <Button className="w-full text-left px-3 py-2">
          Perkecil Teks
        </Button>
        <Button className="w-full text-left px-3 py-2">
          Kontras+
        </Button>
        <Button className="w-full text-left px-3 py-2">
          Mode Suara
        </Button>
        <Button className="w-full text-left px-3 py-2">
          Ramah Disleksia
        </Button>
        <Button className="w-full text-left px-3 py-2">
          Atur Ulang Semua
        </Button>
      </div>
    </div>
  );
}; 