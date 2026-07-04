'use client';

import { Search, SlidersHorizontal, Clock } from 'lucide-react';

export default function SearchBar() {
  return (
   <div className="flex items-center justify-between gap-2 w-full -mt-6">
      {/* Search Input (flex-1 takes available space) */}
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search students, leaders, events..." 
          className="w-full bg-[#121622] border border-white/5 rounded-xl py-2 pl-8 pr-8 text-[11px] text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
        />
        <SlidersHorizontal className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Last Login Info (shrink-0 ensures it doesn't get squeezed) */}
      <div className="flex items-center gap-1.5 shrink-0 text-slate-400 bg-[#121622]/50 px-2.5 py-1.5 rounded-xl border border-white/5">
        <Clock className="w-3.5 h-3.5 text-indigo-400" />
        <div className="flex flex-col justify-center">
          <span className="text-[8px] leading-tight">Last Login</span>
          <span className="text-[9px] text-white font-medium leading-tight">Today • 8:42 AM</span>
        </div>
      </div>
    </div>
  );
}