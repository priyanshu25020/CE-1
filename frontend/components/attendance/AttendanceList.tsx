'use client';

import { ChevronRight, Code, Database, Coffee, Sigma, Monitor, CheckCircle2, XCircle, Clock, Info, Trophy } from 'lucide-react';

export default function AttendanceList() {
  const lectures = [
    { id: 1, subject: 'Data Structures', topic: 'Arrays and Linked Lists', time: '10:00 AM - 11:00 AM • May 20, 2025', status: 'Present', icon: Code, iconColor: 'text-purple-400 bg-purple-500/10' },
    { id: 2, subject: 'Database Management', topic: 'ER Model', time: '11:15 AM - 12:15 PM • May 20, 2025', status: 'Present', icon: Database, iconColor: 'text-orange-400 bg-orange-500/10' },
    { id: 3, subject: 'Java Programming', topic: 'OOPs Concepts', time: '02:00 PM - 03:00 PM • May 19, 2025', status: 'Absent', icon: Coffee, iconColor: 'text-blue-400 bg-blue-500/10' },
    { id: 4, subject: 'Discrete Mathematics', topic: 'Relations and Functions', time: '03:15 PM - 04:15 PM • May 19, 2025', status: 'Late', icon: Sigma, iconColor: 'text-pink-400 bg-pink-500/10' },
    { id: 5, subject: 'Computer Networks', topic: 'OSI Model', time: '10:00 AM - 11:00 AM • May 18, 2025', status: 'Present', icon: Monitor, iconColor: 'text-emerald-400 bg-emerald-500/10' },
  ];

  const getStatusUI = (status: string) => {
    switch(status) {
      case 'Present': return { color: 'text-emerald-500', Icon: CheckCircle2 };
      case 'Absent': return { color: 'text-red-500', Icon: XCircle };
      case 'Late': return { color: 'text-orange-500', Icon: Clock };
      default: return { color: 'text-slate-500', Icon: CheckCircle2 };
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 mt-2">
      
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-bold text-white">Recent Lectures</h2>
        <button className="text-[10px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button>
      </div>

      {/* List Area */}
      <div className="flex flex-col bg-[#0B0E17] border border-white/5 rounded-2xl overflow-hidden">
        {lectures.map((item, idx) => {
          const StatusIcon = getStatusUI(item.status).Icon;
          return (
            <div key={item.id} className={`flex items-center justify-between p-4 ${idx !== lectures.length - 1 ? 'border-b border-white/5' : ''}`}>
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconColor}`}>
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-white mb-0.5">{item.subject}</span>
                  <span className="text-[10px] text-slate-400 mb-0.5">{item.topic}</span>
                  <span className="text-[9px] text-slate-500">{item.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`text-[10px] font-medium ${getStatusUI(item.status).color}`}>{item.status}</span>
                <StatusIcon className={`w-4 h-4 ${getStatusUI(item.status).color}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Info Footer */}
      <div className="flex items-center gap-2 p-3 bg-[#0B0E17] border border-white/5 rounded-xl">
        <Info className="w-4 h-4 text-blue-400 shrink-0" />
        <span className="text-[10px] text-slate-300">Attendance is updated within 24 hours after the lecture.</span>
      </div>

      {/* Keep it up Card */}
      <div className="w-full bg-gradient-to-r from-[#171336] to-[#0D0B1F] rounded-2xl p-4 border border-purple-500/20 flex items-center justify-between shadow-lg relative overflow-hidden mt-2">
        <div className="flex items-center gap-4 z-10">
          <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-full border border-purple-500/30">
            <Trophy className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-purple-300 mb-1">Keep it up!</span>
            <span className="text-[10px] text-slate-300">Great job! Your attendance is excellent.</span>
          </div>
        </div>
        
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center w-12 h-12 z-10 shrink-0">
          <svg className="w-12 h-12 transform -rotate-90">
            <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="transparent" />
            <circle cx="24" cy="24" r="20" stroke="#10b981" strokeWidth="3" fill="transparent" strokeDasharray="125.6" strokeDashoffset={125.6 - (92 / 100) * 125.6} strokeLinecap="round" />
          </svg>
          <span className="absolute text-[10px] font-bold text-white">92%</span>
        </div>
      </div>

    </div>
  );
}