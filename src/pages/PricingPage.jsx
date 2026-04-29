import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import SEO from '../components/SEO';

const description =
  'Sistem harga JasaJoki.id dibuat fleksibel sesuai jenis layanan, deadline, revisi, dan kompleksitas proyek digital maupun akademik.';
const keywords =
  'harga jasa website, harga desain grafis, estimasi jasa video, pendampingan akademik, konsultasi harga proyek digital';

export default function PricingPage() {
  return (
    <>
      <SEO title="Harga | JasaJoki.id" description={description} keywords={keywords} />
      <PageHero
        eyebrow="Harga Fleksibel"
        title="Estimasi harga disusun berdasarkan kebutuhan yang benar-benar kamu butuhkan"
        description="Tidak semua project punya ruang lingkup yang sama. Karena itu, harga akan menyesuaikan tingkat kesulitan, deadline, revisi, dan detail teknis yang diberikan."
        primaryAction={{ to: '/kontak', label: 'Konsultasi Harga' }}
        secondaryAction={{ to: '/layanan', label: 'Lihat Layanan' }}
      />
      <Pricing />
      <Portfolio />
      <FAQ />
      <CTASection />
    </>
  );
}

