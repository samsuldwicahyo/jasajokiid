import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { orderSteps } from '../data/services';
import Button from './Button';
import SectionHeader from './SectionHeader';
import StepCard from './StepCard';

const previewSteps = [
  {
    title: 'Konsultasi Detail',
    description: 'Sampaikan kebutuhan, deadline, dan arahan awal agar brief lebih jelas sejak awal.',
    icon: orderSteps[0].icon,
  },
  {
    title: 'Estimasi & Penawaran',
    description: 'Tim akan cek tingkat kesulitan lalu memberikan estimasi harga sesuai ruang lingkup.',
    icon: orderSteps[3].icon,
  },
  {
    title: 'Proses & Revisi',
    description: 'Pengerjaan dimulai sesuai kesepakatan dan hasil bisa direview sesuai ketentuan awal.',
    icon: orderSteps[5].icon,
  },
];

export default function HowToOrder({ variant = 'preview' }) {
  const steps = variant === 'preview' ? previewSteps : orderSteps;

  return (
    <section id="cara-order" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Cara Order"
          title={
            variant === 'preview'
              ? 'Proses order mudah dan transparan'
              : 'Alur order di JasaJoki.id'
          }
          description={
            variant === 'preview'
              ? 'Mulai dari konsultasi awal, pengecekan kebutuhan, hingga estimasi harga. Semua dibuat agar proses pertama terasa jelas dan tidak berbelit.'
              : 'Kebutuhan akan dicek terlebih dahulu agar ruang lingkup, deadline, dan ekspektasi pengerjaan tetap realistis sejak awal.'
          }
        />

        <div className="relative">
          <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-brand-blue via-brand-accent to-transparent lg:hidden" />
          <div
            className={[
              'absolute hidden h-px bg-gradient-to-r from-brand-blue via-brand-accent to-transparent lg:block',
              variant === 'preview' ? 'left-16 right-16 top-12' : 'left-10 right-10 top-12',
            ].join(' ')}
          />

          <div className={`grid gap-5 ${variant === 'preview' ? 'lg:grid-cols-3' : 'lg:grid-cols-7'}`}>
            {steps.map((step, index) => (
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
          <Button to="/kontak" icon={ArrowRight} ariaLabel="Mulai konsultasi">
            {variant === 'preview' ? 'Mulai Konsultasi' : 'Konsultasi Sekarang'}
          </Button>
        </div>
      </div>
    </section>
  );
}
