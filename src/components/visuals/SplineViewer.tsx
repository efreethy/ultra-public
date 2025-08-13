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
      <div className="absolute bottom-3 right-3 z-50 bg-black text-black text-xs px-12 py-4 rounded shadow-md">
        ring is here
      </div>
    </div>
  );
}
