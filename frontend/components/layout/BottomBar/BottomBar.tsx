'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CalendarCheck, Plus, Megaphone, BarChart3 } from 'lucide-react';

export default function BottomBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/mentor', icon: Home },
    { name: 'Attendance', href: '/mentor/attendance', icon: CalendarCheck },
    // Center button will be handled separately
    { name: 'Announcements', href: '/mentor/announcements', icon: Megaphone },
    { name: 'Reports', href: '/mentor/reports', icon: BarChart3 },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-[#0A0D14] border-t border-slate-800 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center h-full max-w-md mx-auto px-6 relative">
        
        {/* Left Nav Items */}
        <div className="flex space-x-8">
          {navItems.slice(0, 2).map((item) => {
            const isActive = pathname === item.href || (item.name === 'Home' && pathname === '/mentor');
            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center w-12 group">
                <item.icon 
                  className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`} 
                />
                <span className={`text-[10px] ${isActive ? 'text-blue-500' : 'text-slate-500'} font-medium`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Center Floating Action Button (FAB) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
            <Plus className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Right Nav Items */}
        <div className="flex space-x-8">
          {navItems.slice(2, 4).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center w-12 group">
                <item.icon 
                  className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`} 
                />
                <span className={`text-[10px] ${isActive ? 'text-blue-500' : 'text-slate-500'} font-medium`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}