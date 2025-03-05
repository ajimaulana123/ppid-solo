import Image from 'next/image';
import { useState, useMemo } from 'react';

interface Member {
  name: string;
  department: string;
  workUnit: string;
  position: string;
  rank: string;
  lastUpdate: string;
  image?: string;
}

interface OrganizationStructureProps {
  members: Member[];
}

export const PejabatStrukturalEntity = ({ members }: OrganizationStructureProps) => {
  const [searchName, setSearchName] = useState('');
  const [selectedWorkUnit, setSelectedWorkUnit] = useState('');

  const workUnits = useMemo(() => {
    const units = Array.from(new Set(members.map(member => member.workUnit))); 
    return units.sort();
  }, [members]);

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const nameMatch = member.name.toLowerCase().includes(searchName.toLowerCase());
      const workUnitMatch = !selectedWorkUnit || member.workUnit === selectedWorkUnit;
      return nameMatch && workUnitMatch;
    });
  }, [members, searchName, selectedWorkUnit]);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <label htmlFor="searchName" className="block text-sm font-medium text-gray-700 mb-1">Cari berdasarkan nama</label>
            <div className="relative">
              <input
                type="text"
                id="searchName"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Enter name to search..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white hover:bg-gray-50 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="workUnit" className="block text-sm font-medium text-gray-700 mb-1">Cari berdasarkan unit kerja</label>
            <div className="relative">
              <select
                id="workUnit"
                value={selectedWorkUnit}
                onChange={(e) => setSelectedWorkUnit(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white hover:bg-gray-50"
              >
                <option value="">Semua unit kerja</option>
                {workUnits.map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Menampilkan {filteredMembers.length} dari {members.length} member
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white p-2 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {member.image ? (
                  <Image
                    src={member.image || '/placeholder.jpg'}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-center space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-base text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">{member.position}</p>
                </div>
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm">{member.department}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">{member.workUnit}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697A3.42 3.42 0 001.946 9.12l7.835 13.12a1.42 1.42 0 002.418 0l7.834-13.12a3.42 3.42 0 00-2.889-4.423l-6.834-.517a1.42 1.42 0 00-1.475.517z" />
                    </svg>
                    <p className="text-sm">Golongan: {member.rank}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Update: {member.lastUpdate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
