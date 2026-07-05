'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, LayoutDashboard, Users, Crown, 
  CalendarCheck, CalendarDays, Megaphone, 
  ClipboardList, BarChart3, MessageSquare, 
  Calendar, Settings 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/mentor' },
    { name: 'Students', icon: Users, href: '/mentor/students' },
    { name: 'Leaders', icon: Crown, href: '/mentor/leaders' },
    { name: 'Attendance', icon: CalendarCheck, href: '/mentor/attendance' },
    { name: 'Events', icon: CalendarDays, href: '/mentor/events' },
    { name: 'Announcements', icon: Megaphone, href: '/mentor/announcements' },
    { name: 'Forms & Polls', icon: ClipboardList, href: '/mentor/forms' },
    // { name: 'Reports', icon: BarChart3, href: '/mentor/reports' },
  ];

  const bottomItems = [
    { name: 'Messages', icon: MessageSquare, href: '/mentor/messages', badge: '5' },
    // { name: 'Calendar', icon: Calendar, href: '/mentor/calendar' },
    { name: 'Settings', icon: Settings, href: '/mentor/settings' },
  ];

  return (
    // 'hidden lg:flex' ensures it only shows on large screens
    <aside className="hidden lg:flex flex-col w-[260px] h-screen fixed left-0 top-0 bg-[#0A0D14] border-r border-white/5 z-50">
      
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/20">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide">Class Connect</span>
          <span className="text-[10px] text-slate-400">Mentor Panel</span>
        </div>
      </div>

      {/* Main Navigation - Scrollable if needed */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1 scrollbar-hide">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.name === 'Dashboard' && pathname === '/mentor');
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white/5 border border-white/10 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : ''}`} />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}

        <div className="mt-1 mb-2 border-t border-white/5 mx-4"></div>

        {/* Bottom Navigation */}
        {bottomItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.name}</span>
            </div>
            {item.badge && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500 text-[9px] font-bold text-white">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Profile Card */}
      <div className="p-4 mt-auto">
        <div className="flex flex-col p-4 bg-gradient-to-b from-[#131726] to-[#0D101A] rounded-2xl border border-white/10 shadow-lg">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 mb-2 mx-auto">
            <Crown className="w-4 h-4" />
          </div>
          <p className="text-xs text-center text-slate-400 mb-1">You are a</p>
          <p className="text-sm text-center font-bold text-white mb-3">Mentor</p>
          <p className="text-[10px] text-center text-slate-500 mb-4">CE-A • 80 Students</p>
          <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors">
            View My Class
          </button>
        </div>
      </div>
    </aside>
  );
}