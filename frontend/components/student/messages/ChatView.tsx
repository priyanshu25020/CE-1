'use client';

import { ArrowLeft, Info, MoreVertical, Paperclip, Smile, Send, CheckCheck, Download, FileSpreadsheet } from 'lucide-react';

export default function ChatView({ contactName, onBack }: { contactName: string, onBack: () => void }) {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-80px)]">
      
      {/* Header (No Call/Video Icons as requested) */}
      <div className="flex items-center justify-between pt-6 pb-4 px-2 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="relative">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contactName.replace(' ', '')}&backgroundColor=4f46e5`} className="w-10 h-10 rounded-full bg-slate-800" alt={contactName} />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#040509] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">{contactName}</span>
              <span className="text-[8px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded font-medium">Mentor</span>
            </div>
            <span className="text-[9px] text-emerald-400 font-medium">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><Info className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors"><MoreVertical className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-4 hide-scrollbar">
        <div className="flex items-center justify-center my-2"><span className="text-[9px] text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">May 20, 2025</span></div>

        {/* Received */}
        <div className="flex flex-col items-start gap-1 max-w-[85%]">
          <div className="bg-[#171A26] text-slate-200 text-[11px] p-3 rounded-2xl rounded-tl-sm border border-white/5 leading-relaxed shadow-sm">
            Good morning, Sir! ☀️<br/><br/>Attendance report for today has been submitted.<br/>Please check and let me know if any changes are needed.
          </div>
          <span className="text-[8px] text-slate-500 ml-1">10:28 AM</span>
        </div>

        {/* Sent */}
        <div className="flex flex-col items-end gap-1 self-end max-w-[85%]">
          <div className="bg-purple-600 text-white text-[11px] p-3 rounded-2xl rounded-tr-sm shadow-lg leading-relaxed">
            Good morning, Riya! ✅<br/><br/>Thank you for submitting the report on time.<br/>I'll review it and get back to you shortly.
          </div>
          <div className="flex items-center gap-1 mr-1"><span className="text-[8px] text-slate-400">10:28 AM</span><CheckCheck className="w-3 h-3 text-purple-400" /></div>
        </div>

        {/* Received Short */}
        <div className="flex flex-col items-start gap-1 max-w-[85%] mt-2">
          <div className="bg-[#171A26] text-slate-200 text-[11px] p-3 rounded-2xl rounded-tl-sm border border-white/5">
            Sure, Sir. Please let me know if any corrections are required.
          </div>
          <span className="text-[8px] text-slate-500 ml-1">10:31 AM</span>
        </div>

        {/* File Attachment */}
        <div className="flex flex-col items-start gap-1 max-w-[90%] mt-2 mb-2">
          <div className="bg-[#171A26] p-1.5 rounded-2xl rounded-tl-sm border border-white/5 flex items-center pr-4">
            <div className="w-10 h-10 bg-emerald-500/20 m-1 rounded-xl flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="flex flex-col ml-2 mr-4">
              <span className="text-[11px] font-medium text-white line-clamp-1">Attendance_Report_20May.xlsx</span>
              <span className="text-[9px] text-slate-400 mt-0.5">XLSX File • 245 KB</span>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0"><Download className="w-4 h-4" /></button>
          </div>
          <span className="text-[8px] text-slate-500 ml-1">10:31 AM</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="pt-2 pb-4 px-1 shrink-0 bg-[#040509]">
        <div className="flex items-center gap-2 bg-[#0B0E17] border border-white/10 rounded-2xl p-1.5 pr-1.5">
          <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5"><Paperclip className="w-4 h-4" /></button>
          <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent border-none text-[11px] text-white placeholder:text-slate-500 outline-none px-1" />
          <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5"><Smile className="w-4 h-4" /></button>
          <button className="w-9 h-9 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center text-white transition-colors shadow-lg shadow-purple-500/20 shrink-0"><Send className="w-3.5 h-3.5 ml-0.5" /></button>
        </div>
      </div>
    </div>
  );
}