'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, Filter, Calendar, CheckCircle2, Clock, ChevronRight, MapPin } from 'lucide-react';

export default function EventsList() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full gap-5">
      
      {/* 1. Header */}
      <div className="flex items-center justify-between pt-6 pb-2 px-1">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="p-2 -ml-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Events</h1>
            <span className="text-[10px] text-slate-400">Stay updated and participate in all events.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center justify-center bg-[#111424] border border-purple-500/20 rounded-2xl py-3 shadow-lg">
          <Calendar className="w-5 h-5 text-purple-400 mb-1" strokeWidth={2} />
          <span className="text-lg font-bold text-white mb-0.5">12</span>
          <span className="text-[9px] text-slate-400">Total Events</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#091515] border border-emerald-500/20 rounded-2xl py-3 shadow-lg">
          <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center mb-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /></div>
          <span className="text-lg font-bold text-white mb-0.5">5</span>
          <span className="text-[9px] text-slate-400">Upcoming</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#18110D] border border-orange-500/20 rounded-2xl py-3 shadow-lg">
          <Clock className="w-5 h-5 text-orange-500 mb-1" strokeWidth={2} />
          <span className="text-lg font-bold text-white mb-0.5">3</span>
          <span className="text-[9px] text-slate-400">Ongoing</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#09101D] border border-blue-500/20 rounded-2xl py-3 shadow-lg">
          <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center mb-1"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /></div>
          <span className="text-lg font-bold text-white mb-0.5">4</span>
          <span className="text-[9px] text-slate-400">Completed</span>
        </div>
      </div>

      {/* 3. Tabs */}
      <div className="flex items-center justify-between w-full bg-[#0B0E17] rounded-xl p-1 border border-white/5">
        <button className="w-1/4 py-2 bg-purple-600 rounded-lg text-[10px] font-bold text-white shadow-lg">All Events</button>
        <button className="w-1/4 py-2 text-[10px] font-medium text-slate-400 hover:text-white transition-colors">Upcoming</button>
        <button className="w-1/4 py-2 text-[10px] font-medium text-slate-400 hover:text-white transition-colors">Ongoing</button>
        <button className="w-1/4 py-2 text-[10px] font-medium text-slate-400 hover:text-white transition-colors">Completed</button>
      </div>

      {/* 4. Upcoming Events Section */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-white">Upcoming Events</h2>
          <button className="text-[10px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button>
        </div>

        {/* Event Card 1 (Tech Talk) */}
        <div className="flex items-center gap-4 bg-transparent">
          {/* CSS Poster Mimic */}
          <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-purple-900 to-[#040509] flex flex-col items-center justify-center relative overflow-hidden border border-purple-500/30 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            <span className="text-white font-black text-xl text-center leading-tight tracking-wider z-10">TECH<br/>TALK</span>
            <span className="text-purple-300 text-[10px] mt-1 font-bold tracking-widest z-10">2025</span>
            <div className="absolute bottom-2 bg-purple-500/20 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full border border-purple-500/50">May 25</div>
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 py-1">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[8px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Seminar</span>
              <span className="text-[8px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Upcoming</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Tech Talk 2025</h3>
            <p className="text-[9px] text-slate-400 mb-2 leading-relaxed">An interactive session with industry experts on emerging technologies.</p>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Calendar className="w-3 h-3" /> 25 May 2025</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Clock className="w-3 h-3" /> 10:00 AM - 12:00 PM</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-3"><MapPin className="w-3 h-3" /> Seminar Hall, Block A</div>
            <button className="self-end px-4 py-1.5 border border-purple-500/30 text-purple-400 text-[9px] font-bold rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-1">View Details <ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>

        {/* Event Card 2 (Code Challenge) */}
        <div className="flex items-center gap-4 bg-transparent mt-2">
          {/* CSS Poster Mimic */}
          <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-blue-900 to-[#040509] flex flex-col items-center justify-center relative overflow-hidden border border-blue-500/30 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="text-white font-black text-lg text-center leading-tight tracking-wider z-10">CODE<br/>CHALLENGE</span>
            <div className="px-3 py-1 bg-blue-500/20 border border-blue-400 mt-2 rounded z-10"><span className="text-blue-300 text-xs font-bold font-mono">{'</>'}</span></div>
            <div className="absolute bottom-2 bg-blue-500/20 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full border border-blue-500/50">May 28</div>
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 py-1">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[8px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Competition</span>
              <span className="text-[8px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Upcoming</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Code Challenge 2025</h3>
            <p className="text-[9px] text-slate-400 mb-2 leading-relaxed">Show your coding skills and compete with your peers.</p>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Calendar className="w-3 h-3" /> 28 May 2025</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Clock className="w-3 h-3" /> 02:00 PM - 05:00 PM</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-3"><MapPin className="w-3 h-3" /> Computer Lab 1, Block B</div>
            <button className="self-end px-4 py-1.5 border border-purple-500/30 text-purple-400 text-[9px] font-bold rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-1">View Details <ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>

      </div>

      {/* 5. Ongoing Events Section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-white">Ongoing Events</h2>
          <button className="text-[10px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button>
        </div>

        {/* Event Card 3 (Design Thinking) */}
        <div className="flex items-center gap-4 bg-transparent">
          {/* CSS Poster Mimic */}
          <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-orange-900 to-[#040509] flex flex-col items-center justify-center relative overflow-hidden border border-orange-500/30 shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <span className="text-white font-black text-sm text-center leading-tight tracking-wider z-10 mt-2">DESIGN<br/>THINKING<br/>WORKSHOP</span>
            <div className="w-10 h-10 mt-2 z-10 opacity-80 border-2 border-orange-400 rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-orange-400 rounded-full"></div></div>
            <div className="absolute bottom-2 bg-orange-500/20 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full border border-orange-500/50">May 20</div>
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 py-1">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[8px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">Workshop</span>
              <span className="text-[8px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">Ongoing</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Design Thinking Workshop</h3>
            <p className="text-[9px] text-slate-400 mb-2 leading-relaxed">Hands-on workshop to solve real-world problems with creativity.</p>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Calendar className="w-3 h-3" /> 20 May 2025 - 22 May 2025</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-1"><Clock className="w-3 h-3" /> 01:00 PM - 04:00 PM</div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300 mb-3"><MapPin className="w-3 h-3" /> Innovation Lab, Block C</div>
            <button className="self-end px-4 py-1.5 border border-purple-500/30 text-purple-400 text-[9px] font-bold rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-1">View Details <ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>
      
    </div>
  );
}