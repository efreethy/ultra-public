"use client";

import React, { useEffect } from "react";
type SplineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { url?: string };
const SplineElement =
  "spline-viewer" as unknown as React.ComponentType<SplineProps>;

type SplineViewerProps = {
  url?: string;
};

export default function SplineViewer({
  url,
}: SplineViewerProps): React.JSX.Element {
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

  const sceneUrl =
    url ?? "https://prod.spline.design/hBACOet4chGONve2/scene.splinecode";

  return (
    <div className="absolute inset-0">
      <SplineElement key={sceneUrl} url={sceneUrl} />
    </div>
  );
}
