"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Guard: skip animation setup only when the user prefers reduced motion (animations run on all viewport sizes). */
export const skipAnimations = () => prefersReducedMotion();

export { gsap, ScrollTrigger };
