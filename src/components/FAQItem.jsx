import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="rounded-[1.5rem] border border-brand-border bg-white shadow-card">
      <button
        id={buttonId}
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-slate-50 sm:px-6"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-brand-text sm:text-lg">{item.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 text-brand-soft" aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-7 text-brand-soft sm:px-6 sm:text-base">
              {item.answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

