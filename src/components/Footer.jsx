import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  buildWhatsAppLink,
} from '../utils/whatsapp';

const menuLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Cara Order', to: '/cara-order' },
  { label: 'Harga', to: '/harga' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Kontak', to: '/kontak' },
];

const serviceLinks = ['Website', 'Aplikasi', 'Skripsi', 'Makalah', 'Desain', 'Editing Video'];
const legalLinks = ['Kebijakan Privasi', 'Syarat Layanan', 'Disclaimer'];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white/90 py-14">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.9fr]">
          <div>
            <BrandLogo imageClassName="h-16 sm:h-[4.5rem]" />
            <p className="mt-5 max-w-md text-sm leading-8 text-brand-soft">
              Layanan bantuan digital dan pendampingan akademik yang membantu kebutuhan website,
              aplikasi, desain, video, dokumen, dan proyek secara rapi, cepat, dan sesuai arahan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">Menu</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link className="text-brand-text transition hover:text-brand-blue" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-brand-text">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Kontak
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-brand-text">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-brand-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp: {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-brand-blue"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-3 transition hover:text-brand-blue">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email: {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="legal"
          className="mt-12 flex flex-col gap-4 border-t border-brand-border pt-6 text-sm text-brand-soft lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div>(c) 2026 JasaJoki.id. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
