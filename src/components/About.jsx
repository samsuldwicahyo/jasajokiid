import { motion } from 'framer-motion';
import { ArrowRight, CheckCheck, Sparkles } from 'lucide-react';
import teamIllustration from '../assets/team-collaboration.svg';
import Button from './Button';
import SectionHeader from './SectionHeader';

const criteria = [
  'tingkat kesulitan',
  'deadline',
  'detail permintaan',
  'jumlah revisi',
  'kompleksitas proyek',
  'format atau arahan yang diberikan',
];

const values = [
  { title: 'Profesional', accent: 'bg-brand-navy text-white' },
  { title: 'Fleksibel', accent: 'bg-brand-blue text-white' },
  { title: 'Sesuai Arahan', accent: 'bg-brand-accent text-white' },
];

export default function About() {
  return (
    <section id="tentang" className="section-anchor bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Tentang Kami"
              title="Lebih dari sekadar bantuan pengerjaan"
              description="JasaJoki.id diposisikan sebagai layanan konsultatif dan dukungan proyek yang membantu mahasiswa, pekerja, dan pelaku usaha menyelesaikan kebutuhan digital maupun akademik secara lebih profesional."
              align="left"
            />
            <div className="space-y-5 text-base leading-8 text-brand-soft">
              <p>
                Kami menyediakan layanan pembuatan website, aplikasi, desain grafis, editing
                video, perapian dokumen, konsultasi jurnal, pendampingan skripsi, makalah,
                artikel, dan kebutuhan proyek lain yang masih relevan dengan brief klien.
              </p>
              <p>Setiap layanan disesuaikan berdasarkan faktor berikut:</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {criteria.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white/85 px-4 py-3 text-sm text-brand-text shadow-sm"
                >
                  <CheckCheck className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  <span className="capitalize">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button to="/kontak" icon={ArrowRight} ariaLabel="Konsultasi kebutuhan Anda">
                Konsultasi kebutuhan Anda
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-brand-border bg-slate-50 p-4 shadow-card sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-white/90 p-4 sm:p-5">
                <img
                  src={teamIllustration}
                  alt="Ilustrasi tim digital JasaJoki.id yang sedang berkolaborasi"
                  className="w-full rounded-[1.5rem]"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className={`rounded-[1.4rem] px-5 py-4 text-center text-sm font-semibold shadow-card ${value.accent}`}
                >
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.15]">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>{value.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
