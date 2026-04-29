import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { orderSteps } from '../data/services';
import Button from './Button';
import SectionHeader from './SectionHeader';
import StepCard from './StepCard';

export default function HowToOrder() {
  return (
    <section id="cara-order" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Alur Order"
          title="Cara Order di JasaJoki.id"
          description="Prosesnya dibuat sederhana supaya kebutuhan bisa dicek cepat, ruang lingkup jelas, dan pengerjaan tetap sesuai kesepakatan."
        />

        <div className="relative">
          <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-brand-blue via-brand-accent to-transparent lg:hidden" />
          <div className="absolute left-10 right-10 top-12 hidden h-px bg-gradient-to-r from-brand-blue via-brand-accent to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-7">
            {orderSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative lg:pt-4"
              >
                <StepCard step={index + 1} {...step} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/kontak" icon={ArrowRight} ariaLabel="Konsultasi Sekarang">
            Konsultasi Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}

