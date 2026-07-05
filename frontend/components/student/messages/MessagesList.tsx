'use client';

import { useRouter } from 'next/navigation'; // NAYA IMPORT
import { Mail, Info, MessageSquare, Shield, ChevronRight, ArrowLeft } from 'lucide-react'; // ArrowLeft add kiya


export default function MessagesList({ onChatOpen }: { onChatOpen: (name: string) => void }) {
  const contacts = [
    { name: 'Prof. Sharma', role: 'Mentor', dept: 'Computer Engineering Department', online: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfSharma&backgroundColor=4f46e5' },
    { name: 'Prof. Mehta', role: 'Mentor', dept: 'Computer Engineering Department', online: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfMehta&backgroundColor=ec4899' },
    { name: 'Rahul Patel', role: 'Leader', dept: 'CE-A Student Leader', online: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=0ea5e9' },
  ];

  const recent = [
    { name: 'Prof. Sharma', time: '10:30 AM', msg: 'Please check the updated schedule for tomorrow\'s class.', unread: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfSharma&backgroundColor=4f46e5' },
    { name: 'Prof. Mehta', time: 'Yesterday', msg: 'Don\'t forget to submit your assignment by EOD.', unread: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfMehta&backgroundColor=ec4899' },
    { name: 'Rahul Patel', time: 'Yesterday', msg: 'Thanks for your response!', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=0ea5e9' },
  ];

  return (
    <div className="flex flex-col w-full gap-5">
      {/* Header */}
      <div className="flex items-center justify-between pt-6 pb-2 px-1">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white">Messages</h1>
          <span className="text-[10px] text-slate-400">Connect with your mentor and leader</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex flex-col items-center justify-center w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-400 hover:bg-purple-600/30 transition-colors">
            <Mail className="w-4 h-4 mb-0.5" /><span className="text-[8px] font-medium">Email</span>
          </button>
          <button className="flex flex-col items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors">
            <Info className="w-4 h-4 mb-0.5" /><span className="text-[8px] font-medium">Info</span>
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-purple-900/40 to-indigo-900/20 rounded-2xl p-4 border border-purple-500/20 flex items-center gap-4 shadow-lg">
        <div className="relative shrink-0">
          <div className="w-12 h-10 bg-purple-500 rounded-xl rounded-bl-sm flex items-center justify-center shadow-lg shadow-purple-500/20">
            <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#040509] rounded-full flex items-center justify-center"><Shield className="w-3.5 h-3.5 text-purple-400" fill="currentColor"/></div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-purple-300 mb-0.5">Safe & Focused Communication</span>
          <span className="text-[9px] text-slate-300 leading-relaxed">You can only message your assigned mentor and leader for a better learning experience.</span>
        </div>
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="px-1"><h2 className="text-sm font-bold text-white mb-0.5">Your Contacts</h2><span className="text-[9px] text-slate-400">Only your mentor and leader are listed here.</span></div>
        <div className="flex flex-col gap-3">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-[#0B0E17] border border-white/5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <img src={c.avatar} className="w-11 h-11 rounded-full bg-slate-800" alt={c.name} />
                <div className="flex flex-col">
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded w-fit mb-1 ${c.role === 'Mentor' ? 'bg-purple-500/20 text-purple-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{c.role}</span>
                  <span className="text-xs font-bold text-white">{c.name}</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">{c.dept}</span>
                  <div className="flex items-center gap-1 mt-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div><span className="text-[8px] text-emerald-500 font-medium">Online</span></div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <button onClick={() => onChatOpen(c.name)} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/10 border border-purple-500/20 text-purple-400 rounded-lg text-[9px] font-medium hover:bg-purple-600/20 transition-colors"><MessageSquare className="w-3 h-3" /> Message</button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg text-[9px] font-medium hover:bg-blue-600/20 transition-colors"><Mail className="w-3 h-3" /> Email</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center justify-between px-1"><h2 className="text-sm font-bold text-white">Recent Conversations</h2><button className="text-[9px] font-medium text-purple-400 flex items-center">View All <ChevronRight className="w-3 h-3 ml-0.5" /></button></div>
        <div className="flex flex-col">
          {recent.map((r, i) => (
            <div key={i} onClick={() => onChatOpen(r.name)} className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-white/5 rounded-xl transition-colors ${i !== recent.length -1 ? 'border-b border-white/5' : ''}`}>
              <img src={r.avatar} className="w-10 h-10 rounded-full bg-slate-800" alt={r.name} />
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-white truncate">{r.name}</span>
                  <span className="text-[9px] text-slate-500 shrink-0">{r.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] truncate ${r.unread > 0 ? 'text-slate-300 font-medium' : 'text-slate-500'}`}>{r.msg}</span>
                  {r.unread > 0 && <span className="w-4 h-4 flex items-center justify-center bg-purple-600 text-white text-[8px] font-bold rounded-full shrink-0">{r.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prefer Email Footer */}
      <div className="w-full bg-[#0B0E17] rounded-2xl p-4 border border-white/5 flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center"><Mail className="w-5 h-5 text-purple-400" /></div>
          <div className="flex flex-col"><span className="text-[11px] font-bold text-purple-300 mb-0.5">Prefer Email?</span><span className="text-[9px] text-slate-400 max-w-[150px]">Use email for formal communication and attaching documents.</span></div>
        </div>
        <button className="px-3 py-2 border border-purple-500/30 rounded-xl text-[9px] font-bold text-purple-300 hover:bg-purple-500/10 transition-colors">Go to Email</button>
      </div>
    </div>
  );
}