import { whyChooseItems } from '../data/services';
import FeatureCard from './FeatureCard';
import SectionHeader from './SectionHeader';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <SectionHeader
            eyebrow="Keunggulan"
            title="Kenapa memilih JasaJoki.id?"
            description="Layanan dibangun agar terasa lebih kredibel, komunikatif, aman, dan mudah dipahami sejak konsultasi awal sampai hasil akhir."
            align="left"
            className="mb-0"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyChooseItems.map((item) => (
              <FeatureCard
                key={item.title}
                {...item}
                className="group hover:border-brand-blue/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

