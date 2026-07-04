'use client';

import { Activity } from 'lucide-react';

export default function ClassHealthScore() {
  const score = 8.6;
  const percentage = (score / 10) * 100;
  
  // SVG Circle properties
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col p-4 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-4 h-4 text-blue-500" />
        <h3 className="text-sm font-semibold text-white tracking-wide">Class Health Score</h3>
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col items-center justify-center flex-1 mt-2">
        <div className="relative flex items-center justify-center w-28 h-28">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-slate-800"
            />
            {/* Progress Circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* Center Text */}
          <div className="absolute flex items-baseline gap-0.5">
            <span className="text-2xl font-bold text-white">{score}</span>
            <span className="text-[10px] text-slate-400">/10</span>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-xs font-bold text-green-500">Excellent</span>
          <span className="text-[9px] text-slate-400 mt-0.5">Keep up the great work!</span>
        </div>
      </div>
    </div>
  );
}