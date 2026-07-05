'use client';

import { motion } from 'framer-motion';
import { DownloadCloud, CalendarIcon, ChevronDown } from 'lucide-react';
import AttendanceStats from '@/components/attendance/AttendanceStats';
import AttendanceTable from '@/components/attendance/AttendanceTable';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function AttendancePage() {
  return (
    <div className="flex flex-col pb-32 pt-2 lg:pt-4 w-full h-full">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Attendance Overview</h1>
            <p className="text-sm text-slate-400 mt-1">Track attendance submissions and view class-wise leader reports</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium rounded-[12px] transition-all duration-300">
              <DownloadCloud className="w-4 h-4 text-purple-400" />
              <span>Download Report</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111827] border border-white/10 text-white text-sm font-medium rounded-[12px] transition-all hover:bg-white/5">
              <CalendarIcon className="w-4 h-4 text-slate-400" />
              <span>May 24, 2025</span>
              <ChevronDown className="w-4 h-4 ml-1 text-slate-500" />
            </button>
          </div>
        </motion.div>

        {/* Stats Cards Row */}
        <motion.div variants={item} className="w-full">
          <AttendanceStats />
        </motion.div>

        {/* Table Area */}
        <motion.div variants={item} className="w-full overflow-hidden">
          <AttendanceTable />
        </motion.div>
        
      </motion.div>
    </div>
  );
}