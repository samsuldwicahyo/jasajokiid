import { Home, LayoutGrid, MessageCircle, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  { label: 'Beranda', to: '/', icon: Home },
  { label: 'Layanan', to: '/layanan', icon: LayoutGrid },
  { label: 'Pesan', to: '/cara-order', icon: ShoppingCart },
  { label: 'Kontak', to: '/kontak', icon: MessageCircle },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white/95 px-4 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around gap-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              [
                'flex min-w-[72px] flex-col items-center justify-center rounded-xl px-3 py-2 text-[10px] font-semibold transition duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
                isActive
                  ? 'bg-brand-blue/12 text-brand-navy'
                  : 'text-brand-soft hover:bg-slate-100 hover:text-brand-text',
              ].join(' ')
            }
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
