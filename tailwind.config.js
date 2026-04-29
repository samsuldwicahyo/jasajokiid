/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071B3A',
          blue: '#0EA5E9',
          accent: '#F59E0B',
          bg: '#F8FAFC',
          text: '#0F172A',
          soft: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 64px -30px rgba(15, 23, 42, 0.24)',
        glow: '0 30px 100px -30px rgba(7, 27, 58, 0.4)',
      },
      backgroundImage: {
        'navy-gradient':
          'linear-gradient(135deg, #071B3A 0%, #0B2D63 55%, #0EA5E9 100%)',
        'hero-glow':
          'radial-gradient(circle at top, rgba(14,165,233,0.24), transparent 38%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.16), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

