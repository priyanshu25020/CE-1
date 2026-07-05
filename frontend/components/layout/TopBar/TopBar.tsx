'use client';

import { Menu, Bell, ShieldCheck, Search, SlidersHorizontal, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TopBar() {
  const [searchCategory, setSearchCategory] = useState('All');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0D14]/90 backdrop-blur-xl border-b border-white/5 pt-2 pb-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-4 mx-auto w-full max-w-[1800px] md:px-6 lg:px-8 h-16 gap-4">
        
        {/* Left Side: Greeting & Profile Info */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <button className="p-1.5 -ml-1.5 transition-colors text-slate-300 hover:text-white lg:hidden">
            <Menu className="w-7 h-7" />
          </button>
          <div className="flex flex-col hidden sm:flex">
            <p className="text-[10px] lg:text-xs font-medium text-slate-400 flex items-center gap-1">
              Good Morning, <span className="text-purple-400">Mentor</span> 👋
            </p>
            <h1 className="text-sm lg:text-lg font-bold tracking-wide text-white leading-tight mt-0.5">
              Prof. Sharma
            </h1>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] lg:text-[11px] text-slate-500">Mentor Dashboard</span>
              <ShieldCheck className="w-3 h-3 text-slate-500" />
            </div>
          </div>
        </div>

        {/* Center: Advanced Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative group">
          <div className="absolute left-0 top-0 bottom-0 flex items-center">
            <select 
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="h-full bg-transparent text-slate-300 text-xs pl-4 pr-2 outline-none cursor-pointer appearance-none border-r border-white/10 hover:text-white transition-colors"
            >
              <option value="All" className="bg-[#0F121D]">All</option>
              <option value="Students" className="bg-[#0F121D]">Students</option>
              <option value="Leaders" className="bg-[#0F121D]">Leaders</option>
              <option value="Events" className="bg-[#0F121D]">Events</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-500 ml-1 absolute right-2 pointer-events-none" />
          </div>
          <Search className="absolute left-[110px] top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
          
          <input 
            type="text" 
            placeholder={`Search ${searchCategory.toLowerCase()}...`} 
            className="w-full bg-[#121622]/80 border border-white/5 rounded-xl py-2.5 pl-[140px] pr-12 text-xs text-white placeholder:text-slate-500 outline-none focus:border-purple-500/50 transition-all shadow-inner"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/5 rounded-lg transition-colors">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 hover:text-white" />
          </button>
        </div>

        {/* Right Side: Last Login, Notifications, Avatar */}
        <div className="flex items-center justify-end gap-3 lg:gap-5 min-w-[250px]">
          {/* Last Login */}
          <div className="hidden xl:flex items-center gap-2.5 text-slate-300 bg-[#121622]/80 px-3 py-1.5 rounded-xl border border-white/5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <div className="flex flex-col justify-center">
              <span className="text-[9px] text-slate-400 leading-none mb-0.5">Last Login</span>
              <span className="text-[11px] text-white font-semibold leading-none">Today • 8:42 AM</span>
            </div>
          </div>

          <button className="relative p-2 transition-colors text-slate-300 hover:text-white hover:bg-white/5 rounded-full">
            <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-3.5 h-3.5 text-[8px] font-bold text-white bg-red-500 rounded-full border border-[#0A0D14]">
              3
            </span>
          </button>
          
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=4f46e5" 
              alt="Profile" 
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-indigo-600 border border-indigo-500/50 p-0.5"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0D14] rounded-full"></span>
          </div>
        </div>
        
      </div>
    </header>
  );
}