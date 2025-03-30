import { useRef, useState } from "react";

type ChatPair = {
  question: string;
  answer: string;
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

  async function clickHandler() {
    if (!inputRef.current) return alert("입력창 없음");
    const question = inputRef.current.value.trim();
    if (!question) return;

    inputRef.current.value = "";
    setLoading(true);

    setChatHistory((prev) => [...prev, { question, answer: "" }]);
    scrollToBottom();

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, analyzed: {} }),
      });

      const data = await res.json();

      setChatHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer = data.answer;
        return updated;
      });
    } catch (err) {
      console.error("❌ 에러 발생:", err);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }

  return { chatHistory, inputRef, clickHandler, scrollRef, loading };
}
