import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { featuredServices } from '../data/services';
import Button from './Button';
import SectionHeader from './SectionHeader';

export default function FeaturedServices() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Layanan Prioritas"
          title="Fokus layanan utama"
          description="Beberapa layanan berikut menjadi prioritas karena paling sering diminta untuk kebutuhan website, visual, dokumen, dan pendampingan akademik yang lebih rapi."
        />

        <div className="space-y-6">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className={[
                'overflow-hidden rounded-[2rem] border shadow-card',
                index % 2 === 0
                  ? 'border-brand-border bg-white'
                  : 'border-brand-blue/25 bg-sky-50/70',
              ].join(' ')}
            >
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-navy text-white shadow-glow">
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-brand-text">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-brand-soft">{service.description}</p>
                  <div className="mt-6">
                    <Button to="/kontak" variant="secondary" icon={ArrowRight} ariaLabel={`Tanya layanan ${service.title}`}>
                      Tanya Layanan Ini
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white/90 px-4 py-3 text-sm text-brand-text"
                    >
                      <Check className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

