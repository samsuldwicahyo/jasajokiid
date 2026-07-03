import { useState } from 'react';
import { faqs } from '../data/faqs';
import FAQItem from './FAQItem';
import SectionHeader from './SectionHeader';

const categories = ['Umum', 'Privasi', 'Revisi', 'Deadline', 'Layanan'];

export default function FAQ({ variant = 'preview', limit = 4 }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState('');

  const filteredFaqs =
    variant === 'page'
      ? faqs.filter((item) => {
          const value = query.trim().toLowerCase();
          if (!value) return true;
          return (
            item.question.toLowerCase().includes(value) ||
            item.answer.toLowerCase().includes(value)
          );
        })
      : faqs.slice(0, limit);

  return (
    <section
      id="faq"
      className={`section-anchor py-20 sm:py-24 ${variant === 'page' ? 'bg-slate-50/80' : ''}`}
    >
      <div className="section-shell">
        {variant === 'page' ? (
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeader
                eyebrow="FAQ"
                title="Pusat bantuan dan pertanyaan umum"
                description="Cari topik yang paling relevan sebelum memulai konsultasi. Jika belum menemukan jawaban yang cocok, tim kami tetap bisa membantu lewat WhatsApp."
                align="left"
              />
              <div className="rounded-[1.75rem] border border-brand-border bg-white p-4 shadow-card">
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari pertanyaan..."
                  className="w-full rounded-2xl border border-brand-border px-4 py-3 text-sm"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
              {!filteredFaqs.length ? (
                <div className="rounded-[1.75rem] border border-brand-border bg-white p-6 text-sm text-brand-soft shadow-card">
                  Tidak ada hasil yang cocok untuk pencarian ini.
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <>
            <SectionHeader
              eyebrow="FAQ"
              title="Pertanyaan yang Sering Diajukan"
              description="Jika ada kebutuhan yang belum tercakup, kamu tetap bisa konsultasi dulu agar kami bantu cek ruang lingkupnya."
            />

            <div className="mx-auto max-w-4xl space-y-4">
              {filteredFaqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

