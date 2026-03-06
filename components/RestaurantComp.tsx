"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import ResultBox from "./ResultBox";
import { handleCall } from "@/app/services/DataService";

export default function RestaurantComp() {
  const [cat, setCat] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // picks a restaurant based on category
  async function pickRestaurant() {
    if (!cat) {
      setError(true);
      setResult("Pick a category first.");
      return;
    }

    try {
      setError(false);

      const safeCat = encodeURIComponent(cat.trim());
      const text = await handleCall(`/RestaurantPicker/Pick/${safeCat}`);

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
          <label className="text-sm text-slate-200">Category</label>
          <select
            className="mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-900/30 p-2 text-slate-100"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="pizza">pizza</option>
            <option value="burger">burger</option>
            <option value="mexican">mexican</option>
          </select>
        </div>

        <Button
          onClick={pickRestaurant}
          className="h-9 w-full md:w-52 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Pick
        </Button>
      </div>

      <ResultBox text={result} isError={error} placeholder="Result will show here." />
    </div>
  );
}