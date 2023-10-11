"use client";
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "@/lib/particle-config";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div
      id="particle-background"
      className="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70"
    >
      <Particles
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      ></Particles>
    </div>
  );
}
