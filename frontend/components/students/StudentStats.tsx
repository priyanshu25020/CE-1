'use client';

import { motion } from 'framer-motion';
import { Users, UserCheck, UserX, CalendarDays, UserCog, ArrowUp } from 'lucide-react';

export default function StudentStats() {
  const stats = [
    {
      id: 1,
      title: 'Total Students',
      value: '80',
      icon: Users,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-white/[0.05]',
      bottomContent: (
        <div className="flex flex-col gap-1.5 mt-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-slate-400">
            <span>Active Students</span>
            <span className="text-white">100%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Present Today',
      value: '68',
      icon: UserCheck,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-white/[0.05]',
      bottomContent: (
        <div className="mt-4 text-[11px] font-medium text-slate-400">
          85% of total
        </div>
      )
    },
    {
      id: 3,
      title: 'Absent Today',
      value: '12',
      icon: UserX,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-white/[0.05]',
      bottomContent: (
        <div className="mt-4 text-[11px] font-medium text-slate-400">
          15% of total
        </div>
      )
    },
    {
      id: 4,
      title: 'Average Attendance',
      value: '95%',
      icon: CalendarDays,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-white/[0.05]',
      bottomContent: (
        <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-emerald-400">
          <ArrowUp className="w-3 h-3" /> 3% this month
        </div>
      )
    },
    {
      id: 5,
      title: 'At Risk Students',
      value: '3',
      icon: UserCog,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-white/[0.05]',
      bottomContent: (
        <div className="mt-4 text-[11px] font-medium text-orange-400">
          Need Attention
        </div>
      )
    }
  ];

  return (
    // 5 columns grid on extra large screens to match the image exactly
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col p-4 bg-[#111827]/80 backdrop-blur-md rounded-[16px] border ${stat.border} shadow-lg cursor-pointer h-[125px] justify-between group`}
        >
          {/* Top Section: Icon & Text */}
          <div className="flex items-start gap-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${stat.bg} shrink-0 transition-transform group-hover:scale-105`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col mt-0.5">
              <span className="text-[11px] font-medium text-slate-400 leading-tight mb-1">
                {stat.title}
              </span>
              <span className="text-2xl font-bold text-white leading-none">
                {stat.value}
              </span>
            </div>
          </div>

          {/* Bottom Section: Progress bar or Text (No Graphs) */}
          <div className="w-full">
            {stat.bottomContent}
          </div>
        </motion.div>
      ))}
    </div>
  );
}