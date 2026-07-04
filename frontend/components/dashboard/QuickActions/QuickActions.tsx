'use client';

import { 
  Compass,
  CalendarCheck, 
  Megaphone, 
  AlertTriangle, 
  CalendarDays, 
  ClipboardList, 
  BarChart3, 
  GraduationCap, 
  Users 
} from 'lucide-react';
import Link from 'next/link';

export default function QuickActions() {
  const actions = [
    { name: 'Mark Attendance', icon: CalendarCheck, href: '/mentor/attendance/mark', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'Announcement', icon: Megaphone, href: '/mentor/announcements/create', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
    { name: 'Notice / Warning', icon: AlertTriangle, href: '/mentor/warnings', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'Events', icon: CalendarDays, href: '/mentor/events', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Forms & Polls', icon: ClipboardList, href: '/mentor/forms', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Students', icon: GraduationCap, href: '/mentor/students', color: 'text-rose-400', bg: 'bg-rose-400/10' },
    { name: 'Leaders', icon: Users, href: '/mentor/leaders', color: 'text-lime-400', bg: 'bg-lime-400/10' },
    { name: 'Reports', icon: BarChart3, href: '/mentor/reports', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ];

  return (
    <div className="flex flex-col p-3 sm:p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-slate-400" />
          <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">Quick Actions</h3>
        </div>
        <Link href="/mentor/actions" className="text-[10px] sm:text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">
          View All
        </Link>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-4 gap-2 h-full">
        {actions.map((action, index) => (
          <Link 
            key={index} 
            href={action.href}
            className="flex flex-col items-center justify-center py-2 px-1 bg-[#151926] rounded-xl border border-white/5 hover:border-white/10 hover:bg-[#1a1f2e] transition-all duration-300 group shadow-md"
          >
            <div className={`flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl ${action.bg} mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${action.color}`} />
            </div>
            <span className="text-[8px] sm:text-[9px] text-slate-400 text-center leading-tight group-hover:text-slate-300">
              {action.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}