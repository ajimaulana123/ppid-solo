import { useState, useMemo } from 'react';

interface Member {
  name: string;
  phone: string;
  fax: string;
  address: string;
}

interface OrganizationStructureProps {
  members: Member[];
}

export const SatuanUnitKerjaEntity = ({ members }: OrganizationStructureProps) => {
  const [searchName, setSearchName] = useState('');

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      return member.name.toLowerCase().includes(searchName.toLowerCase());
    });
  }, [members, searchName]);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4">
          <div className="w-full max-w-2xl relative">
            <label htmlFor="searchName" className="block text-sm font-medium text-gray-700 mb-1">Cari berdasarkan nama unit</label>
            <div className="relative">
              <input
                type="text"
                id="searchName"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Masukkan nama unit..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white hover:bg-gray-50 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Menampilkan {filteredMembers.length} dari {members.length} unit
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative">
              <div className="flex-grow space-y-4">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <div className="space-y-2 bg-gray-50 p-4 rounded-lg w-full">
                    <a href={`tel:${member.phone}`} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="break-all">{member.phone}</span>
                    </a>
                    {member.fax && (
                      <span className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        <span className="break-all">{member.fax}</span>
                      </span>
                    )}
                    <div className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm">{member.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
