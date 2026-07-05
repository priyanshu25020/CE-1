'use client';

import { motion } from 'framer-motion';
import { Users, UserCheck, UserX, CalendarCheck, ArrowUp, ArrowDown } from 'lucide-react';

export default function StatisticsCards() {
  const stats = [
    { 
      id: 1, 
      title: 'Total Students', 
      value: '80', 
      icon: Users, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-400/10', 
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] group-hover:border-emerald-500/30',
      trend: '5 this week', 
      isUp: true 
    },
    { 
      id: 2, 
      title: 'Present Today', 
      value: '68', 
      icon: UserCheck, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/10', 
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] group-hover:border-blue-500/30',
      trend: '4 this week', 
      isUp: true 
    },
    { 
      id: 3, 
      title: 'Absent Today', 
      value: '12', 
      icon: UserX, 
      color: 'text-orange-400', 
      bg: 'bg-orange-500/10', 
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)] group-hover:border-orange-500/30',
      trend: '2 this week', 
      isUp: false 
    },
    { 
      id: 4, 
      title: 'Attendance %', 
      value: '95%', 
      icon: CalendarCheck, 
      color: 'text-purple-400', 
      bg: 'bg-purple-500/10', 
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)] group-hover:border-purple-500/30',
      trend: '3% this week', 
      isUp: true 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
      {stats.map((stat) => (
        <motion.div 
          key={stat.id}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative flex items-center p-6 bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.08] group cursor-pointer transition-colors duration-300 ${stat.glow} overflow-hidden h-[165px]`}
        >
          {/* Main Content Layout: Icon on Left, Text on Right */}
          <div className="flex items-start gap-5 z-10 w-full h-full">
            
            {/* Left: Rounded Square Icon Box */}
            <div className={`flex items-center justify-center w-16 h-16 rounded-[14px] ${stat.bg} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} strokeWidth={2.5} />
            </div>
            
            {/* Right: Stacked Text (Title, Value, Trend) */}
           <div className="flex flex-col justify-between h-full py-2">
              <span className="text-[13px] font-medium text-slate-400 mb-1">
                {stat.title}
              </span>
              <span className="text-[42px] font-bold text-white leading-none mb-1.5">
                {stat.value}
              </span>
              
              {/* Trend Indicator */}
              <div className="flex items-center gap-1">
                {stat.isUp ? (
                  <ArrowUp className={`w-3.5 h-3.5 ${stat.color}`} strokeWidth={3} />
                ) : (
                  <ArrowDown className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                )}
                <span className={`text-[11px] font-semibold ${stat.isUp ? stat.color : 'text-red-500'}`}>
                  {stat.isUp ? '↑' : '↓'} {stat.trend}
                </span>
              </div>
            </div>
            
          </div>

          {/* Subtle Background Glow for Depth */}
          <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full ${stat.bg}`} />
        </motion.div>
      ))}
    </div>
  );
}