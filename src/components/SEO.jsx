import { useEffect } from 'react';

function upsertMeta(selector, attribute, value) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, selector.includes('property=') ? selector.match(/"(.*)"/)?.[1] ?? '' : selector.match(/"(.*)"/)?.[1] ?? '');
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', value);
}

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta =
      document.querySelector('meta[name="description"]') || document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.setAttribute('content', description);
    if (!descriptionMeta.parentNode) {
      document.head.appendChild(descriptionMeta);
    }

    const keywordsMeta =
      document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywordsMeta.setAttribute('name', 'keywords');
    keywordsMeta.setAttribute('content', keywords);
    if (!keywordsMeta.parentNode) {
      document.head.appendChild(keywordsMeta);
    }

    upsertMeta('meta[property="og:title"]', 'property', title);
    upsertMeta('meta[property="og:description"]', 'property', description);
  }, [title, description, keywords]);

  return null;
}

