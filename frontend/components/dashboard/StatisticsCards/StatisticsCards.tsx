'use client';

import { Users, UserCheck, UserMinus, CalendarDays, ArrowUp, ArrowDown } from 'lucide-react';

export default function StatisticsCards() {
  const stats = [
    { id: 1, label: 'Total Students', value: '80', icon: Users, iconColor: 'text-green-500', bg: 'bg-green-500/10', trend: '5', isUp: true },
    { id: 2, label: 'Present Today', value: '68', icon: UserCheck, iconColor: 'text-blue-500', bg: 'bg-blue-500/10', trend: '4', isUp: true },
    { id: 3, label: 'Absent Today', value: '12', icon: UserMinus, iconColor: 'text-orange-500', bg: 'bg-orange-500/10', trend: '2', isUp: false },
    { id: 4, label: 'Attendance %', value: '95%', icon: CalendarDays, iconColor: 'text-purple-500', bg: 'bg-purple-500/10', trend: '3%', isUp: true },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 w-full mt-2">
      {stats.map((stat) => (
        <div 
          key={stat.id} 
          className="flex flex-col p-2.5 sm:p-3 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg hover:border-white/10 transition-colors"
        >
          {/* Top Row: Icon & Digit Side-by-Side */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
            <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${stat.bg} shrink-0`}>
              <stat.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.iconColor}`} />
            </div>
            <span className="text-sm sm:text-xl font-bold text-white leading-none">
              {stat.value}
            </span>
          </div>
          
          {/* Middle Row: Label */}
          <div className="mb-3">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight">
              {stat.label}
            </span>
          </div>
          
          {/* Bottom Row: Trend and "this week" (Always visible now) */}
          <div className="flex items-center mt-auto whitespace-nowrap">
            {stat.isUp ? (
              <ArrowUp className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${stat.iconColor} mr-0.5`} />
            ) : (
              <ArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 mr-0.5" />
            )}
            <span className={`text-[10px] sm:text-[10px] font-bold ${stat.isUp ? stat.iconColor : 'text-red-500'}`}>
              {stat.trend} <span className="text-slate-500 font-normal">this week</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}