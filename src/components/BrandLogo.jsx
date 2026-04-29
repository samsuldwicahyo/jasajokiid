import { Link } from 'react-router-dom';
import logo from '../assets/logo-jasajokiid.png';

const joinClasses = (...classes) => classes.filter(Boolean).join(' ');

export default function BrandLogo({
  className = '',
  imageClassName = '',
  showTagline = false,
  taglineClassName = '',
}) {
  return (
    <Link
      to="/"
      className={joinClasses('inline-flex flex-col items-start', className)}
      aria-label="JasaJoki.id"
    >
      <img
        src={logo}
        alt="Logo JasaJoki.id"
        className={joinClasses('h-11 w-auto sm:h-12', imageClassName)}
      />
      {showTagline ? (
        <span
          className={joinClasses(
            'mt-1 text-xs font-medium text-brand-soft',
            taglineClassName,
          )}
        >
          Solusi Bantuan Digital & Akademik Terpercaya
        </span>
      ) : null}
    </Link>
  );
}

