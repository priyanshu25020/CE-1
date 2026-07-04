'use client';

import { CheckCircle2, Square, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TodaysTasks() {
  const tasks = [
    { id: 1, title: 'Verify Attendance' },
    { id: 2, title: 'Approve Leave Requests' },
    { id: 3, title: 'Review Forms & Polls' },
    { id: 4, title: 'Send Notice to Leaders' },
  ];

  return (
    <div className="flex flex-col p-3 sm:p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle2 className="w-4 h-4 text-slate-400" />
        <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">Today's Tasks</h3>
      </div>

      {/* Task List */}
      <div className="flex flex-col flex-1">
        {tasks.map((task, index) => (
          <div 
            key={task.id} 
            className={`flex items-center justify-between py-2.5 sm:py-3 cursor-pointer group ${
              index !== tasks.length - 1 ? 'border-b border-white/5' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <Square className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              <span className="text-[10px] sm:text-xs text-slate-300 group-hover:text-white transition-colors">
                {task.title}
              </span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-2 pt-2 border-t border-white/5">
        <Link href="/mentor/tasks" className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          View All Tasks
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}