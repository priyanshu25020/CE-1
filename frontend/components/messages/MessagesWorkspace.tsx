'use client';

import { 
  Search, Filter, Phone, Video, Info, MoreVertical, 
  Paperclip, Smile, Send, CheckCheck, Download, 
  FileSpreadsheet, Users, UserCheck, Shield
} from 'lucide-react';

export default function MessagesWorkspace() {
  // Mock Data mimicking the image perfectly
  const chatList = [
    { id: 1, name: 'Riya Shah', role: 'Data Coordinator', roleColor: 'text-purple-400 bg-purple-500/10', time: '10:30 AM', msg: 'Attendance report for today has...', unread: 2, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ec4899' },
    { id: 2, name: 'Harsh Mehta', role: 'Event Coordinator', roleColor: 'text-emerald-400 bg-emerald-500/10', time: '09:45 AM', msg: 'Please find the event details attached.', unread: 1, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=f59e0b' },
    { id: 3, name: 'Aman Patel', role: 'Prayer Coordinator', roleColor: 'text-orange-400 bg-orange-500/10', time: '09:20 AM', msg: 'Prayer session schedule for this week.', unread: 0, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=4f46e5' },
    { id: 4, name: 'CE-A Leaders Group', isGroup: true, time: 'Yesterday', msg: 'Prof. Sharma: Meeting at 4 PM today...', unread: 3, active: false, avatar: 'bg-purple-600' },
    { id: 5, name: 'All Data Coordinators', isGroup: true, time: 'Yesterday', msg: 'Please submit tomorrow\'s attendance.', unread: 0, active: false, avatar: 'bg-emerald-600' },
    { id: 6, name: 'Neha Verma', role: 'Data Coordinator', roleColor: 'text-purple-400 bg-purple-500/10', time: 'May 18', msg: 'Sir, I have a doubt regarding the form.', unread: 0, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=8b5cf6' },
  ];

  const quickContacts = [
    { title: 'All Mentors', subtitle: '4 Online', iconBg: 'bg-emerald-500/20 text-emerald-400' },
    { title: 'All Leaders', subtitle: '15 Online', iconBg: 'bg-orange-500/20 text-orange-400' },
    { title: 'Data Coordinators', subtitle: '8 Online', iconBg: 'bg-blue-500/20 text-blue-400' },
    { title: 'Event Coordinators', subtitle: '5 Online', iconBg: 'bg-pink-500/20 text-pink-400' },
    { title: 'Prayer Coordinators', subtitle: '4 Online', iconBg: 'bg-yellow-500/20 text-yellow-400' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full h-[75vh] min-h-[650px] mt-2">
      
      {/* 1. LEFT COLUMN: Chat List */}
      <div className="lg:col-span-3 flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden h-full">
        {/* Search Header */}
        <div className="p-4 border-b border-white/[0.05] flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-[#0F121D] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50"
            />
          </div>
          <button className="p-2.5 bg-[#0F121D] border border-white/[0.05] rounded-xl text-slate-400 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* List Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar p-3 flex flex-col gap-2">
          {chatList.map((chat) => (
            <div 
              key={chat.id} 
              className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${chat.active ? 'bg-indigo-600/10 border border-indigo-500/30' : 'bg-transparent border border-transparent hover:bg-white/5'}`}
            >
              {/* Avatar */}
              {chat.isGroup ? (
                <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${chat.avatar}`}>
                  <Users className="w-5 h-5 text-white" />
                </div>
              ) : (
                <img src={chat.avatar} alt={chat.name} className="w-11 h-11 rounded-full bg-slate-800 border border-white/10 shrink-0" />
              )}
              
              {/* Chat Info */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm font-semibold text-white truncate">{chat.name}</span>
                    {chat.role && <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium shrink-0 ${chat.roleColor}`}>{chat.role}</span>}
                  </div>
                  <span className={`text-[10px] shrink-0 ${chat.active ? 'text-indigo-400' : 'text-slate-500'}`}>{chat.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs truncate ${chat.unread > 0 ? 'text-slate-300 font-medium' : 'text-slate-500'}`}>{chat.msg}</span>
                  {chat.unread > 0 && (
                    <span className="w-4 h-4 flex items-center justify-center bg-indigo-600 text-white text-[9px] font-bold rounded-full shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. MIDDLE COLUMN: Active Chat Area */}
      <div className="lg:col-span-6 flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden h-full">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ec4899" alt="Riya Shah" className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111827] rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Riya Shah</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 font-medium">Data Coordinator</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-medium mt-0.5">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><Phone className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><Video className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><Info className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><MoreVertical className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 hide-scrollbar">
          {/* Date Separator */}
          <div className="flex items-center justify-center my-2">
            <span className="text-[11px] text-slate-500 bg-[#0F121D] px-3 py-1 rounded-full border border-white/5">May 20, 2025</span>
          </div>

          {/* Received Message */}
          <div className="flex flex-col items-start gap-1 max-w-[80%]">
            <div className="bg-[#1E293B] text-slate-200 text-sm p-3 rounded-2xl rounded-tl-sm border border-white/5 leading-relaxed">
              Good morning, Sir! ☀️<br/><br/>Attendance report for today has been submitted.<br/>Please check and let me know if any changes are needed.
            </div>
            <span className="text-[10px] text-slate-500 ml-1">10:28 AM</span>
          </div>

          {/* Sent Message */}
          <div className="flex flex-col items-end gap-1 self-end max-w-[80%]">
            <div className="bg-indigo-600 text-white text-sm p-3 rounded-2xl rounded-tr-sm shadow-lg leading-relaxed">
              Good morning, Riya! ✅<br/><br/>Thank you for submitting the report on time.<br/>I'll review it and get back to you shortly.
            </div>
            <div className="flex items-center gap-1 mr-1">
              <span className="text-[10px] text-slate-400">10:28 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </div>

          {/* Received Short Message */}
          <div className="flex flex-col items-start gap-1 max-w-[80%] mt-2">
            <div className="bg-[#1E293B] text-slate-200 text-sm p-3 rounded-2xl rounded-tl-sm border border-white/5">
              Sure, Sir. Please let me know if any corrections are required.
            </div>
            <span className="text-[10px] text-slate-500 ml-1">10:31 AM</span>
          </div>

          {/* Received File Attachment */}
          <div className="flex flex-col items-start gap-1 max-w-[80%] mt-2">
            <div className="bg-[#1E293B] p-1 rounded-2xl rounded-tl-sm border border-white/5 flex items-center pr-4">
              <div className="w-12 h-12 bg-emerald-500/20 m-1 rounded-xl flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="flex flex-col ml-2 mr-4">
                <span className="text-sm font-medium text-white">Attendance_Report_20May2025.xlsx</span>
                <span className="text-xs text-slate-400 mt-0.5">XLSX File • 245 KB</span>
              </div>
              <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
            <span className="text-[10px] text-slate-500 ml-1">10:31 AM</span>
          </div>

          {/* Sent Short Message */}
          <div className="flex flex-col items-end gap-1 self-end max-w-[80%] mt-2">
            <div className="bg-indigo-600 text-white text-sm p-3 rounded-2xl rounded-tr-sm shadow-lg">
              Received. Looks good! 👍<br/>Keep up the good work.
            </div>
            <div className="flex items-center gap-1 mr-1">
              <span className="text-[10px] text-slate-400">10:33 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </div>

          {/* Received Last Message */}
          <div className="flex flex-col items-start gap-1 max-w-[80%] mt-2 mb-4">
            <div className="bg-[#1E293B] text-slate-200 text-sm p-3 rounded-2xl rounded-tl-sm border border-white/5">
              Thank you, Sir! 😊
            </div>
            <span className="text-[10px] text-slate-500 ml-1">10:33 AM</span>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0F121D] border-t border-white/[0.05]">
          <div className="flex items-center gap-3 bg-[#111827] border border-white/[0.05] rounded-xl p-2 pr-2">
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-slate-500 outline-none"
            />
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              <Smile className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center justify-center text-white transition-colors shadow-lg shadow-indigo-500/20 shrink-0">
              <Send className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. RIGHT COLUMN: Info / Quick Contacts */}
      <div className="lg:col-span-3 flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl overflow-hidden h-full">
        <div className="flex-1 overflow-y-auto hide-scrollbar p-5">
          
          {/* Quick Contacts Section */}
          <h3 className="text-sm font-bold text-white mb-4">Quick Contacts</h3>
          <div className="flex flex-col gap-4 mb-8">
            {quickContacts.map((contact, i) => (
              <div key={i} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${contact.iconBg}`}>
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{contact.title}</span>
                  <span className="text-xs text-slate-500">{contact.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Groups Section */}
          <h3 className="text-sm font-bold text-white mb-4">Groups</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-purple-500/20 text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">CE-A Leaders Group</span>
                <span className="text-xs text-slate-500">18 Members</span>
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/20 text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">All Data Coordinators</span>
                <span className="text-xs text-slate-500">8 Members</span>
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-pink-500/20 text-pink-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">All Event Coordinators</span>
                <span className="text-xs text-slate-500">5 Members</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            View All Groups
          </button>

        </div>
      </div>
      
    </div>
  );
}