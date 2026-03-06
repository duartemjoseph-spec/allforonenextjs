"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function SayHelloComp() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  async function hello() {
    try {
      setError(false);
      const text = await handleCall("/HelloWorld/Hello");
      setResult(text);
    } catch {
      setError(true);
      setResult("Could not reach the API.");
    }
  }

  // says hello with the name you type
  async function helloName() {
    if (!name.trim()) {
      setError(true);
      setResult("Please type a name first.");
      return;
    }

    try {
      setError(false);
      const safeName = encodeURIComponent(name.trim());
      const text = await handleCall("/HelloWorld/Hello/" + safeName);
      setResult(text);
    } catch {
      setError(true);
      setResult("Could not reach the API.");
    }
  }

  return (
    <div className="space-y-3">
      <div>
        <Button
          onClick={hello}
          className="h-9 w-20 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Hello
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="h-9 flex-1 rounded-lg border border-slate-700/50 bg-slate-900/30 px-3 text-slate-100 placeholder:text-slate-400"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          onClick={helloName}
          className="h-9 w-36 bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Hello + Name
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}