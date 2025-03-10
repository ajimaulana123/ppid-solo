interface TugasFungsiProps {
    tugasFungsi: string[]
  }
  
  export const TugasFungsiEntity = ({ tugasFungsi }: TugasFungsiProps) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="space-y-4">
            {tugasFungsi.map((data, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {data}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  