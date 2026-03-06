import Link from "next/link";
import { Navbar } from "flowbite-react";
import React from "react";

export default function PageContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <Navbar fluid className="bg-slate-900/30 border-b border-slate-700/30">
        <div className="mx-auto">
          <Link href="/" className="text-sm font-semibold text-slate-100">
            All For One
          </Link>
        </div>

        <div className="flex gap-3">
          <Link href="/" className="text-sm text-slate-200 hover:text-white">
            Home
          </Link>
        </div>
      </Navbar>

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl">
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/20 px-7 py-6 shadow-sm">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm text-slate-300 mt-1">{subtitle}</p>

            <div className="mt-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}