import { Dataset1 } from "./Dataset1";
import { Dataset2 } from "./Dataset2";
import { Dataset3 } from "./Dataset3";


export const OpenData = () => (
    <div className="mt-16">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900">Open Data</h2>
      <a href="/dataset" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
        Lihat Semua »
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Dataset1 />
        <Dataset2 />
        <Dataset3 />
    </div>
  </div>
) 