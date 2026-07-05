'use client';

import { ChevronDown, Filter, Eye, Download, Send, CheckCircle2, XCircle, ArrowUpDown } from 'lucide-react';

export default function AttendanceTable() {
  const classes = [
    { id: 1, code: 'DSA', name: 'Data Structures & Algorithms', time: '10:30 AM - 12:00 PM • Room 301', color: 'bg-indigo-500/20 text-indigo-400', leader: 'Aman Patel', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=4f46e5', status: 'Submitted', submitTime: 'Today • 10:45 AM' },
    { id: 2, code: 'DBMS', name: 'Database Management Systems', time: '01:00 PM - 02:30 PM • Lab 2', color: 'bg-blue-500/20 text-blue-400', leader: 'Riya Shah', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ec4899', status: 'Submitted', submitTime: 'Today • 02:35 PM' },
    { id: 3, code: 'OS', name: 'Operating Systems', time: '11:00 AM - 12:30 PM • Room 203', color: 'bg-emerald-500/20 text-emerald-400', leader: 'Harsh Mehta', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=f59e0b', status: 'Not Submitted', submitTime: '-' },
    { id: 4, code: 'CN', name: 'Computer Networks', time: '02:00 PM - 03:30 PM • Room 205', color: 'bg-orange-500/20 text-orange-400', leader: 'Neha Verma', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=8b5cf6', status: 'Submitted', submitTime: 'Today • 03:40 PM' },
    { id: 5, code: 'SE', name: 'Software Engineering', time: '03:45 PM - 05:15 PM • Room 402', color: 'bg-slate-500/20 text-slate-400', leader: 'Arjun Singh', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=06b6d4', status: 'Not Submitted', submitTime: '-' },
    { id: 6, code: 'AI', name: 'Artificial Intelligence', time: '05:30 PM - 07:00 PM • Lab 1', color: 'bg-teal-500/20 text-teal-400', leader: 'Pooja Sharma', role: 'Data Coordinator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=10b981', status: 'Submitted', submitTime: 'Today • 05:35 PM' },
  ];

  return (
    <div className="flex flex-col w-full bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden mt-2">
      
      {/* TABS & FILTERS */}
      <div className="flex flex-col lg:flex-row items-center justify-between border-b border-white/[0.05] px-5 pt-3 gap-4">
        
        {/* Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar w-full lg:w-auto">
          <button className="pb-3 text-sm font-medium text-white border-b-2 border-indigo-500 whitespace-nowrap">Class-wise Attendance</button>
          <button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Leader-wise Attendance</button>
          <button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Submission Status</button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 pb-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white">
            All Sections <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white">
            All Leaders <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-white/[0.05] text-xs font-medium text-slate-400 bg-white/[0.01]">
              <th className="p-4 pl-6 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Class / Lecture <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Section <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Data Coordinator (Leader) <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200 text-center"><div className="flex justify-center items-center gap-1">Submission Status <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Submitted At <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 pr-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                
                {/* Class Info */}
                <td className="p-4 pl-6">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs shrink-0 ${cls.color}`}>
                      {cls.code}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{cls.name}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{cls.time}</span>
                    </div>
                  </div>
                </td>
                
                {/* Section */}
                <td className="p-4 text-sm text-slate-300">CE-A</td>
                
                {/* Leader Info */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={cls.avatar} alt={cls.leader} className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{cls.leader}</span>
                      <span className="text-[11px] text-blue-400 mt-0.5">{cls.role}</span>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    {cls.status === 'Submitted' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${cls.status === 'Submitted' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {cls.status}
                    </span>
                  </div>
                </td>

                {/* Submitted At */}
                <td className="p-4 text-sm text-slate-300">{cls.submitTime}</td>

                {/* Actions */}
                <td className="p-4 pr-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Eye className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    {cls.status === 'Submitted' ? (
                      <Download className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    ) : (
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                        <Send className="w-3.5 h-3.5" /> Send Reminder
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER & PAGINATION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 px-6 border-t border-white/[0.05] gap-4">
        
        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5 text-slate-400"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Submitted</div>
          <div className="flex items-center gap-1.5 text-slate-400"><div className="w-2 h-2 rounded-full bg-red-500"></div> Not Submitted</div>
          <div className="flex items-center gap-1.5 text-slate-400"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Late Submission</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Rows per page</span>
            <button className="flex items-center gap-2 px-2 py-1 bg-[#0F121D] border border-white/[0.05] rounded-lg text-xs text-slate-300">
              10 <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&lt;</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-medium">1</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}