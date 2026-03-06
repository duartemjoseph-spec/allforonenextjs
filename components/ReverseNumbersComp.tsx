"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function ReverseNumbersComp() {
  const [nums, setNums] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  async function reverseNums() {
    const cleaned = nums.trim();

    if (cleaned === "") {
      setError(true);
      setResult("Enter numbers first.");
      return;
    }

    // super basic validation
    if (cleaned.includes(" ")) {
      setError(true);
      setResult("No spaces. Numbers only.");
      return;
    }

    const n = Number(cleaned);

    if (isNaN(n)) {
      setError(true);
      setResult("Numbers only.");
      return;
    }

    // makes sure it isn't a decimal like 12.5
    if (!Number.isInteger(n)) {
      setError(true);
      setResult("Whole numbers only.");
      return;
    }

    try {
      setError(false);
      const safeNums = encodeURIComponent(cleaned);
      const text = await handleCall(`/ReverseItNumbersOnly/Reverse/${safeNums}`);
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
          <label className="text-sm text-slate-200">Numbers</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={nums}
            onChange={(e) => setNums(e.target.value)}
            placeholder="12345"
          />
        </div>

        <Button
          onClick={reverseNums}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Reverse
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}