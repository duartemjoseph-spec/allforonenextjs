import Link from "next/link";
import { Navbar } from "flowbite-react";

const links = [
  { num: 1, title: "Say Hello", sub: "HelloWorld endpoint", href: "/pages/HelloWorld" },
  { num: 2, title: "Adding", sub: "Add 2 numbers", href: "/pages/AddingTwoNumbers" },
  { num: 3, title: "Asking Questions", sub: "Name + wake up time", href: "/pages/AskingQuestions" },

  { num: 4, title: "Greater or Less", sub: "Compare 2 numbers", href: "/pages/GreaterThanLessThan" },
  { num: 5, title: "MadLib", sub: "Fill in 4 words", href: "/pages/MadLib" },
  { num: 6, title: "Odd or Even", sub: "Check a number", href: "/pages/OddOrEven" },

  { num: 7, title: "ReverseIt", sub: "Alphanumeric string", href: "/pages/ReverseItAlphanumeric" },
  { num: 8, title: "Reverse Numbers Only", sub: "Numbers only", href: "/pages/ReverseItNumbersOnly" },
  { num: 9, title: "Magic 8 Ball", sub: "Ask a question", href: "/pages/Magic8Ball" },

  { num: 10, title: "Restaurant Picker", sub: "Category → suggestion", href: "/pages/RestaurantPicker" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Top bar */}
      <Navbar fluid className="bg-slate-900/30 border-b border-slate-700/30">
        <div className="mx-auto">
          <Link href="/" className="text-sm font-semibold text-slate-100">
            All For One
          </Link>
        </div>

        <div className="flex gap-3">
          <span className="text-sm text-slate-200">Home</span>
        </div>
      </Navbar>

      {/* Center panel */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10">
        {/* KEY: this max width matches your reference image better */}
        <div className="w-full max-w-4xl">
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/30 px-6 py-5 shadow-sm">
            <h2 className="text-lg font-bold">Home</h2>
            <p className="text-sm text-slate-300 mt-1">Pick an endpoint below.</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl border border-slate-700/40 bg-slate-900/20 px-4 py-3 hover:border-slate-500/60 hover:bg-slate-900/35 transition"
                >
                  <p className="text-sm font-bold">
                    {l.num}) {l.title}
                  </p>
                  <p className="text-xs text-slate-300">{l.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}