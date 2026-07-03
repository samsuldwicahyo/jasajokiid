import CTASection from '../components/CTASection';
import FeaturedServices from '../components/FeaturedServices';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

const description =
  'Lihat layanan JasaJoki.id untuk website, aplikasi, desain grafis, editing video, dokumen akademik, dan support proyek digital yang fleksibel.';
const keywords =
  'layanan jasa website, layanan desain grafis, editing video, pendampingan akademik, support proyek digital';

export default function ServicesPage() {
  return (
    <>
      <SEO title="Layanan | JasaJoki.id" description={description} keywords={keywords} />
      <PageHero
        eyebrow="Halaman Layanan"
        title="Layanan profesional yang rapi, fleksibel, dan sesuai arahan"
        description="Mulai dari pengembangan website dan aplikasi, desain visual, editing video, hingga pendampingan akademik yang berfokus pada arahan, struktur, dan support teknis."
        primaryAction={{ to: '/kontak', label: 'Konsultasi Sekarang' }}
        secondaryAction={{ to: '/harga', label: 'Lihat Sistem Harga' }}
        highlights={['Website & Aplikasi', 'Dokumen Akademik', 'Desain & Multimedia']}
      />
      <Services />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

