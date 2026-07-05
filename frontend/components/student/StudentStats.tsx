'use client';

import { CalendarCheck, ClipboardCheck, BarChart2, MessageSquare } from 'lucide-react';

export default function StudentStats() {
  return (
    <div className="grid grid-cols-4 gap-2 w-full mt-5">
      {/* Events */}
      <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-white/5 rounded-xl py-3 px-1 shadow-lg">
        <CalendarCheck className="w-5 h-5 text-purple-500 mb-1" strokeWidth={1.5} />
        <span className="text-lg font-bold text-white leading-none mb-0.5">28</span>
        <span className="text-[9px] text-slate-400 mb-1">Events</span>
        <span className="text-[8px] text-purple-400 font-medium">Upcoming: 5</span>
      </div>

      {/* Attendance */}
      <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-emerald-500/20 rounded-xl py-3 px-1 shadow-[0_0_15px_rgba(16,185,129,0.05)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5"></div>
        <ClipboardCheck className="w-5 h-5 text-emerald-500 mb-1 z-10" strokeWidth={1.5} />
        <span className="text-lg font-bold text-white leading-none mb-0.5 z-10">92%</span>
        <span className="text-[9px] text-slate-400 mb-1 z-10">Attendance</span>
        <span className="text-[8px] text-emerald-400 font-medium z-10">This Month</span>
      </div>

      {/* Polls */}
      <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-white/5 rounded-xl py-3 px-1 shadow-lg">
        <BarChart2 className="w-5 h-5 text-orange-500 mb-1" strokeWidth={1.5} />
        <span className="text-lg font-bold text-white leading-none mb-0.5">9</span>
        <span className="text-[9px] text-slate-400 mb-1">Polls</span>
        <span className="text-[8px] text-orange-400 font-medium">To Respond</span>
      </div>

      {/* Messages */}
      <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-white/5 rounded-xl py-3 px-1 shadow-lg">
        <MessageSquare className="w-5 h-5 text-blue-500 mb-1" strokeWidth={1.5} />
        <span className="text-lg font-bold text-white leading-none mb-0.5">7</span>
        <span className="text-[9px] text-slate-400 mb-1">Messages</span>
        <span className="text-[8px] text-blue-400 font-medium">Unread</span>
      </div>
    </div>
  );
}