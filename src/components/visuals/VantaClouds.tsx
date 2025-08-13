"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaClouds(): React.JSX.Element {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    const winAny = window as any;
    if (!winAny.THREE) {
      winAny.THREE = THREE;
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
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds2.min.js"
    )
      .then(() => {
        if (canceled || !vantaRef.current) return;
        const VANTA = (window as any).VANTA;
        if (!VANTA?.CLOUDS2) return;
        effectRef.current = VANTA.CLOUDS2({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          //   backgroundColor: 0x5a00ff,
          //   skyColor: 0x685bca,
          //   lightColor: 0x6f68f5,
          // texturePath can be provided if you have custom noise textures available
          // texturePath: "/noise.png",
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

  return <div ref={vantaRef} className="absolute inset-0" />;
}
