'use client';

import { 
  Calendar, Megaphone, BarChart2, MessageSquare, CalendarCheck, 
  FileText, CheckCircle2, Award, FileSpreadsheet, User 
} from 'lucide-react';

export default function StudentQuickAccess() {
  const icons = [
    { name: 'Attendance', icon: Calendar, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'Announcements', icon: Megaphone, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'Polls', icon: BarChart2, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'Messages', icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Events', icon: CalendarCheck, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { name: 'Forms & Submissions', icon: FileText, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'My Responses', icon: CheckCircle2, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { name: 'Certificates', icon: Award, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'Reports', icon: FileSpreadsheet, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { name: 'Profile', icon: User, color: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10' },
  ];

  return (
    <div className="w-full mt-6">
      <h3 className="text-xs font-bold text-white mb-4">Quick Access</h3>
      <div className="grid grid-cols-5 gap-y-4 gap-x-2">
        {icons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-start cursor-pointer group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 ${item.bg} border border-transparent group-hover:border-white/10 transition-colors`}>
              <item.icon className={`w-4 h-4 ${item.color}`} strokeWidth={2} />
            </div>
            <span className="text-[8px] text-slate-400 text-center leading-tight font-medium w-full px-1">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}