"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function ReverseAlphaComp() {
  const [textIn, setTextIn] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // reverses the text using the api
  async function reverseText() {
    if (!textIn.trim()) {
      setError(true);
      setResult("Enter text first.");
      return;
    }

    try {
      setError(false);

      const safeText = encodeURIComponent(textIn.trim());
      const text = await handleCall(`/ReverseItAlphanumeric/Reverse/${safeText}`);

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
          <label className="text-sm text-slate-200">Text</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={textIn}
            onChange={(e) => setTextIn(e.target.value)}
            placeholder="Type something"
          />
        </div>

        <Button
          onClick={reverseText}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Reverse
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}