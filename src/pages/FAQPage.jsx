import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const description =
  'Pertanyaan umum seputar layanan JasaJoki.id, konsultasi, sistem harga, revisi, deadline, dan kebijakan layanan profesional.';
const keywords =
  'faq jasa digital, faq pendampingan akademik, revisi jasa website, deadline project digital';

export default function FAQPage() {
  return (
    <>
      <SEO title="FAQ | JasaJoki.id" description={description} keywords={keywords} />
      <PageHero
        eyebrow="FAQ"
        title="Temukan jawaban singkat sebelum memulai konsultasi"
        description="Jika masih ada pertanyaan lain, kamu bisa langsung hubungi kami melalui form kontak atau WhatsApp agar kebutuhanmu dicek lebih spesifik."
        primaryAction={{ to: '/kontak', label: 'Hubungi Tim' }}
        secondaryAction={{ to: '/cara-order', label: 'Lihat Cara Order' }}
        highlights={['Privasi', 'Revisi', 'Deadline']}
      />
      <FAQ variant="page" />
      <ContactForm />
      <CTASection />
    </>
  );
}

