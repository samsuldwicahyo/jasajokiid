import { testimonials } from '../data/testimonials';
import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimoni"
          title="Apa Kata Mereka?"
          description="Beberapa testimoni berikut disusun secara natural untuk menggambarkan pengalaman konsultasi dan dukungan proyek yang rapi."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.role}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

