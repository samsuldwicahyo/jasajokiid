import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights = [],
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,244,255,0.9),rgba(248,250,252,0.96),rgba(255,255,255,1))]" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.9rem]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-brand-soft sm:text-lg">
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
          {highlights.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-brand-border bg-white/85 px-5 py-4 text-sm font-semibold text-brand-text shadow-card"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

