"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function MadLibComp() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [noun, setNoun] = useState("");
  const [adj, setAdj] = useState("");

  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // makes the story using the api
  async function makeStory() {
    if (!name.trim() || !color.trim() || !noun.trim() || !adj.trim()) {
      setError(true);
      setResult("Fill in all 4 words.");
      return;
    }

    try {
      setError(false);

      const safeName = encodeURIComponent(name.trim());
      const safeColor = encodeURIComponent(color.trim());
      const safeNoun = encodeURIComponent(noun.trim());
      const safeAdj = encodeURIComponent(adj.trim());

      const text = await handleCall(
        `/MadLib/Create/${safeName}/${safeColor}/${safeNoun}/${safeAdj}`
      );

      setResult(text);
    } catch {
      setError(true);
      setResult("Could not reach the API.");
    }
  }

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-4">
        <div>
          <label className="text-sm text-slate-200">Name</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div>
          <label className="text-sm text-slate-200">Color</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Color"
          />
        </div>

        <div>
          <label className="text-sm text-slate-200">Noun</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
            placeholder="Noun"
          />
        </div>

        <div>
          <label className="text-sm text-slate-200">Adjective</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={adj}
            onChange={(e) => setAdj(e.target.value)}
            placeholder="Adjective"
          />
        </div>
      </div>

      <Button
        onClick={makeStory}
        className="mt-3 h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        Make Story
      </Button>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}