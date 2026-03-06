"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function AskingComp() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // checks input then calls api
  async function askQuestion() {
    if (!name.trim() || !time.trim()) {
      setError(true);
      setResult("Please fill out both inputs.");
      return;
    }

    try {
      setError(false);

      const safeName = encodeURIComponent(name.trim());
      const safeTime = encodeURIComponent(time.trim());

      const text = await handleCall(`/AskingQuestions/Ask/${safeName}/${safeTime}`);
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
          <label className="text-sm text-slate-200">What is your name?</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div>
          <label className="text-sm text-slate-200">What time do you wake up?</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time"
          />
        </div>

        <Button
          onClick={askQuestion}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Ask
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}