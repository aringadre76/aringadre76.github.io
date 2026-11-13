import { useEffect, useState } from "react";

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const GLYPHS = "!<>-_\\/[]{}=+*^?#";

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

/** Scramble-decode reveal of a string, terminal style. */
export function useScramble(text: string, delayMs = 0): string {
  const [display, setDisplay] = useState(
    () => (prefersReducedMotion() ? text : ""),
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    let raf = 0;
    const start = performance.now() + delayMs;
    setDisplay(
      text
        .split("")
        .map((c) => (c === " " ? " " : randomGlyph()))
        .join(""),
    );
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= 0) {
        const revealed = Math.floor(elapsed / 55);
        if (revealed >= text.length) {
          setDisplay(text);
          return;
        }
        let out = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed) out += text[i];
          else out += text[i] === " " ? " " : randomGlyph();
        }
        setDisplay(out);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delayMs]);

  return display;
}

export type TypewriterOptions = {
  typeMs?: number;
  deleteMs?: number;
  pauseMs?: number;
};

/**
 * Cycles through a list of strings. The first string is rendered
 * in full immediately, so text is never blank on first paint; the
 * typing motion is purely decorative.
 */
export function useTypewriter(
  texts: string[],
  opts?: TypewriterOptions,
): string {
  const [display, setDisplay] = useState(texts[0] ?? "");

  useEffect(() => {
    if (texts.length === 0) return;
    if (prefersReducedMotion()) {
      setDisplay(texts[0]);
      return;
    }
    const typeMs = opts?.typeMs ?? 55;
    const deleteMs = opts?.deleteMs ?? 30;
    const pauseMs = opts?.pauseMs ?? 2400;
    let idx = 0;
    let char = texts[0].length;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const current = texts[idx];
      if (!deleting) {
        char += 1;
        setDisplay(current.slice(0, char));
        if (char >= current.length) {
          deleting = true;
          timer = window.setTimeout(tick, pauseMs);
        } else {
          timer = window.setTimeout(tick, typeMs);
        }
      } else {
        char -= 1;
        setDisplay(current.slice(0, char));
        if (char <= 0) {
          deleting = false;
          idx = (idx + 1) % texts.length;
          timer = window.setTimeout(tick, 250);
        } else {
          timer = window.setTimeout(tick, deleteMs);
        }
      }
    };

    setDisplay(texts[0]);
    timer = window.setTimeout(tick, pauseMs);
    return () => window.clearTimeout(timer);
  }, [texts, opts?.typeMs, opts?.deleteMs, opts?.pauseMs]);

  return display;
}
