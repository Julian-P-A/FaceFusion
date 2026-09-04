import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const defaultViewport = { once: true, margin: "-80px" } as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fade + rise entrance for cards, panels and blocks of content. */
export function RiseReveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: 32 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Scale + fade entrance for badges, pills and small emphasis elements. */
export function PopReveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, scale: 0.82 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={defaultViewport}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Clip-path / scale reveal intended for large media and product frames. */
export function MediaReveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, scale: 0.97, clipPath: "inset(4% round 24px)" }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1, clipPath: "inset(0% round 24px)" }}
      viewport={defaultViewport}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct motion children into view together. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : stagger } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Progressive per-word reveal for headline typography.
 * Splits on whitespace and animates each word into view with a small stagger.
 */
export function WordsReveal({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      // Keying by text forces a remount (and a fresh viewport trigger) whenever the
      // string changes — e.g. on language switch — instead of leaving newly mounted
      // words stuck at their "hidden" variant because the once-only viewport
      // observer had already fired for the previous text.
      key={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom" aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * Multi-line headline reveal: each line's words animate in, with the next
 * line picking up right after the previous one finishes staggering in.
 */
export function HeadingReveal({
  lines,
  className,
  lineClassName,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
}) {
  let cumulativeDelay = 0;
  return (
    <span className={className}>
      {lines.map((line, index) => {
        const delay = cumulativeDelay;
        cumulativeDelay += line.split(" ").length * 0.045 + 0.08;
        return <WordsReveal key={`${line}-${index}`} text={line} delay={delay} className={`block ${lineClassName ?? ""}`} />;
      })}
    </span>
  );
}
