'use client';

import { motion } from 'framer-motion';
import SettingsWorkspace from '@/components/settings/SettingsWorkspace';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function SettingsPage() {
  return (
    <div className="flex flex-col pb-32 pt-2 lg:pt-4 w-full h-full overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col gap-1 w-full mb-2">
          <h1 className="text-2xl font-bold text-white tracking-wide">Settings</h1>
          <p className="text-sm text-slate-400">Manage your account, preferences and system settings</p>
        </motion.div>

        {/* Workspace Area (2-Column Layout) */}
        <motion.div variants={item} className="w-full">
          <SettingsWorkspace />
        </motion.div>
        
      </motion.div>
    </div>
  );
}