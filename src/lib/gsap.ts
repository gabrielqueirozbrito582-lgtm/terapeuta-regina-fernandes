"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

/** Combined guard: skip animation setup on mobile or when the user prefers reduced motion. */
export const skipAnimations = () => prefersReducedMotion() || isMobileViewport();

export { gsap, ScrollTrigger };
