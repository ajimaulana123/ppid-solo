import Image from 'next/image';

interface Member {
  name: string;
  position: string;
  image?: string;
}

interface OrganizationStructureProps {
  members: Member[];
}

export const ProfilPimpinanEntity = ({ members }: OrganizationStructureProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow">
                {member.image ? (
                  <Image
                    src={member.image || '/placeholder.jpg'}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 