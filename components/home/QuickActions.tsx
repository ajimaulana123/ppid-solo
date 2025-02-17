interface QuickActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

const QuickAction = ({ title, subtitle, buttonText, onClick }: QuickActionProps) => (
  <div className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
    <button 
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
    >
      {buttonText}
    </button>
  </div>
);

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <QuickAction
        title="Form Permohonan"
        subtitle="Informasi Publik"
        buttonText="Ajukan Permohonan"
        onClick={() => {/* handle click */}}
      />
      <QuickAction
        title="Form Pengajuan"
        subtitle="Keberatan"
        buttonText="Ajukan Keberatan"
        onClick={() => {/* handle click */}}
      />
      <QuickAction
        title="Cek Status"
        subtitle="Permohonan Informasi"
        buttonText="Cek Status"
        onClick={() => {/* handle click */}}
      />
      <QuickAction
        title="Statistik"
        subtitle="Layanan Informasi"
        buttonText="Lihat Statistik"
        onClick={() => {/* handle click */}}
      />
    </div>
  );
}; 