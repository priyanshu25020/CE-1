'use client';

import { 
  ChevronDown, Filter, MoreVertical, Send, Eye,
  Shield, Droplet, Palette, Trophy, Music, Swords
} from 'lucide-react';

export default function AnnouncementTable() {
  const announcements = [
    { id: 1, title: 'Seva Netrutva Camp 2025', desc: 'All selected leaders are requested to confirm their participation by May 25, 2025.', toLeaders: true, toStudents: true, leaderCount: 18, studentCount: 80, type: 'Event Update', typeColor: 'bg-emerald-500/10 text-emerald-400', date: 'May 20, 2025', time: '10:30 AM', status: 'Sent', icon: Swords, iconBg: 'bg-emerald-900/50 text-emerald-400' },
    { id: 2, title: 'NCC Annual Day', desc: 'All NCC members must be present in complete uniform. Reporting time: 8:00 AM.', toLeaders: true, toStudents: true, leaderCount: 15, studentCount: 80, type: 'Information', typeColor: 'bg-blue-500/10 text-blue-400', date: 'May 18, 2025', time: '09:15 AM', status: 'Sent', icon: Shield, iconBg: 'bg-blue-900/50 text-blue-400' },
    { id: 3, title: 'NSS Blood Donation Drive', desc: "Let's come together to save lives. All students are encouraged to participate.", toLeaders: true, toStudents: true, leaderCount: 12, studentCount: 80, type: 'Important', typeColor: 'bg-red-500/10 text-red-400', date: 'May 16, 2025', time: '11:45 AM', status: 'Sent', icon: Droplet, iconBg: 'bg-red-900/50 text-red-400' },
    { id: 4, title: 'Art Competition 2K25', desc: 'Showcase your creativity! Last date for registration is May 25, 2025.', toLeaders: true, toStudents: true, leaderCount: 10, studentCount: 80, type: 'Event Update', typeColor: 'bg-purple-500/10 text-purple-400', date: 'May 15, 2025', time: '02:20 PM', status: 'Sent', icon: Palette, iconBg: 'bg-purple-900/50 text-purple-400' },
    { id: 5, title: 'Inter-Class Sports Meet', desc: 'All classes prepare well! Fixtures will be shared soon.', toLeaders: true, toStudents: true, leaderCount: 18, studentCount: 80, type: 'Information', typeColor: 'bg-blue-500/10 text-blue-400', date: 'May 14, 2025', time: '08:40 AM', status: 'Sent', icon: Trophy, iconBg: 'bg-orange-900/50 text-orange-400' },
    { id: 6, title: 'Cultural Fest 2K25', desc: 'Get ready for the biggest cultural celebration of the year!', toLeaders: true, toStudents: true, leaderCount: 20, studentCount: 80, type: 'Event Update', typeColor: 'bg-purple-500/10 text-purple-400', date: 'May 12, 2025', time: '01:10 PM', status: 'Sent', icon: Music, iconBg: 'bg-pink-900/50 text-pink-400' },
  ];

  return (
    <div className="flex flex-col w-full bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden mt-2">
      
      {/* TOOLBAR (TABS & FILTERS) */}
      <div className="flex flex-col xl:flex-row items-center justify-between p-5 border-b border-white/[0.05] gap-4">
        
        {/* Left Tabs (Pills) */}
        <div className="flex items-center gap-2 w-full xl:w-auto overflow-x-auto hide-scrollbar pb-2 xl:pb-0">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-xs font-medium text-indigo-400 whitespace-nowrap">
            All Announcements <span className="px-1.5 py-0.5 bg-indigo-500/20 rounded-md text-[10px]">28</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
            To Leaders <span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-md text-[10px]">18</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
            To Students <span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-md text-[10px]">24</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
            Drafts <span className="px-1.5 py-0.5 bg-white/10 rounded-md text-[10px]">3</span>
          </button>
        </div>

        {/* Right Dropdowns */}
        <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-transparent text-xs font-medium text-slate-300 hover:text-white whitespace-nowrap">
            All Types <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-transparent text-xs font-medium text-slate-300 hover:text-white whitespace-nowrap">
            All Status <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-transparent text-xs font-medium text-slate-300 hover:text-white whitespace-nowrap">
            All Time <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white ml-2 whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="border-b border-white/[0.05] text-xs font-medium text-slate-400 bg-white/[0.01]">
              <th className="p-4 pl-6 w-[35%]">Announcement</th>
              <th className="p-4 w-[15%]">Target Audience</th>
              <th className="p-4 w-[12%]">Type</th>
              <th className="p-4 w-[15%]">Sent By</th>
              <th className="p-4 w-[10%]">Sent At</th>
              <th className="p-4 w-[5%]">Status</th>
              <th className="p-4 pr-6 w-[8%] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((item) => (
              <tr key={item.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                
                {/* Announcement Details */}
                <td className="p-4 pl-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shrink-0 mt-1 ${item.iconBg}`}>
                      <item.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-white mb-1">{item.title}</span>
                      <span className="text-[11px] text-slate-400 leading-relaxed pr-4 line-clamp-2">{item.desc}</span>
                    </div>
                  </div>
                </td>
                
                {/* Target Audience */}
                <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      {item.toLeaders && <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded text-[10px] font-medium">To Leaders</span>}
                      {item.toStudents && <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-[10px] font-medium">To Students</span>}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {item.leaderCount} Leaders • {item.studentCount} Students
                    </span>
                  </div>
                </td>

                {/* Type */}
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${item.typeColor}`}>
                    {item.type}
                  </span>
                </td>

                {/* Sent By */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prof&backgroundColor=4f46e5" alt="Prof. Sharma" className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-white">Prof. Sharma</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">Mentor</span>
                    </div>
                  </div>
                </td>

                {/* Sent At */}
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-300">{item.date}</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">{item.time}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span className="text-xs font-medium text-emerald-400">{item.status}</span>
                </td>

                {/* Actions */}
                <td className="p-4 pr-6">
                  <div className="flex items-center justify-end gap-3 text-slate-500">
                    <Eye className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <Send className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 px-6 border-t border-white/[0.05] gap-4">
        <span className="text-xs text-slate-500">Showing 1 to 6 of 28 announcements</span>
        
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&lt;</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-medium">1</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs transition-colors">2</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs transition-colors">3</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs transition-colors">4</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&gt;</button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Announcements per page</span>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0F121D] border border-white/[0.05] rounded-lg text-xs text-slate-300">
            10 <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}