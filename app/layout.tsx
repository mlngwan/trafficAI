import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/side-bar";

export const metadata: Metadata = {
  title: "Market Mentor",
  description: "당신의 창업 파트너",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4">{children}</div>
        </div>
      </body>
    </html>
  );
}
