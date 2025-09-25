"use client";
import { useState, useEffect, useRef } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Nino's Agent." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
        signal: controller.signal,
      });

      const data = await resp.json();
      if (data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "⚠️ Error from backend" },
        ]);
      }
    } catch (err) {
      if (
        typeof err === "object" &&
        err !== null &&
        "name" in err &&
        (err as any).name === "AbortError"
      ) {
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "⚠️ Network error" },
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div>
          {/* Chat Window */}
          <div className="fixed bottom-40 right-0 mr-8 w-80 h-96 bg-white rounded-xl shadow-md flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-300"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="p-2 bg-gray-200 rounded-lg w-fit">
                  Typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={loading}
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-black text-white px-3 rounded-lg hover:scale-105 transition disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed bottom-20 right-0 mr-8 bg-black rounded-full p-4 lg:p-5 hover:scale-110 transition-all"
          >
            <CloseIcon htmlColor="white" fontSize="medium" />
          </button>
        </div>
      )}

      {/* Open Button */}
      {!isOpen && (
        <div className="fixed bottom-20 right-0 mr-8">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black rounded-full p-4 lg:p-5 hover:scale-110 transition-all"
          >
            <ChatBubbleIcon htmlColor="white" fontSize="medium" />
          </button>
        </div>
      )}
    </div>
  );
}