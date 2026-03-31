import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, light = false, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${light ? "text-brand-green-light" : "text-brand-green"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
