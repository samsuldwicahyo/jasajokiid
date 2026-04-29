import { motion } from 'framer-motion';

export default function PricingFactorCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-[1.5rem] border border-brand-border bg-white/90 p-5 shadow-card"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/[0.08] text-brand-navy">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-brand-text">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-soft">{description}</p>
    </motion.article>
  );
}
