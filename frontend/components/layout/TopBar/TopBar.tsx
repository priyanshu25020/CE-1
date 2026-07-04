'use client';

import { Menu, Bell, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/5 pt-2">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        
        {/* Left Side: Hamburger & Greeting */}
        <div className="flex items-center gap-3 lg:gap-6">
          <button className="p-1.5 -ml-1.5 transition-colors text-slate-300 hover:text-white lg:hidden">
            <Menu className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col">
            <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              Good Morning, <span className="text-purple-400">Mentor</span> 👋
            </p>
            <h1 className="text-lg font-bold tracking-wide text-white lg:text-xl leading-tight mt-0.5">
              Prof. Sharma
            </h1>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] text-slate-400">Mentor Dashboard</span>
              <ShieldCheck className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Right Side: Notifications & Avatar */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 transition-colors text-slate-300 hover:text-white">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1.5 right-2 flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold text-white bg-red-500 rounded-full border border-[#0A0D14]">
              3
            </span>
          </button>
          
          <div className="relative">
            {/* Using a placeholder image for the avatar to match your design */}
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=4f46e5" 
              alt="Profile" 
              className="w-10 h-10 rounded-full bg-indigo-600 border border-indigo-400/30 p-0.5"
            />
            {/* Online Green Dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0A0D14] rounded-full"></span>
          </div>
        </div>
        
      </div>
    </header>
  );
}