'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import StudentStats from '@/components/students/StudentStats';
// NAYA IMPORT:
import StudentTable from '@/components/students/StudentTable';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function StudentsPage() {
  return (
    <div className="flex flex-col pb-32 pt-2 lg:pt-4 w-full h-full">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Students</h1>
            <p className="text-sm text-slate-400 mt-1">Manage and monitor all students in your class</p>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-[12px] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]">
            <Download className="w-4 h-4" />
            <span>Export</span>
            <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-80" />
          </button>
        </motion.div>

        {/* Stats Cards Row */}
        <motion.div variants={item} className="w-full">
          <StudentStats />
        </motion.div>

        {/* NAYA: Table Area */}
        <motion.div variants={item} className="w-full overflow-hidden">
          <StudentTable />
        </motion.div>
        
      </motion.div>
    </div>
  );
}