"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";

interface Data {
  location_analysis?: string;
  recommendation?: string;
  similar?: { description: string };
  score?: string;
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const gu = formData.get("gu")!.toString();
    const dong = formData.get("dong")!.toString();
    const item = formData.get("item")!.toString();

    try {
      const params = new URLSearchParams({ gu, dong, item });
      const response = await fetch(
        `http://127.0.0.1:8080/analyze_market?${params.toString()}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("API 요청 실패:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border-slate-200 relative">
      {loading && (
        <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-slate-700 mt-3">
            분석 중입니다...
          </p>
        </div>
      )}

      <div className="w-full flex flex-col gap-10 min-h-screen relative p-10">
        <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#cbd5e1_1px,_transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
          <div className="relative z-10 text-left space-y-2">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
              창업 상담 챗봇
            </h1>
            <p className="text-base text-slate-600">
              <span className="font-bold text-neutral-800">데이터 분석</span>과{" "}
              <span className="font-bold text-neutral-800">GPT 상담</span>을 한
              번에!
            </p>
          </div>
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

        {/* 분석결과 */}
        {data && (
          <div className="grid gap-7 mt-5">
            <div className="bg-white shadow-md border border-slate-200 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2">📍 입지 분석</h2>
              <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                <span className="font-medium text-slate-800">
                  {data.location_analysis}
                </span>
              </p>
            </div>

            <div className="bg-white shadow-md border border-slate-200 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2">💡 창업 추천</h2>
              <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                <span className="font-medium text-slate-800">
                  {data.recommendation}
                </span>
              </p>
            </div>

            <div className="bg-white shadow-md border border-slate-200 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2">📊 유사 업종 정보</h2>
              <p className="text-sm text-slate-600">
                {data.similar?.description}
              </p>
            </div>

            <div className="bg-white shadow-md border border-slate-200 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2">🧮 평가 점수</h2>
              <p className="text-base font-bold">{data.score}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
