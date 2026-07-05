'use client';

import { Megaphone } from 'lucide-react';

export default function StudentHero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#171336] to-[#0D0B1F] rounded-2xl p-4 border border-purple-500/20 overflow-hidden flex justify-between items-center mt-2 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
      {/* Background glowing effects */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-500/30 blur-2xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full"></div>

      {/* Left Content */}
      <div className="flex flex-col z-10 w-[60%]">
        <h2 className="text-sm font-bold text-white leading-tight mb-1">
          Stay Active. <span className="text-purple-400">Achieve More.</span>
        </h2>
        <p className="text-[9px] text-slate-300 leading-relaxed mb-3 pr-2">
          Participate in activities, respond on time and grow every day.
        </p>
        <button className="flex items-center gap-1.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-[9px] font-medium px-3 py-1.5 rounded-lg w-fit hover:bg-purple-600/30 transition-colors">
          <Megaphone className="w-3 h-3" />
          View Announcements
        </button>
      </div>

      {/* Right Image Placeholder */}
      <div className="z-10 w-[35%] flex justify-end">
        <div className="w-20 h-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border-dashed">
          <span className="text-[8px] text-slate-500 text-center font-medium">Girl Image<br/>Placeholder</span>
        </div>
      </div>
    </div>
  );
}