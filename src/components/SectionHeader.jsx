export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-center text-center';

  return (
    <div className={`mb-10 flex flex-col gap-4 sm:mb-12 ${alignment} ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="max-w-3xl">
        <h2 className="text-balance text-3xl font-bold leading-tight text-brand-text sm:text-4xl lg:text-[2.7rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-brand-soft sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

