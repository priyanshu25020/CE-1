'use client';

import { 
  Search, ChevronDown, List, LayoutGrid, 
  MapPin, Calendar as CalendarIcon, MoreVertical, Send, Eye,
  Shield, Droplet, Palette, Trophy, Music, Swords
} from 'lucide-react';

export default function EventList() {
  const events = [
    { id: 1, title: 'Seva Netrutva Camp', badge: 'Seva Netrutva', badgeColor: 'bg-purple-500/20 text-purple-400', date: 'May 28, 2025', time: '09:00 AM - 04:00 PM', location: 'Main Auditorium', status: 'Upcoming', updated: 'May 20, 2025 • 10:30 AM', updatedBy: 'Prof. Sharma', icon: Swords, iconBg: 'bg-emerald-900/50 text-emerald-400' },
    { id: 2, title: 'NCC Annual Day', badge: 'NCC', badgeColor: 'bg-blue-500/20 text-blue-400', date: 'May 31, 2025', time: '10:00 AM - 01:00 PM', location: 'Seminar Hall', status: 'Upcoming', updated: 'May 18, 2025 • 09:15 AM', updatedBy: 'Prof. Sharma', icon: Shield, iconBg: 'bg-blue-900/50 text-blue-400' },
    { id: 3, title: 'NSS Blood Donation Drive', badge: 'NSS', badgeColor: 'bg-indigo-500/20 text-indigo-400', date: 'Jun 05, 2025', time: '10:00 AM - 02:00 PM', location: 'College Ground', status: 'Upcoming', updated: 'May 22, 2025 • 11:45 AM', updatedBy: 'Prof. Sharma', icon: Droplet, iconBg: 'bg-red-900/50 text-red-400' },
    { id: 4, title: 'Art Competition 2K25', badge: 'Art Competition', badgeColor: 'bg-purple-500/20 text-purple-400', date: 'Jun 10, 2025', time: '09:30 AM - 12:30 PM', location: 'Fine Arts Room', status: 'Upcoming', updated: 'May 21, 2025 • 02:20 PM', updatedBy: 'Prof. Sharma', icon: Palette, iconBg: 'bg-purple-900/50 text-purple-400' },
    { id: 5, title: 'Inter-Class Sports Meet', badge: 'Sports', badgeColor: 'bg-orange-500/20 text-orange-400', date: 'Jun 15, 2025', time: '08:00 AM - 05:00 PM', location: 'Sports Complex', status: 'Ongoing', updated: 'May 24, 2025 • 08:40 AM', updatedBy: 'Prof. Sharma', icon: Trophy, iconBg: 'bg-orange-900/50 text-orange-400' },
    { id: 6, title: 'Cultural Fest 2K25', badge: 'Cultural', badgeColor: 'bg-pink-500/20 text-pink-400', date: 'Jun 20, 2025', time: '06:00 PM - 10:00 PM', location: 'Main Auditorium', status: 'Upcoming', updated: 'May 19, 2025 • 01:10 PM', updatedBy: 'Prof. Sharma', icon: Music, iconBg: 'bg-pink-900/50 text-pink-400' },
  ];

  return (
    <div className="flex flex-col w-full mt-2 gap-4">
      
      {/* TOOLBAR */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
        <div className="relative w-full xl:w-[400px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search events, categories or leaders..." 
            className="w-full bg-[#111827]/80 border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50 transition-colors backdrop-blur-md"
          />
        </div>

        <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-sm text-slate-300 hover:text-white whitespace-nowrap backdrop-blur-md">
            All Categories <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-sm text-slate-300 hover:text-white whitespace-nowrap backdrop-blur-md">
            All Status <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-sm text-slate-300 hover:text-white whitespace-nowrap backdrop-blur-md">
            This Semester <ChevronDown className="w-4 h-4" />
          </button>
          
          <div className="flex items-center bg-[#111827]/80 border border-white/[0.05] rounded-xl p-1.5 ml-2 backdrop-blur-md">
            <button className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400"><List className="w-4 h-4" /></button>
            <button className="p-1.5 text-slate-500 hover:text-slate-300"><LayoutGrid className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* LIST HEADER */}
      <div className="flex items-center justify-between mt-2 px-2">
        <h2 className="text-lg font-bold text-white">Events List</h2>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          Sort by: 
          <button className="flex items-center gap-1 text-white bg-transparent">
            Latest <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* EVENTS ROWS */}
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 bg-[#111827]/80 backdrop-blur-md rounded-[16px] border border-white/[0.05] hover:bg-white/[0.03] transition-all group gap-4 lg:gap-0">
            
            {/* Left Area (Icon + Details) */}
            <div className="flex items-start lg:items-center gap-5 w-full lg:w-5/12">
              <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 ${event.iconBg}`}>
                <event.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-base font-semibold text-white">{event.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${event.badgeColor}`}>{event.badge}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><CalendarIcon className="w-3.5 h-3.5" /> {event.date} • {event.time}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                </div>
              </div>
            </div>

            {/* Status Area */}
            <div className="flex items-center justify-start lg:justify-center w-full lg:w-2/12">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${event.status === 'Upcoming' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-blue-500/30 text-blue-400 bg-blue-500/10'}`}>
                {event.status}
              </span>
            </div>

            {/* Updated Info */}
            <div className="flex flex-col w-full lg:w-2/12 text-xs">
              <span className="text-slate-500 mb-0.5">Updated</span>
              <span className="text-slate-300">{event.updated}</span>
              <span className="text-slate-500">By {event.updatedBy}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 w-full lg:w-3/12">
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-purple-400 transition-colors w-32 justify-center">
                  <Eye className="w-3.5 h-3.5" /> View Details
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-slate-300 transition-colors w-32 justify-center">
                  <Send className="w-3.5 h-3.5" /> Send Update
                </button>
              </div>
              <button className="p-2 text-slate-400 hover:text-white transition-colors h-full flex items-center justify-center rounded-lg hover:bg-white/5">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-2 mt-2 gap-4">
        <span className="text-xs text-slate-500">Showing 1 to 6 of 24 events</span>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-[#111827] transition-colors">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-[#111827] text-xs transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-[#111827] text-xs transition-colors">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-[#111827] text-xs transition-colors">4</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-[#111827] transition-colors">&gt;</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Events per page</span>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 border border-white/[0.05] rounded-lg text-xs text-slate-300 backdrop-blur-md">
            10 <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}