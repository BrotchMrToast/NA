// File: src/pages/CoachBot.jsx
// Purpose: CoachBot chat interface with Supabase-connected message storage

import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function CoachBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can I support your well-being today?" }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const botResponse = { role: "bot", text: "Thanks for sharing. Remember to take small breaks!" };

    // Update UI
    setMessages([...messages, userMessage, botResponse]);
    setInput("");

    try {
      const userId = dev-user-1; // Replace with Supabase Auth ID when implemented

      // Insert user message
      const { error: userError } = await supabase.from("chat_logs").insert([
        {
          user_id: userId,
          message: userMessage.text,
          sender: "user",
        },
      ]);
      if (userError) console.error("❌ Failed to store user message:", userError.message);

      // Insert bot response
      const { error: botError } = await supabase.from("chat_logs").insert([
        {
          user_id: userId,
          message: botResponse.text,
          sender: "bot",
        },
      ]);
      if (botError) console.error("❌ Failed to store bot message:", botError.message);
    } catch (err) {
      console.error("❌ Unexpected error while saving messages:", err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-white space-y-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">CoachBot</h1>
      <div className="bg-gray-100 p-4 rounded-xl h-64 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm p-2 rounded ${msg.role === 'bot'
              ? 'bg-blue-100 text-blue-900'
              : 'bg-yellow-100 text-yellow-800'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
