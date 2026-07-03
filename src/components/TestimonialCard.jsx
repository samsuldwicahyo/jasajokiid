import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ quote, name, role }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      className="flex h-full flex-col rounded-[1.9rem] border border-brand-border/80 bg-white/90 p-6 shadow-card"
    >
      <div className="mb-4 flex items-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/[0.12] text-brand-accent">
        <Quote className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="flex-1 text-base leading-8 text-brand-text">"{quote}"</p>
      <div className="mt-6 border-t border-brand-border pt-4">
        <div className="font-semibold text-brand-text">{name}</div>
        <div className="text-sm text-brand-soft">{role}</div>
      </div>
    </motion.article>
  );
}
