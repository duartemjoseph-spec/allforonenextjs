"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function AddingComp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // checks input first then calls api
  async function addNumbers() {
    if (!num1.trim() || !num2.trim()) {
      setError(true);
      setResult("Enter both numbers.");
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

      const text = await handleCall(`/AddingTwoNumbers/Add/${safe1}/${safe2}`);
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
          onClick={addNumbers}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Add
        </Button>
      </div>

      <ResultBox
        text={result}
        isError={error}
        placeholder="The Sum will appear here."
      />
    </div>
  );
}