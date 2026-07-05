'use client';

import { useState } from 'react';
import StudentBottomNav from '@/components/student/StudentBottomNav';
import MessagesList from '@/components/student/messages/MessagesList';
import ChatView from '@/components/student/messages/ChatView';

export default function StudentMessagesPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  return (
    <div className="flex justify-center w-full min-h-screen bg-black">
      <div className="w-full max-w-md bg-[#040509] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans">
        
        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-4 flex flex-col">
          {activeChat ? (
            <ChatView contactName={activeChat} onBack={() => setActiveChat(null)} />
          ) : (
            <MessagesList onChatOpen={(name) => setActiveChat(name)} />
          )}
        </div>

        {/* Hide Bottom Nav when in active chat for better mobile experience */}
        {!activeChat && <StudentBottomNav />}

      </div>
    </div>
  );
}