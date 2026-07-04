'use client';

import { Users } from 'lucide-react';
import Link from 'next/link';

export default function LeadersStatus() {
  const leaders = [
    { id: 1, name: 'Leader 1', status: 'Online', statusColor: 'text-green-500', dot: 'bg-green-500', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=L1' },
    { id: 2, name: 'Leader 2', status: 'Last seen 10m ago', statusColor: 'text-slate-400', dot: 'bg-yellow-500', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=L2' },
    { id: 3, name: 'Leader 3', status: 'Submitted Report', statusColor: 'text-slate-400', dot: 'bg-blue-500', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=L3' },
  ];

  return (
    <div className="flex flex-col p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-semibold text-white tracking-wide">Leaders Status</h3>
        </div>
        <Link href="/mentor/leaders" className="text-[10px] sm:text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">
          View All
        </Link>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {leaders.map((leader) => (
          <div key={leader.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={leader.avatar} alt={leader.name} className="w-8 h-8 rounded-full bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white leading-tight">{leader.name}</span>
                <span className={`text-[9px] ${leader.statusColor} mt-0.5`}>{leader.status}</span>
              </div>
            </div>
            <span className={`w-2 h-2 rounded-full ${leader.dot}`}></span>
          </div>
        ))}
      </div>
    </div>
  );
}