"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface ChatInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  clickHandler: () => Promise<void>;
}

export default function ChatInput({ inputRef, clickHandler }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") clickHandler();
  };

  return (
    <div className="relative rounded-2xl bg-neutral-200">
      <input
        ref={inputRef}
        id="chat"
        name="chat"
        placeholder="🤖 질문을 자유롭게 입력하세요! ex) 이 지역에서 카페하면 괜찮을까?"
        className="w-full h-12 border-none focus:outline-none px-4
        rounded-2xl placeholder:text-sm placeholder:text-neutral-700"
        onKeyDown={handleKeyDown}
      />
      <div className="absolute inset-y-1 right-0 flex justify-end">
        <button
          type="submit"
          aria-label="Submit"
          className="mr-3 h-full flex justify-center items-center transition-colors hover:*:text-slate-600"
          onClick={clickHandler}
        >
          <PaperAirplaneIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
