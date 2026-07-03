import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24 }}
      className="group h-full"
    >
      <div className="flex h-full flex-col rounded-[1.9rem] border border-brand-border bg-white p-7 shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-blue/40">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-card transition duration-300 group-hover:bg-brand-blue">
            <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-brand-text">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-brand-soft">{description}</p>
        <div className="mt-6">
          <Button
            to="/kontak"
            variant="outline"
            size="sm"
            icon={ArrowRight}
            ariaLabel={`Konsultasikan layanan ${title}`}
          >
            Konsultasi Layanan
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

