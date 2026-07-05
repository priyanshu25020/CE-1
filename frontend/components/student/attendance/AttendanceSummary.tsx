'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar as CalendarIcon, Shield, ChevronDown } from 'lucide-react';

export default function AttendanceSummary() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full gap-5">
      
      {/* App Bar */}
      <div className="flex items-center justify-between pt-6 pb-2 px-1">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="p-2 bg-white/5 rounded-full text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-white">Attendance</h1>
        </div>
        <button className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Info Banner */}
      <div className="w-full bg-gradient-to-r from-[#171336] to-[#0D0B1F] rounded-2xl p-4 border border-purple-500/20 flex items-center justify-between shadow-lg relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full"></div>
        
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-[#0F121D] border border-white/10 rounded-xl flex items-center justify-center shrink-0">
            <CalendarIcon className="w-5 h-5 text-slate-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-white mb-0.5">You can only view your attendance.</span>
            <span className="text-[10px] text-slate-400">Attendance is marked by your leaders.</span>
          </div>
        </div>
        <div className="z-10">
          <Shield className="w-8 h-8 text-purple-400 opacity-80" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between w-full bg-[#0B0E17] rounded-xl p-1 border border-white/5">
        <button className="w-1/3 py-2 bg-purple-600 rounded-lg text-[11px] font-bold text-white shadow-lg">Lecture Wise</button>
        <button className="w-1/3 py-2 text-[11px] font-medium text-slate-400 hover:text-white transition-colors">Week Wise</button>
        <button className="w-1/3 py-2 text-[11px] font-medium text-slate-400 hover:text-white transition-colors">Monthly</button>
      </div>

      {/* Summary Stats */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <BarChartIcon className="w-4 h-4 text-purple-500" />
            <h2 className="text-sm font-bold text-white">Overall Summary</h2>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0E17] border border-white/10 rounded-lg text-[10px] text-slate-300">
            This Month <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-emerald-500/20 rounded-xl py-3 px-1">
            <span className="text-xl font-bold text-emerald-400 mb-0.5">92%</span>
            <span className="text-[10px] text-slate-300 mb-0.5">Present</span>
            <span className="text-[8px] text-emerald-500 font-medium">23 Lectures</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-orange-500/20 rounded-xl py-3 px-1">
            <span className="text-xl font-bold text-orange-400 mb-0.5">6%</span>
            <span className="text-[10px] text-slate-300 mb-0.5">Absent</span>
            <span className="text-[8px] text-orange-500 font-medium">2 Lectures</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-red-500/20 rounded-xl py-3 px-1">
            <span className="text-xl font-bold text-red-400 mb-0.5">2%</span>
            <span className="text-[10px] text-slate-300 mb-0.5">Late</span>
            <span className="text-[8px] text-red-500 font-medium">1 Lecture</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#0B0E17] border border-blue-500/20 rounded-xl py-3 px-1">
            <span className="text-xl font-bold text-blue-400 mb-0.5">25</span>
            <span className="text-[10px] text-slate-300 mb-0.5">Total</span>
            <span className="text-[8px] text-blue-500 font-medium">Lectures</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom icon mimicking the image
function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
    </svg>
  );
}