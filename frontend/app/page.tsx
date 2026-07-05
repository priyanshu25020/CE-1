'use client';

import Link from 'next/link';
import { GraduationCap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040509] text-white p-6">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)]">
          <GraduationCap className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-wider">CLASS CONNECT</h1>
      </div>

      <p className="text-slate-400 mb-12 text-center max-w-md">
        Welcome to the centralized portal. Please select your dashboard to continue.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
        {/* Mentor Route */}
        <Link 
          href="/mentor" 
          className="flex-1 flex flex-col items-center gap-3 p-6 bg-[#111827] border border-white/10 hover:border-indigo-500/50 rounded-2xl transition-all hover:bg-white/5 group"
        >
          <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Users className="w-7 h-7" />
          </div>
          <span className="text-lg font-semibold">Mentor Portal</span>
          <span className="text-xs text-slate-500 text-center">Manage students, leaders, and analytics</span>
        </Link>

        {/* Student Route */}
        <Link 
          href="/student" 
          className="flex-1 flex flex-col items-center gap-3 p-6 bg-[#111827] border border-white/10 hover:border-purple-500/50 rounded-2xl transition-all hover:bg-white/5 group"
        >
          <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <GraduationCap className="w-7 h-7" />
          </div>
          <span className="text-lg font-semibold">Student App</span>
          <span className="text-xs text-slate-500 text-center">View attendance, events, and tasks</span>
        </Link>
      </div>

    </div>
  );
}