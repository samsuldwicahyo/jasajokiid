export const WHATSAPP_NUMBER = '6285876287565';
export const INSTAGRAM_HANDLE = '@jasajokiid.official';
export const INSTAGRAM_URL = 'https://instagram.com/jasajokiid.official';
export const CONTACT_EMAIL = 'jasajokiid.official@gmail.com';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Halo JasaJoki.id, saya ingin konsultasi kebutuhan layanan. Bisa dibantu?';

const cleanValue = (value) => {
  if (typeof value !== 'string') {
    return value ?? '-';
  }

  const trimmed = value.trim();
  return trimmed.length ? trimmed : '-';
};

export const buildWhatsAppLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;

export const buildEstimateMessage = (values) =>
  buildWhatsAppLink(`Halo JasaJoki.id, saya ingin konsultasi estimasi layanan.
Nama: ${cleanValue(values.name)}
Jenis layanan: ${cleanValue(values.service)}
Deadline: ${cleanValue(values.deadline)}
Detail kebutuhan: ${cleanValue(values.details)}
Budget: ${cleanValue(values.budget)}`);

export const buildContactMessage = (values) =>
  buildWhatsAppLink(`Halo JasaJoki.id, saya ingin konsultasi.
Nama: ${cleanValue(values.name)}
Nomor: ${cleanValue(values.phone)}
Layanan: ${cleanValue(values.service)}
Deadline: ${cleanValue(values.deadline)}
Detail: ${cleanValue(values.details)}
Budget: ${cleanValue(values.budget)}`);

