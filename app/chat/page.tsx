"use client";

import ChatInput from "@/components/chat-input";
import useChat from "@/lib/useChat";

export default function Chat() {
  const { chatHistory, inputRef, clickHandler, scrollRef, loading } = useChat();

  return (
    <>
      <div className="w-full min-h-[calc(100vh-128px)] p-10 flex flex-col gap-4">
        {chatHistory.map((pair, i) => (
          <div key={i} className="flex flex-col gap-2">
            {/* 질문 */}
            <div className="self-end bg-neutral-200 rounded-xl p-3 max-w-96">
              {pair.question}
            </div>

            {/* 답변 or 로딩중 */}
            <div className="self-start bg-blue-100 rounded-xl p-3 max-w-96 whitespace-pre-wrap">
              {pair.answer || (
                <span className="text-slate-500 italic animate-pulse">
                  답변 작성 중...
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <div className="w-full p-10 sticky bottom-0 bg-white/80">
        <ChatInput inputRef={inputRef} clickHandler={clickHandler} />
      </div>
    </>
  );
}
