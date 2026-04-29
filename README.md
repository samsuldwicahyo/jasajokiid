# JasaJoki.id

Website React + Vite untuk brand **JasaJoki.id** dengan tampilan profesional, modern, mobile-first, dan siap produksi.

## Stack

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React
- React Hook Form

## Install

```bash
npm install
npm run dev
```

## Package utama

```bash
npm install react react-dom react-router-dom framer-motion lucide-react react-hook-form
npm install -D vite @vitejs/plugin-react-swc tailwindcss postcss autoprefixer
```

## Struktur

```text
src/
  assets/
    team-collaboration.svg
  components/
    About.jsx
    Button.jsx
    ContactForm.jsx
    CTASection.jsx
    FAQ.jsx
    FAQItem.jsx
    FeaturedServices.jsx
    FloatingWhatsApp.jsx
    Footer.jsx
    Hero.jsx
    HowToOrder.jsx
    Navbar.jsx
    PageHero.jsx
    Portfolio.jsx
    Pricing.jsx
    PricingFactorCard.jsx
    ProblemSection.jsx
    SectionHeader.jsx
    SEO.jsx
    ServiceCard.jsx
    Services.jsx
    StepCard.jsx
    TestimonialCard.jsx
    Testimonials.jsx
    WhyChooseUs.jsx
  data/
    faqs.js
    services.js
    testimonials.js
  pages/
    ContactPage.jsx
    FAQPage.jsx
    Home.jsx
    HowToOrderPage.jsx
    PricingPage.jsx
    ServicesPage.jsx
  utils/
    whatsapp.js
  App.jsx
  index.css
  main.jsx
```

## Route

- `/`
- `/layanan`
- `/cara-order`
- `/harga`
- `/faq`
- `/kontak`

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

### Netlify

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```
