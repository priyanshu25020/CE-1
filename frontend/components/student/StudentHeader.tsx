'use client';

import { Bell } from 'lucide-react';

export default function StudentHeader() {
  return (
    <div className="flex items-center justify-between pt-6 pb-2 px-5">
      {/* Left: Avatar & Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full bg-indigo-500/20 p-0.5 border border-indigo-500/30">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=4f46e5" 
            alt="Student" 
            className="w-full h-full rounded-full bg-[#0F121D]" 
          />
        </div>
        
        {/* Info */}
        <div className="flex flex-col">
          <span className="text-[11px] text-slate-400 font-medium">
            Good Morning, <span className="text-purple-400">Riya</span> 👋
          </span>
          <span className="text-lg font-bold text-white leading-tight">
            Riya Sharma
          </span>
          <span className="text-[9px] bg-purple-500/15 border border-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md w-fit mt-1 font-medium tracking-wide">
            CE-A • 2nd Year
          </span>
        </div>
      </div>

      {/* Right: Notification Bell */}
      <div className="relative p-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
        <Bell className="w-5 h-5 text-slate-300" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 text-white text-[8px] font-bold flex items-center justify-center rounded-full border-[1.5px] border-[#090B14]">
          3
        </div>
      </div>
    </div>
  );
}