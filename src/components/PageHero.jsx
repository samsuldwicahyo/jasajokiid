import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="relative overflow-hidden bg-hero-glow pt-32 pb-14 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-panel mx-auto max-w-4xl rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-brand-soft sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {primaryAction ? (
              <Button
                to={primaryAction.to}
                href={primaryAction.href}
                external={primaryAction.external}
                icon={ArrowRight}
                ariaLabel={primaryAction.label}
              >
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button
                to={secondaryAction.to}
                href={secondaryAction.href}
                external={secondaryAction.external}
                variant="outline"
                ariaLabel={secondaryAction.label}
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

