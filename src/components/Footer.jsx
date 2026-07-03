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
    <footer className="border-t border-white/10 bg-brand-navy py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.75fr_0.95fr]">
          <div>
            <BrandLogo
              imageClassName="h-16 sm:h-[4.5rem]"
              showTagline
              taglineClassName="text-slate-300"
            />
            <p className="mt-5 max-w-md text-sm leading-8 text-slate-300">
              Layanan bantuan digital dan pendampingan akademik profesional untuk kebutuhan
              website, aplikasi, desain, video, dokumen, dan dukungan proyek yang lebih terarah.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Menu</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link className="text-slate-300 transition hover:text-white" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Kontak
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-white"
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
                  className="inline-flex items-center gap-3 transition hover:text-white"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-3 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email: {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="legal"
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between"
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
