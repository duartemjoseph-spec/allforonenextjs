"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function Magic8Comp() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // asks the magic 8 ball api
  async function askBall() {
    if (!q.trim()) {
      setError(true);
      setResult("Ask a question first.");
      return;
    }

    try {
      setError(false);

      const safeQ = encodeURIComponent(q.trim());
      const text = await handleCall(`/Magic8Ball/${safeQ}`);

      setResult(text);
    } catch {
      setError(true);
      setResult("Could not reach the API.");
    }
  }

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-3 md:items-end">
        <div className="md:col-span-2">
          <label className="text-sm text-slate-200">Question</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type your question here..."
          />
        </div>

        <Button
          onClick={askBall}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Ask
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Answer will show here." />
    </div>
  );
}