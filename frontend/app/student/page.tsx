'use client';

import StudentHeader from '@/components/student/StudentHeader';
import StudentBottomNav from '@/components/student/StudentBottomNav';
import StudentHero from '@/components/student/StudentHero';
import StudentStats from '@/components/student/StudentStats';
import StudentQuickAccess from '@/components/student/StudentQuickAccess';
import StudentTasks from '@/components/student/StudentTasks';

export default function StudentDashboard() {
  return (
    // Mobile Wrapper: Forces layout to look good even on desktop, but perfect for mobile
    <div className="flex justify-center w-full min-h-screen bg-black">
      <div className="w-full max-w-md bg-[#040509] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans">
        
        {/* Fixed Header */}
        <div className="w-full z-10 bg-[#040509]/95 backdrop-blur-md sticky top-0 border-b border-white/[0.02]">
          <StudentHeader />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-5 flex flex-col">
          
          <StudentHero />
          
          <StudentStats />
          
          <StudentQuickAccess />

          <StudentTasks />

        </div>

        {/* Fixed Bottom Navigation */}
        <StudentBottomNav />

      </div>
    </div>
  );
}