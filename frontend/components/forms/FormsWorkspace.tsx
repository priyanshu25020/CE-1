'use client';

import { 
  ChevronDown, Filter, FileText, BarChart2, Eye, Send, MoreVertical, 
  PlusSquare, Users, Edit3, PieChart
} from 'lucide-react';

export default function FormsWorkspace() {
  const formsData = [
    { id: 1, title: 'Seva Netrutva Camp Registration', desc: 'Registration form for Seva Netrutva Camp 2025', type: 'Form', typeBg: 'bg-purple-500/10 text-purple-400', target: 'Leaders + Students', members: '98 Members', respCount: '186', respPerc: '76%', createdBy: 'Prof. Sharma', date: 'May 20, 2025', time: '10:30 AM', status: 'Active', statusColor: 'text-emerald-400', statusDot: 'bg-emerald-500', icon: FileText, iconColor: 'text-purple-400 bg-purple-500/20' },
    { id: 2, title: 'NCC Uniform Requirement', desc: 'Survey to collect NCC uniform sizes', type: 'Form', typeBg: 'bg-purple-500/10 text-purple-400', target: 'Leaders', members: '18 Members', respCount: '18', respPerc: '100%', createdBy: 'Prof. Sharma', date: 'May 18, 2025', time: '09:15 AM', status: 'Closed', statusColor: 'text-slate-400', statusDot: 'bg-slate-500', icon: FileText, iconColor: 'text-blue-400 bg-blue-500/20' },
    { id: 3, title: 'Which event are you most excited for?', desc: 'Quick poll for upcoming events', type: '+ Poll', typeBg: 'bg-orange-500/10 text-orange-400', target: 'Students', members: '80 Members', respCount: '80', respPerc: '100%', createdBy: 'Prof. Sharma', date: 'May 16, 2025', time: '11:45 AM', status: 'Completed', statusColor: 'text-blue-400', statusDot: 'bg-blue-500', icon: BarChart2, iconColor: 'text-orange-400 bg-orange-500/20' },
    { id: 4, title: 'Art Competition Theme Voting', desc: 'Vote for theme of Art Competition 2K25', type: '+ Poll', typeBg: 'bg-orange-500/10 text-orange-400', target: 'Leaders + Students', members: '98 Members', respCount: '162', respPerc: '66%', createdBy: 'Prof. Sharma', date: 'May 15, 2025', time: '02:20 PM', status: 'Active', statusColor: 'text-emerald-400', statusDot: 'bg-emerald-500', icon: BarChart2, iconColor: 'text-orange-400 bg-orange-500/20' },
    { id: 5, title: 'Sports Meet Participation', desc: 'Registration form for Inter-Class Sports Meet', type: 'Form', typeBg: 'bg-purple-500/10 text-purple-400', target: 'Students', members: '80 Members', respCount: '65', respPerc: '81%', createdBy: 'Prof. Sharma', date: 'May 14, 2025', time: '08:40 AM', status: 'Active', statusColor: 'text-emerald-400', statusDot: 'bg-emerald-500', icon: FileText, iconColor: 'text-purple-400 bg-purple-500/20' },
    { id: 6, title: 'Workshop Feedback', desc: 'Feedback form for Web Development Workshop', type: 'Form', typeBg: 'bg-purple-500/10 text-purple-400', target: 'Students', members: '80 Members', respCount: '72', respPerc: '90%', createdBy: 'Prof. Sharma', date: 'May 12, 2025', time: '01:10 PM', status: 'Completed', statusColor: 'text-blue-400', statusDot: 'bg-blue-500', icon: FileText, iconColor: 'text-purple-400 bg-purple-500/20' },
  ];

  return (
    <div className="flex flex-col w-full gap-4 mt-2">
      
      {/* 1. TOOLBAR SECTION */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar w-full xl:w-auto border-b border-white/10 xl:border-none pb-2 xl:pb-0">
          <button className="pb-2 xl:pb-0 text-sm font-semibold text-white border-b-2 border-indigo-500 xl:border-none whitespace-nowrap">All (32)</button>
          <button className="pb-2 xl:pb-0 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Forms (16)</button>
          <button className="pb-2 xl:pb-0 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Polls (16)</button>
          <button className="pb-2 xl:pb-0 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Drafts (4)</button>
        </div>

        <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Types <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Target Audience <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Status <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            All Time <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#111827]/80 border border-white/[0.05] rounded-xl text-xs text-slate-300 hover:text-white whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
      </div>

      {/* 2. INFO / ACTION CARDS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
        {/* Create New Box */}
        <div className="lg:col-span-4 p-5 bg-[#111827]/80 backdrop-blur-md rounded-[20px] border border-white/[0.05] shadow-lg flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Create New</h3>
          <p className="text-xs text-slate-400 mb-2">Choose what you want to create</p>
          <button className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors text-left group">
            <FileText className="w-6 h-6 text-purple-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-purple-400 group-hover:text-purple-300">+ New Form</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Create a form to collect detailed information</span>
            </div>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors text-left group">
            <BarChart2 className="w-6 h-6 text-purple-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-purple-400 group-hover:text-purple-300">+ New Poll</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Create a poll to get quick opinions and feedback</span>
            </div>
          </button>
        </div>

        {/* Targets Box */}
        <div className="lg:col-span-3 p-5 bg-[#111827]/80 backdrop-blur-md rounded-[20px] border border-white/[0.05] shadow-lg flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Targets</h3>
          <p className="text-xs text-slate-400 mb-2">Send to</p>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <Users className="w-5 h-5 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Leaders</span>
              <span className="text-[10px] text-slate-400">18 Leaders</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <Users className="w-5 h-5 text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Students</span>
              <span className="text-[10px] text-slate-400">80 Students</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Send to all or select specific groups</p>
        </div>

        {/* How it works Box */}
        <div className="lg:col-span-5 p-5 bg-[#111827]/80 backdrop-blur-md rounded-[20px] border border-white/[0.05] shadow-lg flex items-center justify-between overflow-hidden relative">
          <div className="flex flex-col z-10 w-3/5">
            <h3 className="text-sm font-semibold text-white mb-4">How it works</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-xs">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-bold text-[10px] shrink-0"><Edit3 className="w-3 h-3" /></span>
                <div className="flex flex-col"><strong className="text-white">1. Create</strong><span className="text-slate-400 text-[10px]">Design your form or poll</span></div>
              </li>
              <li className="flex items-start gap-3 text-xs">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-orange-500/20 text-orange-400 font-bold text-[10px] shrink-0"><Send className="w-3 h-3" /></span>
                <div className="flex flex-col"><strong className="text-white">2. Send</strong><span className="text-slate-400 text-[10px]">Choose leaders or students</span></div>
              </li>
              <li className="flex items-start gap-3 text-xs">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-blue-500/20 text-blue-400 font-bold text-[10px] shrink-0"><PlusSquare className="w-3 h-3" /></span>
                <div className="flex flex-col"><strong className="text-white">3. Collect</strong><span className="text-slate-400 text-[10px]">Responses are collected securely</span></div>
              </li>
              <li className="flex items-start gap-3 text-xs">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-bold text-[10px] shrink-0"><BarChart2 className="w-3 h-3" /></span>
                <div className="flex flex-col"><strong className="text-white">4. Analyze</strong><span className="text-slate-400 text-[10px]">View insights and take action</span></div>
              </li>
            </ul>
          </div>
          {/* Custom Illustration SVG Mimic */}
          <div className="absolute -right-8 bottom-0 opacity-80 z-0 hidden sm:block">
             <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl transform rotate-12 blur-lg"></div>
                <div className="absolute inset-4 bg-slate-800 rounded-2xl border border-white/10 shadow-2xl flex flex-col p-3 gap-2">
                   <div className="w-6 h-2 bg-slate-600 rounded-full mx-auto mb-1"></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 border border-indigo-400 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm"></div></div><div className="w-12 h-1.5 bg-slate-600 rounded-full"></div></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 border border-indigo-400 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm"></div></div><div className="w-10 h-1.5 bg-slate-600 rounded-full"></div></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 border border-indigo-400 rounded"></div><div className="w-14 h-1.5 bg-slate-600 rounded-full"></div></div>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-purple-600 p-2 rounded-full shadow-lg border border-purple-400"><PieChart className="w-8 h-8 text-white" /></div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN TABLE SECTION */}
      <div className="w-full bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden mt-2">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-white/[0.05] text-[11px] font-medium text-slate-400 bg-white/[0.01]">
                <th className="p-4 pl-6 w-[25%]">Title</th>
                <th className="p-4 w-[10%]">Type</th>
                <th className="p-4 w-[15%]">Target Audience</th>
                <th className="p-4 w-[10%]">Responses</th>
                <th className="p-4 w-[15%]">Created By</th>
                <th className="p-4 w-[12%]">Created At</th>
                <th className="p-4 w-[8%]">Status</th>
                <th className="p-4 pr-6 w-[5%] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formsData.map((item) => (
                <tr key={item.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 mt-1 ${item.iconColor}`}>
                        <item.icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-white mb-0.5">{item.title}</span>
                        <span className="text-[11px] text-slate-400">{item.desc}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-semibold tracking-wide ${item.typeBg}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-white mb-0.5">{item.target}</span>
                      <span className="text-[11px] text-slate-500">{item.members}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white mb-0.5">{item.respCount}</span>
                      <span className="text-[11px] text-slate-500">{item.respPerc}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.createdBy}&backgroundColor=4f46e5`} alt="Creator" className="w-7 h-7 rounded-full bg-slate-800 border border-white/10" />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-white">{item.createdBy}</span>
                        <span className="text-[10px] text-slate-500">Mentor</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-300">{item.date}</span>
                      <span className="text-[11px] text-slate-500">{item.time}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.statusDot}`}></div>
                      <span className={`text-[11px] font-medium ${item.statusColor}`}>{item.status}</span>
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-end gap-3 text-slate-500">
                      <Eye className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                      <BarChart2 className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                      <Send className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                      <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-white/[0.05]">
          <span className="text-xs text-slate-500">Showing 1 to 6 of 32 items</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5">&lt;</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-medium">1</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs">2</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs">3</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs">4</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs">5</button>
            <span className="w-7 h-7 flex items-center justify-center text-slate-500 text-xs">...</span>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 text-xs">6</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/5">&gt;</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Items per page</span>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0F121D] border border-white/[0.05] rounded-lg text-xs text-slate-300">
              10 <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}