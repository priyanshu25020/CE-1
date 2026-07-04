'use client';

import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

export default function UpcomingEvents() {
  const events = [
    { id: 1, month: 'MAY', date: '24', title: 'AI Workshop', time: '09:30 AM - 12:30 PM', tag: 'Tomorrow', tagColor: 'bg-purple-500/20 text-purple-400' },
    { id: 2, month: 'MAY', date: '30', title: 'Tech Fest 2K26', time: '10:00 AM - 04:00 PM', tag: '6 Days Left', tagColor: 'bg-blue-500/20 text-blue-400' },
  ];

  return (
    <div className="flex flex-col p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-white tracking-wide">Upcoming Events</h3>
        </div>
        <Link href="/mentor/events" className="text-[10px] sm:text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">
          View All
        </Link>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-2.5 bg-[#151926] rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center w-10 h-11 bg-[#1A1F30] rounded-lg border border-white/5">
                <span className="text-[8px] text-slate-400 font-semibold">{event.month}</span>
                <span className="text-sm font-bold text-white leading-none">{event.date}</span>
              </div>
              
              {/* Event Details */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">{event.title}</span>
                <span className="text-[9px] text-slate-400 mt-0.5">{event.time}</span>
              </div>
            </div>

            {/* Tag */}
            <span className={`text-[8px] font-medium px-2 py-1 rounded-md ${event.tagColor}`}>
              {event.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}