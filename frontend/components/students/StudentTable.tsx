'use client';

import { 
  Search, ChevronDown, Filter, List, LayoutGrid, Plus, 
  MoreVertical, Eye, MessageSquare, ArrowUpDown 
} from 'lucide-react';

export default function StudentTable() {
  const students = [
    { id: 1, name: 'Aman Patel', email: 'aman.patel23@email.com', roll: 'CE23-001', section: 'CE-A', att: 98, assign: '12/14', assignStatus: 'Completed', perf: '8.7/10', perfStatus: 'Good', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=4f46e5' },
    { id: 2, name: 'Riya Shah', email: 'riya.shah23@email.com', roll: 'CE23-002', section: 'CE-A', att: 94, assign: '11/14', assignStatus: 'Completed', perf: '8.3/10', perfStatus: 'Good', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ec4899' },
    { id: 3, name: 'Harsh Mehta', email: 'harsh.mehta23@email.com', roll: 'CE23-003', section: 'CE-A', att: 91, assign: '10/14', assignStatus: 'Completed', perf: '7.9/10', perfStatus: 'Average', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=f59e0b' },
    { id: 4, name: 'Neha Verma', email: 'neha.verma23@email.com', roll: 'CE23-004', section: 'CE-A', att: 88, assign: '9/14', assignStatus: 'Completed', perf: '7.4/10', perfStatus: 'Average', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=8b5cf6' },
    { id: 5, name: 'Arjun Singh', email: 'arjun.singh23@email.com', roll: 'CE23-005', section: 'CE-A', att: 75, assign: '7/14', assignStatus: 'Pending 2', perf: '6.8/10', perfStatus: 'Below Avg', status: 'At Risk', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=06b6d4' },
    { id: 6, name: 'Pooja Sharma', email: 'pooja.sharma23@email.com', roll: 'CE23-006', section: 'CE-A', att: 72, assign: '6/14', assignStatus: 'Pending 3', perf: '6.2/10', perfStatus: 'Below Avg', status: 'At Risk', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=10b981' },
  ];

  // Helper for progress ring color
  const getRingColor = (val: number) => {
    if (val >= 90) return '#10b981'; // emerald
    if (val >= 80) return '#f59e0b'; // amber
    return '#f97316'; // orange
  };

  return (
    <div className="flex flex-col w-full bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden mt-2">
      
      {/* 1. TOOLBAR SECTION */}
      <div className="flex flex-col xl:flex-row items-center justify-between p-5 border-b border-white/[0.05] gap-4">
        {/* Search */}
        <div className="relative w-full xl:w-[350px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, roll no., email, phone..." 
            className="w-full bg-[#0F121D] border border-white/[0.05] rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>

        {/* Filters & Actions */}
        <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Status <ChevronDown className="w-3.5 h-3.5" />
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

          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl transition-colors ml-2 whitespace-nowrap">
            <Plus className="w-4 h-4" /> Add Student
          </button>
        </div>
      </div>

      {/* 2. TABLE SECTION */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-white/[0.05] text-[11px] font-medium text-slate-400 bg-white/[0.01]">
              <th className="p-4 pl-6 w-12"><input type="checkbox" className="rounded border-slate-600 bg-transparent accent-indigo-500 w-3.5 h-3.5" /></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Student <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Roll No. <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Section <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Attendance <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Assignments <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Performance <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 cursor-pointer hover:text-slate-200"><div className="flex items-center gap-1">Status <ArrowUpDown className="w-3 h-3" /></div></th>
              <th className="p-4 pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                <td className="p-4 pl-6"><input type="checkbox" className="rounded border-slate-600 bg-transparent accent-indigo-500 w-3.5 h-3.5" /></td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full bg-slate-800" />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-white">{student.name}</span>
                      <span className="text-[11px] text-slate-500">{student.email}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-xs text-slate-300">{student.roll}</td>
                <td className="p-4 text-xs text-slate-300">{student.section}</td>
                
                {/* Attendance Ring */}
                <td className="p-4">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <svg className="w-8 h-8 transform -rotate-90">
                      <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="transparent" />
                      <circle cx="16" cy="16" r="14" stroke={getRingColor(student.att)} strokeWidth="3" fill="transparent" strokeDasharray="87.9" strokeDashoffset={87.9 - (student.att / 100) * 87.9} strokeLinecap="round" />
                    </svg>
                    <span className="absolute text-[9px] font-bold text-white">{student.att}%</span>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-300">{student.assign}</span>
                    <span className={`text-[10px] ${student.assignStatus === 'Completed' ? 'text-slate-500' : 'text-orange-400'}`}>{student.assignStatus}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-300">{student.perf}</span>
                    <span className={`text-[10px] ${student.perfStatus === 'Good' ? 'text-emerald-400' : student.perfStatus === 'Average' ? 'text-yellow-400' : 'text-red-400'}`}>{student.perfStatus}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                    <span className={`text-[11px] font-medium ${student.status === 'Active' ? 'text-emerald-400' : 'text-red-400'}`}>{student.status}</span>
                  </div>
                </td>
                <td className="p-4 pr-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Eye className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <MessageSquare className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. PAGINATION SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 px-6 border-t border-white/[0.05] gap-4">
        <span className="text-[11px] text-slate-500">Showing 1 to 6 of 80 students</span>
        
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&lt;</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-[11px] font-medium">1</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-[11px] transition-colors">2</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-[11px] transition-colors">3</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-[11px] transition-colors">4</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-[11px] transition-colors">5</button>
          <span className="w-7 h-7 flex items-center justify-center text-slate-500 text-[11px]">...</span>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-[11px] transition-colors">14</button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 transition-colors">&gt;</button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500">Students per page</span>
          <button className="flex items-center gap-2 px-2 py-1 bg-[#0F121D] border border-white/[0.05] rounded-lg text-[11px] text-slate-300">
            10 <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
}