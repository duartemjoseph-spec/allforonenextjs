"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function OddEvenComp() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // checks if a number is odd or even
  async function checkNumber() {
    if (!num.trim()) {
      setError(true);
      setResult("Enter a number first.");
      return;
    }

    if (!Number.isInteger(Number(num))) {
      setError(true);
      setResult("Please enter a whole number.");
      return;
    }

    try {
      setError(false);

      const safeNum = encodeURIComponent(num.trim());
      const text = await handleCall(`/OddOrEven/Check/${safeNum}`);

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
          <label className="text-sm text-slate-200">Number</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="#"
          />
        </div>

        <Button
          onClick={checkNumber}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Check
        </Button>
      </div>

      <ResultBox
        text={result}
        isError={error}
        placeholder="Odd or Even result will show here."
      />
    </div>
  );
}