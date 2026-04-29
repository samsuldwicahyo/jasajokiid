import { services } from '../data/services';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="layanan" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Layanan"
          title="Layanan JasaJoki.id"
          description="Pilih layanan sesuai kebutuhanmu. Mulai dari proyek digital, desain, video, hingga pendampingan akademik."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

