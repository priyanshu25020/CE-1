'use client';

import { Search, SlidersHorizontal, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchCategory, setSearchCategory] = useState('All');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-2 lg:mt-4">
      
      {/* Interactive Search Input */}
      <div className="relative flex-1 w-full group">
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          {/* Category Dropdown */}
          <select 
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="h-full bg-transparent text-slate-300 text-xs lg:text-sm pl-4 pr-2 outline-none cursor-pointer appearance-none border-r border-white/10 hover:text-white transition-colors"
          >
            <option value="All" className="bg-[#0F121D]">All</option>
            <option value="Students" className="bg-[#0F121D]">Students</option>
            <option value="Leaders" className="bg-[#0F121D]">Leaders</option>
            <option value="Events" className="bg-[#0F121D]">Events</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-500 ml-1 absolute right-2 pointer-events-none" />
        </div>

        <Search className="absolute left-[105px] lg:left-[120px] top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
        
        <input 
          type="text" 
          placeholder={`Search ${searchCategory.toLowerCase()}...`} 
          className="w-full bg-[#121622]/80 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl py-3 lg:py-4 pl-[135px] lg:pl-[155px] pr-12 text-xs lg:text-base text-white placeholder:text-slate-500 outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all shadow-lg"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
          <SlidersHorizontal className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 hover:text-white" />
        </button>
      </div>

      {/* Enhanced Last Login Info */}
      <div className="flex items-center gap-3 shrink-0 text-slate-300 bg-[#121622]/80 backdrop-blur-sm px-4 py-3 lg:px-5 lg:py-4 rounded-xl lg:rounded-2xl border border-white/10 shadow-lg hover:border-indigo-500/30 transition-colors">
        <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" />
        <div className="flex flex-col justify-center">
          <span className="text-[10px] lg:text-xs text-slate-400 leading-tight">Last Login</span>
          <span className="text-xs lg:text-sm text-white font-semibold leading-tight">Today • 8:42 AM</span>
        </div>
      </div>
    </div>
  );
}