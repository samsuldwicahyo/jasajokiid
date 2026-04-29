import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import Button from './Button';

const navigation = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Cara Order', to: '/cara-order' },
  { label: 'Harga', to: '/harga' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Kontak', to: '/kontak' },
];

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition',
    isActive ? 'bg-brand-navy text-white' : 'text-brand-text hover:bg-white/70',
  ].join(' ');

function BrandMark() {
  return <BrandLogo className="shrink-0" imageClassName="h-12 sm:h-14" />;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell pt-4">
        <div
          className={[
            'flex items-center justify-between rounded-[1.5rem] border px-4 py-3 transition duration-300 sm:px-5',
            isScrolled
              ? 'border-white/60 bg-white/[0.78] shadow-card backdrop-blur-xl'
              : 'border-transparent bg-white/[0.45] backdrop-blur-lg',
          ].join(' ')}
        >
          <BrandMark />

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Navigasi utama">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/kontak" size="sm" ariaLabel="Konsultasi">
              Konsultasi
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-navy/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-card"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <BrandMark />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border"
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-1 flex-col gap-2" aria-label="Navigasi mobile">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      [
                        'rounded-2xl px-4 py-3 text-base font-medium transition',
                        isActive
                          ? 'bg-brand-navy text-white'
                          : 'bg-slate-50 text-brand-text hover:bg-slate-100',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <Button to="/kontak" fullWidth ariaLabel="Konsultasi">
                Konsultasi
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
