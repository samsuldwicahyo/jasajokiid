import { services } from '../data/services';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

const serviceChips = ['Website', 'Aplikasi', 'Skripsi', 'Jurnal', 'Desain', 'Video'];

export default function Services() {
  return (
    <section id="layanan" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Layanan"
          title="Katalog layanan digital dan akademik"
          description="Pilih layanan sesuai kebutuhan. Mulai dari pengembangan website, aplikasi, desain visual, video, hingga pendampingan dokumen dan proyek akademik."
        />
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {serviceChips.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-brand-border bg-white px-4 py-5 text-center text-sm font-semibold text-brand-text shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

