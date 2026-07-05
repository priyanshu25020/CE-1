'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import AnnouncementStats from '@/components/announcements/AnnouncementStats';
import AnnouncementTable from '@/components/announcements/AnnouncementTable';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col pb-32 pt-2 lg:pt-4 w-full h-full">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Announcements</h1>
            <p className="text-sm text-slate-400 mt-1">Communicate important updates with leaders and students</p>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-[12px] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]">
            <Plus className="w-4 h-4" />
            <span>Create Announcement</span>
          </button>
        </motion.div>

        {/* Stats Cards Row */}
        <motion.div variants={item} className="w-full">
          <AnnouncementStats />
        </motion.div>

        {/* Table Area */}
        <motion.div variants={item} className="w-full overflow-hidden">
          <AnnouncementTable />
        </motion.div>
        
      </motion.div>
    </div>
  );
}