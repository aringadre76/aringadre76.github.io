import { type ReactNode } from "react";

/**
 * Grouping wrapper for page content. Content is fully readable on the
 * first paint (no opacity hiding or entrance animation). Subtle
 * decorative motion is applied to non-essential elements elsewhere
 * (blinking caret, hover lift, scanlines, timeline markers).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** "$ title ─────────" page heading with a terminal prompt mark. */
export function SectionHead({ title }: { title: string }) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="prompt-sign" aria-hidden="true">
          $
        </span>
        <h1>{title}</h1>
        <span className="head-rule" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
