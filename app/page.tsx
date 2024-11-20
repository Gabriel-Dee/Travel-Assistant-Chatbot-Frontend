import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Travel Assistant</h1>
        </div>
      </header>
      <ChatWindow />
    </div>
  );
}

