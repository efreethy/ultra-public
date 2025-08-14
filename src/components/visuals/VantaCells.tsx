"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { VantaEffect, VantaGlobal, WindowWithVanta } from "@/types/vanta";

export default function VantaCells(): React.JSX.Element {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const w = window as WindowWithVanta;
    if (!w.THREE) {
      w.THREE = THREE;
    }

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

    let canceled = false;
    loadScript(
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js"
    )
      .then(() => {
        if (canceled || !vantaRef.current) return;
        const VANTA: VantaGlobal | undefined = (window as WindowWithVanta)
          .VANTA;
        if (!VANTA?.CELLS) return;
        effectRef.current = VANTA.CELLS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x7d827d,
          color2: 0x7735f2,
          size: 1.5,
          speed: 1,
        });
      })
      .catch(() => {});

    return () => {
      canceled = true;
      try {
        effectRef.current?.destroy?.();
      } catch {}
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ touchAction: "none" }}
    ></div>
  );
}
