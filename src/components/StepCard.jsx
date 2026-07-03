import { motion } from 'framer-motion';

export default function StepCard({ step, title, description, icon: Icon }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-[1.75rem] border border-brand-border bg-white p-6 shadow-card"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
          {step}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-brand-text">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-soft">{description}</p>
    </motion.article>
  );
}

