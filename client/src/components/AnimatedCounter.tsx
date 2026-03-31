import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-brand-green mb-2">
        {prefix}{count}{suffix}
      </div>
      <p className="text-brand-navy/70 text-sm md:text-base font-medium">{label}</p>
    </motion.div>
  );
}
