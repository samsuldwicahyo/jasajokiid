import { motion } from 'framer-motion';
import { FileText, Instagram, Laptop, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, buildWhatsAppLink } from '../utils/whatsapp';
import Button from './Button';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[2.4rem] bg-navy-gradient px-6 py-10 text-white shadow-glow sm:px-10 sm:py-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-6 bottom-8 h-32 w-32 rounded-full bg-brand-accent/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
                CTA Penutup
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Punya Tugas, Proyek, atau Kebutuhan Digital yang Perlu Dibantu?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Konsultasikan kebutuhanmu sekarang. Kami bantu cek detail, deadline, tingkat
                kesulitan, dan estimasi harga yang sesuai.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={buildWhatsAppLink()}
                  external
                  variant="light"
                  icon={MessageCircle}
                  ariaLabel="Hubungi WhatsApp"
                >
                  Hubungi WhatsApp
                </Button>
                <Button
                  href={INSTAGRAM_URL}
                  external
                  variant="ghost"
                  icon={Instagram}
                  ariaLabel="Kunjungi Instagram"
                >
                  Kunjungi Instagram
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Chat Konsultasi', icon: MessageCircle },
                { label: 'Dokumen Rapi', icon: FileText },
                { label: 'Support Digital', icon: Laptop },
                { label: 'Arahan Jelas', icon: MessageCircle },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/[0.15] bg-white/10 p-5 backdrop-blur"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.12]">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="font-semibold text-white">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
