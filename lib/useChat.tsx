"use client";

import { useRef, useState } from "react";

type ChatPair = {
  question: string;
  answer: string;
  timestamp: string;
};

export default function useChat() {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState<ChatPair[]>([]);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  async function clickHandler(question: string) {
    if (!question.trim()) return;

    const now = new Date().toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setChatHistory((prev) => [
      ...prev,
      { question, answer: "", timestamp: now },
    ]);
    scrollToBottom();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8080/ask_rag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, force_gpt: false }),
      });

      const data = await res.json();
      const answer = data.response;

      setChatHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer = answer;
        return updated;
      });
    } catch (err) {
      console.error("❌ 에러 발생:", err);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }

  return {
    inputRef,
    scrollRef,
    chatHistory,
    clickHandler,
    loading,
  };
}
