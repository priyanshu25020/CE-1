'use client';

import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle2, Hourglass, Users, XSquare } from 'lucide-react';

export default function AttendanceStats() {
  const stats = [
    {
      id: 1, title: 'Total Classes', value: '6', subtitle: 'Scheduled Today',
      icon: CalendarDays, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] group-hover:border-emerald-500/30'
    },
    {
      id: 2, title: 'Submitted', value: '4', subtitle: '66% of classes',
      icon: CheckCircle2, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] group-hover:border-blue-500/30'
    },
    {
      id: 3, title: 'Pending Submission', value: '2', subtitle: <span className="text-yellow-400">33% of classes</span>,
      icon: Hourglass, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)] group-hover:border-yellow-500/30'
    },
    {
      id: 4, title: 'Leaders Submitted', value: '12 / 18', subtitle: '66% submitted',
      icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)] group-hover:border-purple-500/30'
    },
    {
      id: 5, title: 'Leaders Pending', value: '6 / 18', subtitle: <span className="text-red-400">Need Attention</span>,
      icon: XSquare, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(248,113,113,0.3)] group-hover:border-red-500/30'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col p-5 bg-[#111827]/80 backdrop-blur-md rounded-[16px] border ${stat.border} shadow-lg cursor-pointer h-[130px] justify-between group transition-all duration-300 ${stat.glow} overflow-hidden relative`}
        >
          <div className="flex items-start gap-4 z-10 w-full">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col mt-0.5">
              <span className="text-xs font-medium text-slate-400 leading-tight mb-1.5">
                {stat.title}
              </span>
              <span className="text-3xl font-bold text-white leading-none">
                {stat.value}
              </span>
            </div>
          </div>
          <div className="w-full z-10 text-xs font-medium text-slate-400 mt-2">
            {stat.subtitle}
          </div>
          <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full ${stat.bg}`} />
        </motion.div>
      ))}
    </div>
  );
}