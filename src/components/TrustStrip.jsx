const trustItems = [
  'Mahasiswa & Pelajar',
  'Pekerja Profesional',
  'Pelaku UMKM',
  'Tim Kreatif',
  'Project Digital',
  'Pendampingan Akademik',
];

export default function TrustStrip() {
  return (
    <section className="border-y border-brand-border/60 bg-slate-50/80 py-10">
      <div className="section-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-soft">
          Dipakai untuk berbagai kebutuhan
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-text shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
