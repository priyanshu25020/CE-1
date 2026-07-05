'use client';

import { motion } from 'framer-motion';
import { Plus, ChevronDown } from 'lucide-react';
import MessagesWorkspace from '@/components/messages/MessagesWorkspace';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function MessagesPage() {
  return (
    <div className="flex flex-col pb-32 pt-2 lg:pt-4 w-full h-full overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4 h-full">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Messages</h1>
            <p className="text-sm text-slate-400 mt-1">Stay connected with leaders and coordinators</p>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-[12px] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]">
            <Plus className="w-4 h-4" />
            <span>New Message</span>
            <span className="w-[1px] h-4 bg-white/20 mx-1"></span>
            <ChevronDown className="w-4 h-4 opacity-80" />
          </button>
        </motion.div>

        {/* CUSTOM TABS (As per user request) */}
        <motion.div variants={item} className="flex items-center gap-8 border-b border-white/[0.05] w-full mt-2">
          <button className="pb-3 text-sm font-semibold text-purple-400 border-b-2 border-purple-500 whitespace-nowrap">All</button>
          <button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Data Coordinators</button>
          <button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Prayer Coordinators</button>
          <button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">Groups</button>
        </motion.div>

        {/* Workspace Area (3-Column Layout) */}
        <motion.div variants={item} className="w-full flex-1">
          <MessagesWorkspace />
        </motion.div>
        
      </motion.div>
    </div>
  );
}