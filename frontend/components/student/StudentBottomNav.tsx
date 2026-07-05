'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Plus, MessageSquare, User } from 'lucide-react';

export default function StudentBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#090B14]/95 backdrop-blur-xl border-t border-white/[0.05] pb-3 pt-3 px-6 flex items-center justify-between z-50">
      
      {/* Home */}
      <Link href="/student" className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${pathname === '/student' ? 'text-purple-500' : 'text-slate-500 hover:text-slate-300'}`}>
        <Home className={`w-6 h-6 ${pathname === '/student' ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''}`} fill={pathname === '/student' ? 'currentColor' : 'none'} strokeWidth={1.5} />
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      
      {/* Attendance */}
      <Link href="/student/attendance" className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${pathname === '/student/attendance' ? 'text-purple-500' : 'text-slate-500 hover:text-slate-300'}`}>
        <Calendar className={`w-6 h-6 ${pathname === '/student/attendance' ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''}`} fill={pathname === '/student/attendance' ? 'currentColor' : 'none'} strokeWidth={1.5} />
        <span className="text-[10px] font-medium">Attendance</span>
      </Link>

      {/* Center Floating Action Button (FAB) */}
      <div className="relative -top-6 cursor-pointer hover:scale-105 transition-transform">
        <div className="w-14 h-14 bg-gradient-to-tr from-purple-700 to-purple-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] border-4 border-[#090B14]">
          <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
      </div>

   {/* Messages */}
      <Link href="/student/messages" className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative ${pathname.includes('/student/messages') ? 'text-purple-500' : 'text-slate-500 hover:text-slate-300'}`}>
        <MessageSquare className={`w-6 h-6 ${pathname.includes('/student/messages') ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''}`} fill={pathname.includes('/student/messages') ? 'currentColor' : 'none'} strokeWidth={1.5} />
        <div className="absolute -top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-[#090B14]">7</div>
        <span className="text-[10px] font-medium">Messages</span>
      </Link>
      
      {/* Profile */}
      <Link href="#" className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
        <User className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[10px] font-medium">Profile</span>
      </Link>

    </div>
  );
}