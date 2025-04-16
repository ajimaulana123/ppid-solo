interface VisiMissionProps {
  content: {
    firstTitle: string,
    firstDescription: string,
    secondTitle: string,
    secondDescription: string[]
  }
}

export const VisiMission = ({ content }: VisiMissionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vision Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden h-fit">
        <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
            {content.firstTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">{content.firstDescription}</p>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
          {content.secondTitle}
        </h2>
        <ul className="space-y-4">
          {content.secondDescription.map((data, index) => (
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
