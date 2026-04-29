import { useState } from 'react';
import { faqs } from '../data/faqs';
import FAQItem from './FAQItem';
import SectionHeader from './SectionHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-anchor py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Jika ada kebutuhan yang belum tercakup, kamu tetap bisa konsultasi dulu agar kami bantu cek ruang lingkupnya."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

