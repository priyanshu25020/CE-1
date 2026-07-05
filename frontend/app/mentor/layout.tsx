import TopBar from '@/components/layout/TopBar/TopBar';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Added flex layout to place sidebar and main content side-by-side
    <div className="flex min-h-screen bg-[#0A0D14] text-white font-sans selection:bg-cyan-500/30">
      
      {/* Sidebar - fixed on left, hidden on mobile */}
      <Sidebar />

      {/* Main Content Area - shifts right on lg screens by 260px (sidebar width) */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[260px]">
        <TopBar />
        
        {/* Adjusted max-width to allow wider desktop cards */}
        <main className="px-4 py-4 md:px-6 lg:px-8 w-full max-w-[1800px] mx-auto">
          {children}
        </main>
      </div>
      
    </div>
  );
}