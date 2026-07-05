'use client';

import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion'; // FIX: Imported Variants
import StatisticsCards from '@/components/dashboard/StatisticsCards/StatisticsCards';
import ClassHealthScore from '@/components/dashboard/ClassHealthScore/ClassHealthScore';
// import TodaysTasks from '@/components/dashboard/TodaysTasks/TodaysTasks';
import QuickActions from '@/components/dashboard/QuickActions/QuickActions';
import BottomBar from '@/components/layout/BottomBar/BottomBar';

// Safely load the chart
const ClassOverview = dynamic(() => import('@/components/dashboard/ClassOverview/ClassOverview'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full min-h-[300px] bg-[#111827] rounded-[20px] border border-white/[0.08]">
      <span className="text-slate-500 text-sm animate-pulse">Loading Chart...</span>
    </div>
  )
});

// FIX: Explicitly typed as Variants to prevent TypeScript build errors
const container: Variants = { 
  hidden: { opacity: 0 }, 
  show: { opacity: 1, transition: { staggerChildren: 0.1 } } 
};

// FIX: Explicitly typed as Variants and simplified transition for strict TS
const item: Variants = { 
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } 
};

export default function MentorDashboard() {
  return (
    <div className="flex flex-col pb-32 pt-1 lg:pt-4">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
        
        {/* ROW 1: Premium Stats Cards & Health Score */}
        <motion.div variants={item} className="grid grid-cols-1 xl:grid-cols-5 gap-6 w-full">
          <div className="xl:col-span-4 h-full">
            <StatisticsCards />
          </div>
          <div className="xl:col-span-1 h-full">
            <ClassHealthScore />
          </div>
        </motion.div>

        {/* ROW 2: Overview Graph, Tasks, Actions */}
        <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          <div className="lg:col-span-6 h-full min-h-[300px]">
            <ClassOverview />
          </div>
          <div className="lg:col-span-3 h-full">
            {/* <TodaysTasks /> */}
          </div>
          <div className="lg:col-span-3 h-full">
            <QuickActions />
          </div>
        </motion.div>
        
      </motion.div>
      
      {/* Bottom Nav for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
        <BottomBar />
      </div>
    </div>
  );
}