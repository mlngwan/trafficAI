"use client";

import Image from "next/image";
import {
  ChatBubbleBottomCenterTextIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-100 w-full min-h-screen p-8 sticky top-0 border-r border-slate-200 shadow-lg flex flex-col justify-between">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={140}
            height={140}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Market Mentor
          </h1>
          <p className="text-sm text-neutral-500 font-medium">
            당신의 창업 파트너
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          <Link href="/">
            <li
              className={`p-4 flex gap-4 items-center text-lg rounded-xl shadow-md transition-colors ${
                pathname === "/"
                  ? "bg-neutral-200 text-slate-800"
                  : "bg-white hover:bg-neutral-100"
              }`}
            >
              <PresentationChartBarIcon className="size-7 text-neutral-500" />
              <span className="font-semibold">상권 분석</span>
            </li>
          </Link>
          <Link href="/chat">
            <li
              className={`p-4 flex gap-4 items-center text-lg rounded-xl shadow-md transition-colors ${
                pathname === "/chat"
                  ? "bg-neutral-200 text-slate-800"
                  : "bg-white hover:bg-neutral-100"
              }`}
            >
              <ChatBubbleBottomCenterTextIcon className="size-7 text-neutral-500" />
              <span className="font-semibold">AI 채팅</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* 푸터 */}
      <footer className="mt-10 text-xs text-neutral-400 text-center">
        © {new Date().getFullYear()} Market Mentor
      </footer>
    </div>
  );
}
