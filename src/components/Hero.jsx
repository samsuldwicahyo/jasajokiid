import { motion } from 'framer-motion';
import {
  BarChart3,
  CheckCheck,
  FileText,
  Laptop,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { heroBadges, heroStats } from '../data/services';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,244,255,0.9),rgba(248,250,252,0.96),rgba(255,255,255,1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.1),transparent_32%)]" />
      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            <span className="eyebrow">Partner Akademik Premium</span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-brand-text sm:text-5xl lg:text-[3.65rem]">
              Solusi Bantuan Digital & Akademik Terpercaya
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-soft sm:text-lg lg:mx-0">
              Tuntaskan kebutuhan website, aplikasi, desain, dokumen akademik, dan proyek digital
              bersama tim yang komunikatif, terarah, dan fokus pada hasil yang rapi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button to="/kontak" ariaLabel="Konsultasi Sekarang">
                Konsultasi Sekarang
              </Button>
              <Button to="/layanan" variant="outline" ariaLabel="Lihat Layanan">
                Lihat Layanan
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {heroBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/80 px-4 py-2 text-sm text-brand-text shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-left sm:grid-cols-4">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-brand-border bg-white/85 p-4 shadow-sm"
                >
                  <div className="text-lg font-bold text-brand-navy">{item.value}</div>
                  <div className="mt-1 text-sm leading-6 text-brand-soft">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative mx-auto w-full max-w-2xl"
            aria-hidden="true"
          >
            <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-brand-accent/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel soft-grid relative overflow-hidden rounded-[2rem] p-5 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    Project Support
                  </div>
                  <div className="mt-2 text-xl font-bold text-brand-text">Dashboard Konsultasi</div>
                </div>
                <div className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                  Fast Response
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.6rem] bg-brand-navy p-5 text-white shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.12]">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Website & Digital Support</div>
                      <div className="text-sm text-slate-300">Rapi, fleksibel, dan sesuai brief</div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl bg-white/[0.08] p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Landing page bisnis</span>
                        <span className="text-emerald-300">Ready</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-4/5 rounded-full bg-brand-blue" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.08] p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Support dokumen akademik</span>
                        <span className="text-amber-300">Review</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-3/5 rounded-full bg-brand-accent" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.4rem] border border-brand-border bg-white p-5 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-text">Chat & Brief</div>
                        <div className="text-sm text-brand-soft">Konsultasi dulu sebelum mulai</div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-brand-soft">
                      Ceritakan kebutuhan, deadline, dan file pendukungnya. Tim akan bantu cek ruang
                      lingkup dan estimasi awal.
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-brand-border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-brand-text">Checklist Progress</div>
                      <CheckCheck className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-brand-soft">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        Privasi file dijaga
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-brand-blue" />
                        Detail kebutuhan dirapikan
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-4 w-4 text-brand-accent" />
                        Alur pengerjaan transparan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-brand-border bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    Support
                  </div>
                  <div className="mt-2 text-lg font-bold text-brand-text">Editing & Formatting</div>
                  <p className="mt-2 text-sm leading-7 text-brand-soft">
                    Cocok untuk perapian makalah, artikel, jurnal, presentasi, dan struktur laporan.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-brand-border bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                    Badge
                  </div>
                  <div className="mt-2 text-lg font-bold text-brand-text">Project Support</div>
                  <p className="mt-2 text-sm leading-7 text-brand-soft">
                    Pendekatan fleksibel untuk kebutuhan digital, kreatif, dan pendampingan akademik.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-6 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-card"
            >
              Fast Response
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 left-6 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-card"
            >
              Project Support
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
