"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { VantaEffect, VantaGlobal, WindowWithVanta } from "@/types/vanta";

export default function VantaFog(): React.JSX.Element {
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
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
    )
      .then(() => {
        if (canceled || !vantaRef.current) return;
        const VANTA: VantaGlobal | undefined = (window as WindowWithVanta)
          .VANTA;
        if (!VANTA?.FOG) return;
        effectRef.current = VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x3cff,
          midtoneColor: 0xa400ff,
          lowlightColor: 0xffc200,
          baseColor: 0xc8caf2,
          blurFactor: 0.53,
          speed: 1.9,
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
      className="absolute inset-0 pointer-events-auto rounded-2xl overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <div className="absolute bottom-5 right-5 z-50 pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/80 border border-white/10 px-6 py-2.5 text-white text-xs font-medium shadow backdrop-blur">
          {/* <span className="h-4 w-4 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500" /> */}
          &nbsp; &nbsp; <span>Radiology 2.0</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
