'use client';

import { ChevronRight, Megaphone } from 'lucide-react';

export default function StudentTasks() {
  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      
      {/* Upcoming Tasks Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white">Upcoming Tasks</h3>
          <button className="text-[9px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button>
        </div>

        <div className="flex flex-col gap-3">
          {/* Task 1 */}
          <div className="flex items-center justify-between w-full group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex flex-col w-9 h-10 rounded-lg overflow-hidden bg-[#15182B] border border-white/5 shrink-0">
                <span className="w-full h-[40%] bg-purple-600/80 text-[7px] font-bold text-white flex items-center justify-center uppercase">May</span>
                <span className="w-full h-[60%] flex items-center justify-center text-sm font-bold text-white">20</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[11px] font-semibold text-white">NSS Activity Report Submission</span>
                  <span className="text-[7px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded font-medium">NSS</span>
                </div>
                <span className="text-[9px] text-slate-400">Submit your report before 10:00 AM</span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[9px] font-medium text-purple-400">2 Days Left</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </div>
          </div>

          {/* Task 2 */}
          <div className="flex items-center justify-between w-full group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex flex-col w-9 h-10 rounded-lg overflow-hidden bg-[#15182B] border border-white/5 shrink-0">
                <span className="w-full h-[40%] bg-orange-600/80 text-[7px] font-bold text-white flex items-center justify-center uppercase">May</span>
                <span className="w-full h-[60%] flex items-center justify-center text-sm font-bold text-white">22</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[11px] font-semibold text-white">Art Competition Registration</span>
                  <span className="text-[7px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded font-medium">Cultural</span>
                </div>
                <span className="text-[9px] text-slate-400">Fill the registration form</span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[9px] font-medium text-orange-400">4 Days Left</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </div>
          </div>

          {/* Task 3 */}
          <div className="flex items-center justify-between w-full group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex flex-col w-9 h-10 rounded-lg overflow-hidden bg-[#15182B] border border-white/5 shrink-0">
                <span className="w-full h-[40%] bg-emerald-600/80 text-[7px] font-bold text-white flex items-center justify-center uppercase">May</span>
                <span className="w-full h-[60%] flex items-center justify-center text-sm font-bold text-white">25</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[11px] font-semibold text-white">Leadership Workshop Feedback</span>
                  <span className="text-[7px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-medium">Training</span>
                </div>
                <span className="text-[9px] text-slate-400">Share your feedback</span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[9px] font-medium text-emerald-400">7 Days Left</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Announcements Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white">Recent Announcements</h3>
          <button className="text-[9px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button>
        </div>

        <div className="w-full bg-[#0B0E17] border border-white/5 rounded-xl p-3 flex items-start gap-3 cursor-pointer hover:bg-[#111421] transition-colors">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex flex-col flex-1 w-full">
            <div className="flex items-start justify-between w-full mb-1">
              <span className="text-[11px] font-semibold text-white leading-tight w-[80%]">College Annual Fest - Registrations Open!</span>
              <span className="text-[8px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-medium shrink-0">New</span>
            </div>
            <span className="text-[9px] text-slate-400 mb-1.5">Register now and showcase your talent.</span>
            <span className="text-[8px] text-slate-500 font-medium">18 May 2025 • Admin</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 self-center shrink-0" />
        </div>
      </div>

    </div>
  );
}