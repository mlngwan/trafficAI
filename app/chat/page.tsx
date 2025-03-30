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
            {/* 사용자 질문 */}
            <div className="self-end bg-neutral-200 rounded-xl p-3 max-w-96 shadow-xl">
              {pair.question}
              <p className="text-xs text-right text-gray-500 mt-1">
                {pair.timestamp}
              </p>
            </div>

            {/* GPT 응답 또는 로딩 중 */}
            <div className="self-start bg-white rounded-xl p-3 max-w-96 whitespace-pre-wrap shadow-xl">
              {pair.answer || (
                <span className="text-black italic animate-pulse">
                  답변 작성 중...
                </span>
              )}
              {pair.answer && (
                <p className="text-xs text-right text-gray-400 mt-1">
                  {pair.timestamp}
                </p>
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
