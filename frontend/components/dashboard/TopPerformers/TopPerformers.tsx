'use client';

import { Trophy } from 'lucide-react';
import Link from 'next/link';

export default function TopPerformers() {
  const performers = [
    { id: 1, name: 'Aman Patel', score: '100%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman' },
    { id: 2, name: 'Riya Shah', score: '98%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya' },
    { id: 3, name: 'Harsh Mehta', score: '96%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh' },
  ];

  return (
    <div className="flex flex-col p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-semibold text-white tracking-wide">Top Performers</h3>
        </div>
        <Link href="/mentor/students" className="text-[10px] sm:text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">
          View All
        </Link>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {performers.map((student) => (
          <div key={student.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full bg-slate-800" />
              <span className="text-xs font-medium text-white">{student.name}</span>
            </div>
            <span className="text-xs font-bold text-green-500">{student.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}