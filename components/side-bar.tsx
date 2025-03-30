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
    <div className="bg-neutral-100 w-full min-h-screen p-5 sticky top-0 border-r border-slate-200">
      <div className="flex flex-col gap-10">
        {/* header */}
        <div className="flex gap-8 items-center">
          <div className="size-8 rounded-full" />
          <div>
            <Image
              src="/logo.jpg"
              alt="logo"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <p className="text-xl font-semibold">Market Mentor</p>
        </div>
        {/* lists */}
        <ul className="flex flex-col gap-3">
          <Link href="/">
            <li
              className={`p-3 flex gap-3 items-center rounded-xl shadow ${
                pathname === "/" ? "bg-neutral-200" : "bg-white"
              }`}
            >
              <PresentationChartBarIcon className="size-6 text-neutral-400" />
              <p className="font-semibold">상권 분석</p>
            </li>
          </Link>
          <Link href="/chat">
            <li
              className={`p-3 flex gap-3 items-center rounded-xl shadow ${
                pathname === "/chat" ? "bg-neutral-200" : "bg-white"
              }`}
            >
              <ChatBubbleBottomCenterTextIcon className="size-6 text-neutral-400" />
              <p className="font-semibold">AI 채팅</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
