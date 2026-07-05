'use client';

import StudentBottomNav from '@/components/student/StudentBottomNav';
import EventsList from '@/components/student/events/EventsList';

export default function StudentEventsPage() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-black">
      <div className="w-full max-w-md bg-[#040509] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans">
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-32 px-5 flex flex-col">
          <EventsList />
        </div>

        {/* Fixed Bottom Navigation */}
        <StudentBottomNav />

      </div>
    </div>
  );
}