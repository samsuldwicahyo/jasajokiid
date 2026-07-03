import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group fixed bottom-24 right-4 z-40 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-card sm:bottom-24 sm:right-6 md:bottom-8"
      aria-label="Konsultasi via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-brand-navy px-3 py-2 text-xs font-medium text-white opacity-0 shadow-card transition group-hover:opacity-100 lg:block">
        Konsultasi via WhatsApp
      </span>
    </motion.a>
  );
}

