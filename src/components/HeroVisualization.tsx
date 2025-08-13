"use client";

import React, { useState } from "react";
import VantaCells from "./visuals/VantaCells";
import VantaTrunk from "./visuals/VantaTrunk";
import VantaFog from "./visuals/VantaFog";
import VantaClouds from "./visuals/VantaClouds";

type VisualMode = {
  key: "cells" | "trunk" | "fog" | "clouds";
  Component: React.ComponentType;
};

const visualModes: readonly VisualMode[] = [
  { key: "fog", Component: VantaFog },
  { key: "cells", Component: VantaCells },
  { key: "trunk", Component: VantaTrunk },
  { key: "clouds", Component: VantaClouds },
] as const;

export default function HeroVisualization(): React.JSX.Element {
  const [modeIndex, setModeIndex] = useState(0);
  const ModeComponent = visualModes[modeIndex].Component;

  const goPrev = () =>
    setModeIndex((i) => (i - 1 + visualModes.length) % visualModes.length);
  const goNext = () => setModeIndex((i) => (i + 1) % visualModes.length);

  return (
    <div className="h-full w-full relative">
      <ModeComponent />

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
