"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls, useGLTF } from "@react-three/drei";

function BrainScene(): React.JSX.Element {
  const { scene } = useGLTF("/brain_model_from_mri_simplified.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/brain_model_from_mri_simplified.glb");

export default function BrainModeThree(): React.JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
          Loading 3D…
        </div>
      }
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45, near: 0.01, far: 100 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          const handler = (e: Event) => e.preventDefault();
          gl.domElement.addEventListener("webglcontextlost", handler, false);
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.9} position={[2, 2, 2]} />
        <Bounds fit clip observe margin={1.6}>
          <group position={[0, -2.55, 0]}>
            <BrainScene />
          </group>
        </Bounds>
        <OrbitControls
          target={[0, -2.55, 0]}
          enableZoom
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={0.6}
        />
        <Environment preset="city" />
      </Canvas>
    </Suspense>
  );
}
