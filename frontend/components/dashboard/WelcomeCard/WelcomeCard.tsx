'use client';

import { Shield, Users, Crown, ArrowUpRight } from 'lucide-react';

export default function WelcomeCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0F121D] border border-indigo-500/20 p-4 shadow-lg w-full -mt-0">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-500/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col gap-4">
        
        {/* Top Row: Icon, Title & Mini Chart */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#131B2D] border border-indigo-500/30">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white tracking-wide">Class A Overview</h2>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[10px] text-slate-300">
                  <Users className="w-3 h-3 text-indigo-400" /> 80 Students
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-300">
                  <Crown className="w-3 h-3 text-yellow-500" /> 10 Leaders
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400">Attendance Today</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-400">95%</span>
              <div className="flex items-center gap-0.5 bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded text-[9px] font-medium">
                <ArrowUpRight className="w-2.5 h-2.5" /> 3%
              </div>
            </div>
            {/* SVG Sparkline */}
            <svg width="60" height="15" viewBox="0 0 60 15" className="mt-1 opacity-80">
              <path d="M0,10 Q5,15 15,10 T30,5 T45,8 T60,2" fill="none" stroke="#a855f7" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Bottom Row: Progress Bar */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 w-[95%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
          </div>
          <div className="flex justify-between items-center text-[9px]">
            <span className="text-slate-400">Great going! Keep it up.</span>
            <span className="text-slate-500 flex items-center gap-1">
              Updated just now <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}