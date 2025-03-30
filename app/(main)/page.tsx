"use client";

import Button from "@/components/button";
import ChatInput from "@/components/chat-input";
import Input from "@/components/input";
import { useState } from "react";

interface Data {}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formobject = {
      gu: formData.get("gu")!.toString(),
      dong: formData.get("dong")!.toString(),
      item: formData.get("item")!.toString(),
    };

    const response = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formobject),
    });
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  return (
    <div className="bg-white border-slate-200">
      <div className="w-full flex flex-col gap-10 min-h-screen relative p-10">
        {/* header */}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-2xl font-semibold">창업 상담 챗봇</h1>
          <p className="text-sm text-slate-600">
            데이터 기반 분석 + GPT 대화형 상담까지 한번에!
          </p>
        </div>
        {/* form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <Input
            id="gu"
            name="gu"
            type="text"
            labelText="자치구"
            placeholder="예시) 용산구"
            required
          />
          <Input
            id="dong"
            name="dong"
            type="text"
            labelText="행정동"
            placeholder="예시) 한남동"
            required
          />
          <Input
            id="item"
            name="item"
            type="text"
            labelText="창업 업종"
            placeholder="예시) 카페, 편의점"
            required
          />
          <Button text="분석 시작" loading={loading} />
        </form>
        {data && (
          <div className="space-y-4 p-4 rounded text-sm">
            <div>
              <h2 className="font-semibold">📍 입지 분석</h2>
              <p className="whitespace-pre-wrap">{data.location_analysis}</p>
            </div>

            <div>
              <h2 className="font-semibold">💡 창업 추천</h2>
              <p className="whitespace-pre-wrap">{data.recommendation}</p>
            </div>

            <div>
              <h2 className="font-semibold">📊 유사 업종 정보</h2>
              <p>{data.similar?.description}</p>
            </div>

            <div>
              <h2 className="font-semibold">🧮 점수</h2>
              <p>{data.score}</p>
            </div>

            {/* 하단 채팅창 */}
            <div className="sticky w-full bottom-0 py-10 bg-white/80">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
