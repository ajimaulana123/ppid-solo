import { pusatPerekonomianNasionalKotaGlobal } from "./data";

export const PusatPerekonomianNasionalGlobal = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
            {pusatPerekonomianNasionalKotaGlobal.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-blue-100 transition-colors">
            Kota Surakarta sebagai Pusat Perekonomian Nasional dan Kota
            Global berfungsi sebagai:
        </p>
        <ul className="space-y-4">
            {pusatPerekonomianNasionalKotaGlobal.description.map((data, index) => (
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
);
