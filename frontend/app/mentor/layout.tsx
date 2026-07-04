import TopBar from '@/components/layout/TopBar/TopBar';

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white font-sans selection:bg-cyan-500/30">
      <TopBar />
      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        {children}
      </main>
    </div>
  );
}