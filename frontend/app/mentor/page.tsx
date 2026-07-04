import SearchBar from '@/components/common/SearchBar/SearchBar'; 
import WelcomeCard from '@/components/dashboard/WelcomeCard/WelcomeCard';
import StatisticsCards from '@/components/dashboard/StatisticsCards/StatisticsCards';
import TodaysTasks from '@/components/dashboard/TodaysTasks/TodaysTasks';
import QuickActions from '@/components/dashboard/QuickActions/QuickActions';
import AttendanceHeatmap from '@/components/dashboard/AttendanceHeatmap/AttendanceHeatmap';
import UpcomingEvents from '@/components/dashboard/UpcomingEvents/UpcomingEvents';
import TopPerformers from '@/components/dashboard/TopPerformers/TopPerformers'; // NEW
import LeadersStatus from '@/components/dashboard/LeadersStatus/LeadersStatus'; // NEW
import ClassHealthScore from '@/components/dashboard/ClassHealthScore/ClassHealthScore'; // NEW
import BottomBar from '@/components/layout/BottomBar/BottomBar';

export default function MentorDashboard() {
  return (
    <>
      <div className="flex flex-col gap-4 pb-32 pt-2">
        <SearchBar />
        <WelcomeCard />
        <StatisticsCards />
        
        {/* Row 1: Tasks & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
          <TodaysTasks />
          <QuickActions />
        </div>

        {/* Row 2: Heatmap & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AttendanceHeatmap />
          <UpcomingEvents />
        </div>

        {/* Row 3: Performers, Leaders & Health Score */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TopPerformers />
          <LeadersStatus />
          <ClassHealthScore />
        </div>
      </div>
      
      {/* Bottom Nav for Mobile */}
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </>
  );
}