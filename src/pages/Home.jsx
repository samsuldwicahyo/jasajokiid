import About from '../components/About';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import FeaturedServices from '../components/FeaturedServices';
import Hero from '../components/Hero';
import HowToOrder from '../components/HowToOrder';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import ProblemSection from '../components/ProblemSection';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

const description =
  'JasaJoki.id membantu kebutuhan website, aplikasi, desain grafis, editing video, dokumen akademik, makalah, jurnal, skripsi, dan proyek digital secara rapi, cepat, dan sesuai arahan.';
const keywords =
  'JasaJoki.id, bantuan digital, pendampingan akademik, jasa website, jasa aplikasi, desain grafis, editing video, konsultasi skripsi, bantuan makalah, jasa tugas, proyek digital, bantuan mahasiswa, bantuan pelajar';

export default function Home() {
  return (
    <>
      <SEO
        title="JasaJoki.id | Solusi Bantuan Digital & Akademik Terpercaya"
        description={description}
        keywords={keywords}
      />
      <Hero />
      <ProblemSection />
      <About />
      <Services />
      <FeaturedServices />
      <WhyChooseUs />
      <HowToOrder />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <CTASection />
    </>
  );
}

