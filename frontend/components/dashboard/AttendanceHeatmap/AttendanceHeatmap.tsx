'use client';

import { Home, ChevronDown } from 'lucide-react';

export default function AttendanceHeatmap() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Dummy data representing 4 lectures/slots per day
  // Colors: bg-green-500 (High), bg-yellow-500 (Medium), bg-red-500 (Low), bg-slate-700 (No Data)
  const heatmapData = [
    ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'], // Mon
    ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'], // Tue
    ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'], // Wed
    ['bg-green-500', 'bg-green-500', 'bg-yellow-500', 'bg-yellow-500'], // Thu
    ['bg-yellow-500', 'bg-red-500', 'bg-slate-700', 'bg-slate-700'], // Fri
    ['bg-slate-700', 'bg-slate-700', 'bg-slate-700', 'bg-slate-700'], // Sat
  ];

  return (
    <div className="flex flex-col p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4 text-green-400" />
          <h3 className="text-sm font-semibold text-white tracking-wide">Attendance Heatmap</h3>
        </div>
        <button className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors">
          This Week <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Grid Area */}
      <div className="flex flex-col gap-3">
        {/* Days Header */}
        <div className="grid grid-cols-6 gap-2">
          {days.map(day => (
            <span key={day} className="text-[10px] text-slate-400 text-center">{day}</span>
          ))}
        </div>
        
        {/* Dots Grid */}
        <div className="grid grid-cols-6 gap-2">
          {heatmapData.map((daySlots, dayIdx) => (
            <div key={dayIdx} className="flex flex-col gap-2 items-center">
              {daySlots.map((color, slotIdx) => (
                <div key={slotIdx} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${color} shadow-[0_0_5px_rgba(0,0,0,0.5)]`}></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span><span className="text-[9px] text-slate-400">High</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500"></span><span className="text-[9px] text-slate-400">Medium</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="text-[9px] text-slate-400">Low</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-700"></span><span className="text-[9px] text-slate-400">No Data</span></div>
      </div>
    </div>
  );
}