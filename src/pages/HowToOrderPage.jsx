import CTASection from '../components/CTASection';
import HowToOrder from '../components/HowToOrder';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

const description =
  'Pelajari alur order di JasaJoki.id mulai dari konsultasi awal, pengecekan kebutuhan, estimasi harga, hingga review dan revisi.';
const keywords =
  'cara order jasa digital, konsultasi whatsapp, alur pemesanan jasa website, support proyek akademik';

export default function HowToOrderPage() {
  return (
    <>
      <SEO title="Cara Order | JasaJoki.id" description={description} keywords={keywords} />
      <PageHero
        eyebrow="Cara Order"
        title="Alur pemesanan dibuat sederhana dan jelas"
        description="Kamu bisa mulai dari konsultasi singkat, lalu kami bantu cek ruang lingkup, deadline, dan estimasi pengerjaan sebelum project berjalan."
        primaryAction={{ to: '/kontak', label: 'Mulai Konsultasi' }}
        secondaryAction={{ to: '/faq', label: 'Baca FAQ' }}
      />
      <HowToOrder />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

