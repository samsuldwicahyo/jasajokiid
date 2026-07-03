import { motion } from 'framer-motion';
import { Globe, GraduationCap, Palette, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { pricingFactors, serviceOptions } from '../data/services';
import { buildEstimateMessage } from '../utils/whatsapp';
import PricingFactorCard from './PricingFactorCard';
import SectionHeader from './SectionHeader';

const priceGuides = [
  {
    title: 'Website & Landing Page',
    startingPrice: 'Mulai Rp 1.500.000',
    description:
      'Cocok untuk company profile, landing page campaign, portfolio, atau website promosi UMKM.',
    icon: Globe,
  },
  {
    title: 'Pendampingan Skripsi & Jurnal',
    startingPrice: 'Mulai Rp 850.000',
    description:
      'Untuk struktur dokumen, formatting, konsultasi jurnal, hingga pendampingan teknis dokumen akademik.',
    icon: GraduationCap,
  },
  {
    title: 'Desain, Video & Multimedia',
    startingPrice: 'Mulai Rp 350.000',
    description:
      'Untuk kebutuhan desain sosial media, presentasi, editing video, dan output visual kreatif lain.',
    icon: Palette,
  },
];

export default function Pricing() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      service: '',
      deadline: '',
      details: '',
      budget: '',
    },
  });

  const onSubmit = (values) => {
    window.open(buildEstimateMessage(values), '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <section id="harga" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Sistem Harga"
          title="Harga Fleksibel Sesuai Kebutuhan"
          description="Harga tidak dibuat rata karena setiap kebutuhan punya tingkat kesulitan, deadline, format output, dan kebutuhan revisi yang berbeda."
        />

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-brand-border bg-slate-50 px-6 py-7 shadow-sm sm:px-8">
              <h3 className="text-2xl font-bold text-brand-text">Harga fleksibel berdasarkan kompleksitas</h3>
              <p className="mt-4 text-base leading-8 text-brand-soft">
                Estimasi akan menyesuaikan jenis layanan, kedalaman pekerjaan, tenggat, dan
                kebutuhan teknis yang Anda berikan saat konsultasi awal.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
              {pricingFactors.map((factor) => (
                <PricingFactorCard key={factor.title} {...factor} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-text">Gambaran estimasi layanan</h3>
              <p className="mt-3 text-sm leading-7 text-brand-soft">
                Angka berikut hanyalah titik awal untuk membantu memberi gambaran sebelum
                konsultasi.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {priceGuides.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className={[
                      'rounded-[2rem] border p-6 shadow-card',
                      index === 1
                        ? 'border-brand-navy bg-brand-navy text-white'
                        : 'border-brand-border bg-white',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'inline-flex h-12 w-12 items-center justify-center rounded-2xl',
                        index === 1 ? 'bg-white/10 text-white' : 'bg-brand-blue/10 text-brand-blue',
                      ].join(' ')}
                    >
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold">{item.title}</h4>
                    <p
                      className={[
                        'mt-3 text-sm leading-7',
                        index === 1 ? 'text-slate-200' : 'text-brand-soft',
                      ].join(' ')}
                    >
                      {item.description}
                    </p>
                    <div
                      className={[
                        'mt-6 text-sm font-semibold uppercase tracking-[0.18em]',
                        index === 1 ? 'text-slate-300' : 'text-brand-soft',
                      ].join(' ')}
                    >
                      {item.startingPrice}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-brand-border bg-white p-6 shadow-card sm:p-8"
          >
            <div className="mb-6">
              <div className="eyebrow">Estimasi Awal</div>
              <h3 className="mt-4 text-2xl font-bold text-brand-text">Cek estimasi via WhatsApp</h3>
              <p className="mt-3 text-sm leading-7 text-brand-soft sm:text-base">
                Isi detail singkat terlebih dahulu. Form akan mengarahkan Anda ke WhatsApp dengan
                pesan yang sudah tersusun agar proses konsultasi lebih cepat.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="estimate-name" className="mb-2 block text-sm font-semibold text-brand-text">
                  Nama
                </label>
                <input
                  id="estimate-name"
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('name', { required: 'Nama wajib diisi.' })}
                />
                {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
              </div>

              <div>
                <label htmlFor="estimate-service" className="mb-2 block text-sm font-semibold text-brand-text">
                  Jenis layanan
                </label>
                <select
                  id="estimate-service"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('service', { required: 'Pilih layanan terlebih dahulu.' })}
                >
                  <option value="">Pilih layanan</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="estimate-deadline" className="mb-2 block text-sm font-semibold text-brand-text">
                  Deadline
                </label>
                <input
                  id="estimate-deadline"
                  type="date"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('deadline')}
                />
              </div>

              <div>
                <label htmlFor="estimate-details" className="mb-2 block text-sm font-semibold text-brand-text">
                  Detail kebutuhan
                </label>
                <textarea
                  id="estimate-details"
                  rows="5"
                  placeholder="Jelaskan kebutuhan, format, file pendukung, atau arahan yang sudah ada"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('details', { required: 'Detail kebutuhan wajib diisi.' })}
                />
                {errors.details ? (
                  <p className="mt-2 text-sm text-red-600">{errors.details.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="estimate-budget" className="mb-2 block text-sm font-semibold text-brand-text">
                  Budget jika ada
                </label>
                <input
                  id="estimate-budget"
                  type="text"
                  placeholder="Contoh: 300.000 - 500.000"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('budget')}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-4 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-navy/95"
                aria-label="Kirim konsultasi via WhatsApp"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Kirim Konsultasi via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

