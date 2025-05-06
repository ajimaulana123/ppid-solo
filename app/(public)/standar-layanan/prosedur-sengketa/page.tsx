import { HeroSections } from "@/components/entities/HeroSections";
import { ProsedurLayananEntity } from "@/components/entities/standar-layanan/ProsedurLayananEntity";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Prosedur Permohonan Penyelesaian Sengketa Informasi"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <ProsedurLayananEntity />
        </div>
      </main>
    </div>
  );
}
