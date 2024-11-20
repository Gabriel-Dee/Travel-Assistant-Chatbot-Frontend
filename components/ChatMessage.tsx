import React from 'react';

interface ChatMessageProps {
  role: string;
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  const isUser = role === 'user';
  
  return (
    <div className={`py-8 ${isUser ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-start gap-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center 
            ${isUser ? 'bg-blue-600 text-white' : 'bg-teal-600 text-white'}`}>
            {isUser ? 'U' : 'A'}
          </div>
          <div className="flex-1 prose prose-slate max-w-none text-black">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
