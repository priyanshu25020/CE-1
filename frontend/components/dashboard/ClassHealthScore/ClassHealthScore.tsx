'use client';

import { motion } from 'framer-motion';

export default function ClassHealthScore() {
  const score = 8.6;
  const percentage = (score / 10) * 100;
  
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center p-6 bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.08] shadow-lg group hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.2)] hover:border-emerald-500/30 transition-all duration-300 h-full min-h-[200px]"
    >
      <h3 className="text-sm font-semibold text-slate-400 w-full text-left absolute top-6 left-6">Class Health Score</h3>

      <div className="relative flex items-center justify-center mt-6">
        {/* SVG Circular Progress */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64" cy="64" r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="10"
            fill="transparent"
          />
          <motion.circle
            cx="64" cy="64" r={radius}
            stroke="#10B981"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]"
          />
        </svg>
        
        <div className="absolute flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-3xl font-extrabold text-white">{score}</span>
            <span className="text-xs text-slate-500 font-medium">/10</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <span className="text-sm font-bold text-emerald-400 tracking-wide">Excellent</span>
        <span className="text-xs text-slate-500 font-medium mt-1">Keep up the great work</span>
      </div>
    </motion.div>
  );
}