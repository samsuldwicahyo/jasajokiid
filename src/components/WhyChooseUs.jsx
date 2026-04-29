import { whyChooseItems } from '../data/services';
import FeatureCard from './FeatureCard';
import SectionHeader from './SectionHeader';

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Keunggulan"
          title="Kenapa Memilih JasaJoki.id?"
          description="Setiap layanan dibangun untuk tetap kredibel, komunikatif, dan realistis sesuai kebutuhan klien."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseItems.map((item) => (
            <FeatureCard key={item.title} {...item} className="group hover:border-brand-blue/40" />
          ))}
        </div>
      </div>
    </section>
  );
}

