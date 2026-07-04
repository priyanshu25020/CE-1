'use client';

import { useState } from 'react';
import { Megaphone, FileText, CalendarDays, Trophy, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function RecentAnnouncements() {
  const [showAll, setShowAll] = useState(false);

  // List of announcements (Tumhare hisaab se 6 events daale hain)
  const announcements = [
    { id: 1, title: 'Annual Tech Fest 2K26', desc: 'Tech Fest registration open for all students.', time: '2h ago', icon: Megaphone, iconColor: 'text-purple-400', bg: 'bg-purple-500/20', isNew: true },
    { id: 2, title: 'Important Notice', desc: 'Regular classes from tomorrow. Be on time.', time: '5h ago', icon: FileText, iconColor: 'text-blue-400', bg: 'bg-blue-500/20', isNew: true },
    { id: 3, title: 'Workshop on Web Dev', desc: 'Full stack workshop on 25 May. Register now!', time: '1d ago', icon: CalendarDays, iconColor: 'text-orange-400', bg: 'bg-orange-500/20', isNew: true },
    { id: 4, title: 'Hackathon Result', desc: 'Congratulations to the winning teams!', time: '2d ago', icon: Trophy, iconColor: 'text-yellow-400', bg: 'bg-yellow-500/20', isNew: false },
    { id: 5, title: 'Mid-Sem Exams', desc: 'Syllabus and timetable have been uploaded.', time: '3d ago', icon: FileText, iconColor: 'text-cyan-400', bg: 'bg-cyan-500/20', isNew: false },
    { id: 6, title: 'Guest Lecture', desc: 'AI in Cyber Security by industry expert.', time: '1w ago', icon: Megaphone, iconColor: 'text-emerald-400', bg: 'bg-emerald-500/20', isNew: false },
  ];

  // Agar showAll true hai toh saare dikhao, warna sirf pehle 3 dikhao
  const displayedAnnouncements = showAll ? announcements : announcements.slice(0, 3);

  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white tracking-wide">Recent Announcements</h3>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Announcement Cards */}
        {displayedAnnouncements.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-[#121622] rounded-xl border border-white/5 shadow-md">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-11 h-11 rounded-full ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">{item.time}</span>
              {item.isNew && <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>}
            </div>
          </div>
        ))}

        {/* Motivational Banner */}
        <div className="relative overflow-hidden mt-2 p-4 rounded-xl bg-gradient-to-r from-[#0C101E] via-[#1A103C] to-[#2A114A] border border-indigo-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4 relative z-10">
            <div className="flex items-center justify-center w-10 h-10">
              <Trophy className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            </div>
            <div>
              <p className="text-xs font-medium text-white leading-tight">
                Great work today! Keep your class engaged and maintain the attendance. 🚀
              </p>
            </div>
          </div>
          
          {/* Decorative Sparkles */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-80 pointer-events-none">
             <Sparkles className="w-4 h-4 text-cyan-400" />
             <Sparkles className="w-6 h-6 text-yellow-400 -mt-2" />
             <Sparkles className="w-3 h-3 text-purple-400 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}