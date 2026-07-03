import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, className = '' }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className={`rounded-[1.75rem] border border-brand-border/80 bg-white/90 p-6 shadow-card ${className}`}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-brand-text">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-soft">{description}</p>
    </motion.article>
  );
}

