"use client";

import React, { useEffect } from "react";
type SplineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { url?: string };
const SplineElement =
  "spline-viewer" as unknown as React.ComponentType<SplineProps>;

export default function SplineViewer(): React.JSX.Element {
  useEffect(() => {
    const src =
      "https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js";
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = src;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="absolute inset-0">
      <SplineElement url="https://prod.spline.design/hBACOet4chGONve2/scene.splinecode" />
      <div className="absolute bottom-5 right-5 z-50 pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/80 border border-white/10 px-6 py-2.5 text-white text-xs font-medium shadow backdrop-blur">
          {/* <span className="h-4 w-4 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500" /> */}
          &nbsp; &nbsp; <span>Radiology 2.0</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
