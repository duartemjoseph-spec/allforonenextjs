"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function GreaterLessComp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // compares two numbers using the api
  async function compareNumbers() {
    if (!num1.trim() || !num2.trim()) {
      setError(true);
      setResult("Pick two numbers first.");
      return;
    }

    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError(true);
      setResult("Both inputs must be numbers.");
      return;
    }

    try {
      setError(false);

      const safe1 = encodeURIComponent(num1.trim());
      const safe2 = encodeURIComponent(num2.trim());

      const text = await handleCall(`/GreaterOrLess/Compare/${safe1}/${safe2}`);
      setResult(text);
    } catch {
      setError(true);
      setResult("Could not reach the API.");
    }
  }

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-3 md:items-end">
        <div>
          <label className="text-sm text-slate-200">Number 1</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="#"
          />
        </div>

        <div>
          <label className="text-sm text-slate-200">Number 2</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="#"
          />
        </div>

        <Button
          onClick={compareNumbers}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Compare
        </Button>
      </div>

      <ResultBox
        text={result}
        isError={error}
        placeholder="Result will show which number is greater than, less than, or equal to the other."
      />
    </div>
  );
}