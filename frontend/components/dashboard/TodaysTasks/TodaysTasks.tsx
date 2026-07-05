'use client';

import { motion } from 'framer-motion';
import StatisticsCards from '@/components/dashboard/StatisticsCards/StatisticsCards';
import ClassHealthScore from '@/components/dashboard/ClassHealthScore/ClassHealthScore';
import ClassOverview from '@/components/dashboard/ClassOverview/ClassOverview';
import TodaysTasks from '@/components/dashboard/TodaysTasks/TodaysTasks';
import QuickActions from '@/components/dashboard/QuickActions/QuickActions';
import BottomBar from '@/components/layout/BottomBar/BottomBar';

// Animations
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } };

export default function MentorDashboard() {
  return (
    <div className="flex flex-col pb-32 pt-2">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-5 lg:gap-6">
        
        {/* ROW 1: Stats Cards (Span 4) + Class Health Score (Span 1) */}
        <motion.div variants={item} className="grid grid-cols-1 xl:grid-cols-5 gap-5 lg:gap-6 w-full">
          <div className="xl:col-span-4 h-full">
            <StatisticsCards />
          </div>
          <div className="xl:col-span-1 h-full">
            <ClassHealthScore />
          </div>
        </motion.div>

        {/* ROW 2: Overview Graph (Span 6), Tasks (Span 3), Actions (Span 3) */}
        <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 w-full">
          <div className="lg:col-span-6 h-full">
            <ClassOverview />
          </div>
          <div className="lg:col-span-3 h-full">
            <TodaysTasks />
          </div>
          <div className="lg:col-span-3 h-full">
            <QuickActions />
          </div>
        </motion.div>

      </motion.div>
      
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </div>
  );
}