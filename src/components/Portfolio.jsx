import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/services';
import Button from './Button';
import SectionHeader from './SectionHeader';

export default function Portfolio() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contoh Kebutuhan"
          title="Contoh Kebutuhan yang Bisa Dibantu"
          description="Contoh berikut bersifat dummy untuk memberi gambaran jenis kebutuhan yang dapat didiskusikan bersama tim JasaJoki.id."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex h-full flex-col rounded-[1.75rem] border border-brand-border bg-white/90 p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {item.category}
                </span>
                <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-text">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-brand-soft">{item.description}</p>
              <div className="mt-6">
                <Button to="/kontak" variant="outline" size="sm" icon={ArrowRight} ariaLabel={`Konsultasikan proyek serupa ${item.title}`}>
                  Konsultasikan Proyek Serupa
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

