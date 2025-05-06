import React from 'react';

interface Award {
  title: string;
  year: string;
  category: string;
  icon: string;
}

const AwardItem = React.memo(({ award }: { award: Award }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 w-16 h-16 flex items-center justify-center">
        <svg 
          className="w-8 h-8 text-yellow-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={award.icon} 
          />
        </svg>
      </div>
      <div className="flex-1">
        <div className="text-sm text-yellow-600 font-medium">{award.year}</div>
        <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
      </div>
    </div>
    <div className="bg-yellow-50 rounded-lg px-4 py-2 text-sm text-yellow-700 font-medium text-center">
      {award.category}
    </div>
  </div>
));
AwardItem.displayName = 'AwardItem';

const Awards = React.memo(function Awards() {
  const awardsData: Award[] = [
    {
      title: "Keterbukaan Informasi Publik",
      year: "2024",
      category: "Kualifikasi Informatif",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      title: "Smart City Rating",
      year: "2023",
      category: "Kategori Utama",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      title: "Website Terbaik",
      year: "2023",
      category: "Tingkat Nasional",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">PENGHARGAAN</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awardsData.map((award, i) => (
          <AwardItem key={`award-${i}`} award={award} />
        ))}
      </div>
    </div>
  );
});

export { Awards };