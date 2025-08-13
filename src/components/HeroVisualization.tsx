"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import BrainModel from "./visuals/BrainModel";
import VantaCells from "./visuals/VantaCells";

export default function HeroVisualization(): React.JSX.Element {
  const modes = ["brain", "cells"] as const;
  const [modeIndex, setModeIndex] = useState(0);
  const currentMode = modes[modeIndex];

  const vantaRef = useRef<HTMLDivElement | null>(null);

  const goPrev = () =>
    setModeIndex((i) => (i - 1 + modes.length) % modes.length);
  const goNext = () => setModeIndex((i) => (i + 1) % modes.length);

  return (
    <div className="h-full w-full relative">
      {currentMode === "brain" ? <BrainModel /> : <VantaCells />}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-3">
        <button
          type="button"
          aria-label="Previous visualization"
          onClick={goPrev}
          className="pointer-events-auto h-8 w-8 md:h-9 md:w-9 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next visualization"
          onClick={goNext}
          className="pointer-events-auto h-8 w-8 md:h-9 md:w-9 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70"
        >
          ›
        </button>
      </div>
    </div>
  );
}
