import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const variants = {
  primary:
    'bg-brand-navy text-white shadow-glow hover:bg-brand-navy/95',
  secondary:
    'bg-brand-blue text-white shadow-card hover:bg-sky-500',
  outline:
    'border border-brand-border bg-white text-brand-text hover:border-brand-blue hover:text-brand-blue',
  ghost:
    'bg-white/10 text-white backdrop-blur hover:bg-white/20',
  light:
    'bg-white text-brand-navy hover:bg-slate-100',
};

const sizes = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-12 px-5 text-sm sm:text-base',
  lg: 'h-14 px-6 text-base',
};

const joinClasses = (...classes) => classes.filter(Boolean).join(' ');

function Content({ children, icon: Icon }) {
  return (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  ariaLabel,
  fullWidth = false,
  external = false,
  type = 'button',
  ...props
}) {
  const classes = joinClasses(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };

  if (to) {
    return (
      <MotionLink to={to} className={classes} aria-label={ariaLabel} {...motionProps} {...props}>
        <Content icon={icon}>{children}</Content>
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        <Content icon={icon}>{children}</Content>
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} aria-label={ariaLabel} {...motionProps} {...props}>
      <Content icon={icon}>{children}</Content>
    </motion.button>
  );
}

