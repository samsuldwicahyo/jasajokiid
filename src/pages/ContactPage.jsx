import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const description =
  'Hubungi JasaJoki.id untuk konsultasi kebutuhan website, aplikasi, desain, video, dokumen akademik, dan dukungan proyek digital.';
const keywords =
  'kontak jasa website, konsultasi whatsapp, contact jasa desain, layanan bantuan digital';

export default function ContactPage() {
  return (
    <>
      <SEO title="Kontak | JasaJoki.id" description={description} keywords={keywords} />
      <PageHero
        eyebrow="Kontak"
        title="Mulai dari konsultasi yang jelas dan profesional"
        description="Kirim detail kebutuhan, deadline, dan arahan yang sudah ada. Tim JasaJoki.id akan membantu mengecek ruang lingkup serta estimasi pengerjaannya."
        primaryAction={{ to: '/layanan', label: 'Lihat Layanan' }}
        secondaryAction={{ to: '/harga', label: 'Cek Harga Fleksibel' }}
        highlights={['WhatsApp Cepat', 'Form Terstruktur', 'Privasi Dijaga']}
      />
      <ContactForm />
      <CTASection />
    </>
  );
}
