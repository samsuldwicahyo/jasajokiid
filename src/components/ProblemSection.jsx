import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { audienceProblems } from '../data/services';
import SectionHeader from './SectionHeader';

export default function ProblemSection() {
  return (
    <section id="masalah" className="section-anchor bg-slate-50/70 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {audienceProblems.slice(0, 4).map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border-l-4 border-red-300 bg-white p-6 shadow-card"
              >
                <h3 className="text-lg font-bold text-brand-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-soft">{item.description}</p>
              </motion.article>
            ))}
          </div>

          <div>
            <SectionHeader
              eyebrow="Masalah Umum"
              title="Tugas dan proyek menumpuk?"
              description="Kesibukan kerja, kuliah, dan tenggat yang sempit sering membuat proses pengerjaan kehilangan arah. JasaJoki.id hadir untuk membuat brief, alur, dan prioritas menjadi lebih jelas."
              align="left"
            />

            <div className="space-y-4">
              {[
                'Pendampingan yang lebih terarah sejak awal konsultasi.',
                'Bantuan teknis untuk dokumen, website, desain, dan project digital.',
                'Komunikasi jelas dengan revisi sesuai kesepakatan.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <p className="text-base leading-8 text-brand-soft">{item}</p>
                </div>
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
                Ceritakan kebutuhanmu, deadline-nya kapan, dan arahan yang sudah ada. Tim kami
                akan bantu menyusun langkah awal yang lebih realistis.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

