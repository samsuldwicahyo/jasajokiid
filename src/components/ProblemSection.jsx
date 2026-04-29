import { motion } from 'framer-motion';
import { audienceProblems } from '../data/services';
import FeatureCard from './FeatureCard';
import SectionHeader from './SectionHeader';

export default function ProblemSection() {
  return (
    <section id="masalah" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Masalah Umum"
          title="Punya Tugas, Proyek, atau Kebutuhan Digital yang Belum Selesai?"
          description="Kami memahami tantangan yang sering muncul saat deadline semakin dekat, arahan belum rapi, atau kebutuhan teknis belum punya titik mulai yang jelas."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {audienceProblems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-[2rem] border border-brand-border bg-brand-navy px-6 py-7 text-white shadow-glow sm:px-8"
        >
          <p className="text-base leading-8 text-slate-200 sm:text-lg">
            Kamu cukup ceritakan kebutuhanmu, deadline-nya kapan, dan arahan yang sudah ada. Tim
            JasaJoki.id akan bantu cek kebutuhan dan memberi estimasi pengerjaan yang sesuai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

