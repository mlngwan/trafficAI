"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ChatInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  clickHandler: (question: string) => void;
}

export default function ChatInput({ inputRef, clickHandler }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    clickHandler(trimmed);
    setInputValue(""); // 입력창 초기화
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative rounded-2xl bg-neutral-200">
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="chat"
        name="chat"
        placeholder="🤖 질문을 입력하세요. 예: OO동 상권 분석해줘. OO동 시간대별 유동인구 알려줘."
        className="w-full h-12 border-none focus:outline-none px-4
        rounded-2xl placeholder:text-sm placeholder:text-neutral-700"
        onKeyDown={handleKeyDown}
      />
      <div className="absolute inset-y-1 right-0 flex justify-end">
        <button
          type="button"
          aria-label="Submit"
          className="mr-3 h-full flex justify-center items-center transition-colors hover:*:text-slate-600"
          onClick={handleSubmit}
        >
          <PaperAirplaneIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
