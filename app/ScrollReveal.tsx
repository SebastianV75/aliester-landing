"use client";

import { useEffect } from "react";

/**
 * Capa de movimiento del lado del cliente. No renderiza nada visible:
 * - revela elementos [data-reveal] / [data-reveal-group] al entrar en viewport
 * - eleva el nav al hacer scroll
 *
 * Si no hay JS o el usuario prefiere menos movimiento, todo queda visible.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Activa el estado oculto sólo cuando JS está disponible.
    root.classList.add("reveal-ready");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-group]",
      ),
    );

    let observer: IntersectionObserver | undefined;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
      );
      targets.forEach((el) => io.observe(el));
      observer = io;
    }

    // Nav: sombra y fondo más sólido al separarse del top.
    const nav = document.getElementById("site-nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
