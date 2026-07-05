'use client';

import { motion } from 'framer-motion';
import { Users, Database, HeartHandshake, CalendarRange, MailCheck, ArrowUp } from 'lucide-react';

export default function LeaderStats() {
  const stats = [
    {
      id: 1,
      title: 'Total Leaders',
      value: '6',
      subtitle: 'All Class Leaders',
      icon: Users,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] group-hover:border-emerald-500/30'
    },
    {
      id: 2,
      title: 'Data Coordinators',
      value: '2',
      subtitle: 'Manage Class Data',
      icon: Database,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] group-hover:border-blue-500/30'
    },
    {
      id: 3,
      title: 'Prayer Coordinators',
      value: '2',
      subtitle: 'Lead Spiritual Activities',
      icon: HeartHandshake,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)] group-hover:border-orange-500/30'
    },
    {
      id: 4,
      title: 'Event Coordinators',
      value: '2',
      subtitle: 'Organize & Manage Events',
      icon: CalendarRange,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)] group-hover:border-purple-500/30'
    },
    {
      id: 5,
      title: 'Emails Sent',
      value: '18',
      subtitle: <span className="flex items-center gap-1 text-emerald-400"><ArrowUp className="w-3 h-3" /> 12% this month</span>,
      icon: MailCheck,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-white/[0.05]',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.3)] group-hover:border-teal-500/30'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col p-5 bg-[#111827]/80 backdrop-blur-md rounded-[16px] border ${stat.border} shadow-lg cursor-pointer h-[125px] justify-between group transition-all duration-300 ${stat.glow} overflow-hidden relative`}
        >
          <div className="flex items-start gap-4 z-10 w-full">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
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
          <div className="w-full z-10 text-[11px] font-medium text-slate-400 mt-2">
            {stat.subtitle}
          </div>
          <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full ${stat.bg}`} />
        </motion.div>
      ))}
    </div>
  );
}