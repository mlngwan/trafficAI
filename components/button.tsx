"use client";

interface ButtonProops {
  text: string;
  loading: boolean;
}
export default function Button({ text, loading }: ButtonProops) {
  return (
    <button
      disabled={loading}
      className="w-full h-10 mt-3 cursor-pointer bg-neutral-300 hover:bg-neutral-200 text-black transition-colors 
    font-semibold rounded-2xl shadow-md disabled:bg-neutral-400 dark:bg-neutral-100 dark:hover:bg-neutral-50 dark:text-black"
    >
      {!loading ? text : "분석중..."}
    </button>
  );
}
