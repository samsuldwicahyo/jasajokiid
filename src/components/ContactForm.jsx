import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { serviceOptions } from '../data/services';
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  buildContactMessage,
} from '../utils/whatsapp';
import SectionHeader from './SectionHeader';

const contactInfo = [
  {
    title: 'WhatsApp',
    value: WHATSAPP_NUMBER,
    icon: MessageCircle,
  },
  {
    title: 'Instagram',
    value: INSTAGRAM_HANDLE,
    icon: Instagram,
  },
  {
    title: 'Email',
    value: CONTACT_EMAIL,
    icon: Mail,
  },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      deadline: '',
      details: '',
      budget: '',
    },
  });

  const onSubmit = (values) => {
    window.open(buildContactMessage(values), '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <section id="kontak" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <SectionHeader
              eyebrow="Kontak"
              title="Hubungi admin kami"
              description="Pilih kanal komunikasi yang paling nyaman, atau isi form terstruktur agar kebutuhan bisa langsung dicek bersama tim JasaJoki.id."
              align="left"
            />

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-brand-border bg-white/90 p-5 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
                      {item.title}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-brand-text">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-brand-border bg-brand-navy px-6 py-6 text-white shadow-glow">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-300" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-200 sm:text-base">
                  Privasi file dan detail kebutuhan klien diproses secara tertutup. Kami menjaga
                  komunikasi tetap profesional dan sesuai kebijakan layanan.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-brand-border bg-white p-6 shadow-card sm:p-8"
          >
            <div className="mb-6 rounded-[1.5rem] bg-slate-50 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
                Form konsultasi
              </p>
              <p className="mt-2 text-sm leading-7 text-brand-soft">
                Setelah submit, Anda akan diarahkan ke WhatsApp dengan format pesan yang sudah rapi.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-brand-text">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Nama lengkap"
                    className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                    {...register('name', { required: 'Nama wajib diisi.' })}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-brand-text">
                    Nomor WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="text"
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-brand-text">
                  Pilih Layanan
                </label>
                <select
                  id="contact-service"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('service', { required: 'Layanan wajib dipilih.' })}
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-deadline" className="mb-2 block text-sm font-semibold text-brand-text">
                    Deadline
                  </label>
                  <input
                    id="contact-deadline"
                    type="date"
                    className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                    {...register('deadline')}
                  />
                </div>

                <div>
                  <label htmlFor="contact-budget" className="mb-2 block text-sm font-semibold text-brand-text">
                    Budget jika ada
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    placeholder="Opsional"
                    className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                    {...register('budget')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-details" className="mb-2 block text-sm font-semibold text-brand-text">
                  Detail Kebutuhan
                </label>
                <textarea
                  id="contact-details"
                  rows="6"
                  placeholder="Tuliskan kebutuhan, format, file, atau arahan pengerjaan yang sudah ada"
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                  {...register('details', { required: 'Detail kebutuhan wajib diisi.' })}
                />
                {errors.details ? (
                  <p className="mt-2 text-sm text-red-600">{errors.details.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-sky-500"
                aria-label="Kirim form konsultasi"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Kirim Konsultasi via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

