'use client';

import { 
  Search, ChevronDown, Filter, List, LayoutGrid, 
  MoreVertical, MessageSquare, ArrowUpDown, Mail, CheckCircle2, XCircle
} from 'lucide-react';

export default function LeaderTable() {
  const leaders = [
    { id: 1, name: 'Aman Patel', email: 'aman.patel23@email.com', role: 'Data Coordinator', section: 'CE-A', lastActive: 'Today • 10:30 AM', activeStatus: 'online', submitted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=4f46e5' },
    { id: 2, name: 'Riya Shah', email: 'riya.shah23@email.com', role: 'Data Coordinator', section: 'CE-A', lastActive: 'Yesterday • 04:20 PM', activeStatus: 'recent', submitted: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ec4899' },
    { id: 3, name: 'Harsh Mehta', email: 'harsh.mehta23@email.com', role: 'Prayer Coordinator', section: 'CE-A', lastActive: 'Today • 09:15 AM', activeStatus: 'online', submitted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=f59e0b' },
    { id: 4, name: 'Neha Verma', email: 'neha.verma23@email.com', role: 'Prayer Coordinator', section: 'CE-A', lastActive: '2 days ago', activeStatus: 'offline', submitted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=8b5cf6' },
    { id: 5, name: 'Arjun Singh', email: 'arjun.singh23@email.com', role: 'Event Coordinator', section: 'CE-A', lastActive: '3 days ago', activeStatus: 'offline', submitted: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=06b6d4' },
    { id: 6, name: 'Pooja Sharma', email: 'pooja.sharma23@email.com', role: 'Event Coordinator', section: 'CE-A', lastActive: 'Today • 08:45 AM', activeStatus: 'online', submitted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=10b981' },
  ];

  const getRoleBadge = (role: string) => {
    switch(role) {
      case 'Data Coordinator': return 'bg-blue-500/10 text-blue-400';
      case 'Prayer Coordinator': return 'bg-orange-500/10 text-orange-400';
      case 'Event Coordinator': return 'bg-purple-500/10 text-purple-400';
      default: return 'bg-slate-500/10 text-slate-400';
    }
  };

  const getActiveDot = (status: string) => {
    switch(status) {
      case 'online': return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      case 'recent': return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]';
      default: return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden mt-2">
      
      {/* TOOLBAR SECTION */}
      <div className="flex flex-col xl:flex-row items-center justify-between p-5 border-b border-white/[0.05] gap-4">
        <div className="relative w-full xl:w-[350px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search leader by name or email..." 
            className="w-full bg-[#0F121D] border border-white/[0.05] rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Roles <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Sections <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            More Filters <Filter className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center bg-[#0F121D] border border-white/[0.05] rounded-xl p-1 ml-2">
            <button className="p-1.5 bg-white/10 rounded-lg text-white"><List className="w-4 h-4" /></button>
            <button className="p-1.5 text-slate-500 hover:text-slate-300"><LayoutGrid className="w-4 h-4" /></button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl transition-colors ml-2 whitespace-nowrap shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]">
            <Mail className="w-4 h-4" /> Email Leaders
          </button>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-white/[0.05] text-[11px] font-medium text-slate-400 bg-white/[0.01]">
              <th className="p-4 pl-6 w-12"><input type="checkbox" className="rounded border-slate-600 bg-transparent accent-indigo-500 w-3.5 h-3.5" /></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Leader <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200 text-center"><div className="flex justify-center items-center gap-1">Role <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Section <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Last Active <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Attendance Submitted <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader) => (
              <tr key={leader.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                <td className="p-4 pl-6"><input type="checkbox" className="rounded border-slate-600 bg-transparent accent-indigo-500 w-3.5 h-3.5" /></td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={leader.avatar} alt={leader.name} className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-white">{leader.name}</span>
                      <span className="text-[11px] text-slate-500">{leader.email}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide ${getRoleBadge(leader.role)}`}>
                    {leader.role}
                  </span>
                </td>
                <td className="p-4 text-xs text-slate-300">{leader.section}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${getActiveDot(leader.activeStatus)}`}></div>
                    <span className="text-xs text-slate-300">{leader.lastActive}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    {leader.submitted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-[11px] font-medium ${leader.submitted ? 'text-emerald-400' : 'text-red-400'}`}>
                      {leader.submitted ? 'Submitted' : 'Not Submitted'}
                    </span>
                  </div>
                </td>
                <td className="p-4 pr-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Mail className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <MessageSquare className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
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
        <span className="text-[11px] text-slate-500">Showing 1 to 6 of 6 leaders</span>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&lt;</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-[11px] font-medium">1</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&gt;</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500">Leaders per page</span>
          <button className="flex items-center gap-2 px-2 py-1 bg-[#0F121D] border border-white/[0.05] rounded-lg text-[11px] text-slate-300">
            10 <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}