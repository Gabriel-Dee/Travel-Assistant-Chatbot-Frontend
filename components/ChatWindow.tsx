"use client";
import React, { useState, useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { sendMessage } from '../utils/api';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message: string) => {
    try {
      setMessages(prevMessages => [...prevMessages, { role: 'user', content: message }]);
      const response = await sendMessage(message);
      setMessages(prevMessages => [
        ...prevMessages,
        ...response.messages
      ]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'system', content: 'Sorry, there was an error processing your message.' }
      ]);
    }
  };

  return (
    <div className="h-[calc(100vh-76px)] flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">
            Start a conversation by typing a message below
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage key={index} role={msg.role} content={msg.content} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
