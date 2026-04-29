import {
  AlarmClock,
  BookOpen,
  Briefcase,
  CheckCheck,
  Clipboard,
  Clock3,
  Code2,
  Compass,
  FileText,
  Files,
  Globe,
  GraduationCap,
  MessageCircle,
  Monitor,
  Palette,
  RefreshCw,
  School,
  ShieldCheck,
  Sparkles,
  Video,
  Wallet,
  Wrench,
  Users,
  Layers3,
} from 'lucide-react';

export const heroBadges = [
  { label: 'Harga Bersaing', icon: Wallet },
  { label: 'Pengerjaan Rapi', icon: CheckCheck },
  { label: 'Bisa Konsultasi Dulu', icon: MessageCircle },
  { label: 'Revisi Sesuai Kesepakatan', icon: RefreshCw },
];

export const heroStats = [
  { value: '10+', label: 'Jenis Layanan' },
  { value: '3 Langkah', label: 'Konsultasi Awal' },
  { value: 'Fleksibel', label: 'Sesuai Deadline' },
  { value: 'Digital & Akademik', label: 'Support Proyek' },
];

export const audienceProblems = [
  {
    title: 'Deadline semakin dekat',
    description:
      'Pekerjaan menumpuk sementara waktu belajar, kerja, atau produksi konten tetap berjalan.',
    icon: AlarmClock,
  },
  {
    title: 'Bingung mulai dari mana',
    description:
      'Butuh arahan awal agar struktur pekerjaan, alur pengerjaan, dan prioritas jadi lebih jelas.',
    icon: Compass,
  },
  {
    title: 'Butuh bantuan teknis',
    description:
      'Ada kendala di bagian website, aplikasi, presentasi, desain, atau proses editing dokumen.',
    icon: Wrench,
  },
  {
    title: 'Perlu desain atau website yang rapi',
    description:
      'Tampilan visual dan presentasi digital perlu disusun lebih profesional dan enak dilihat.',
    icon: Monitor,
  },
  {
    title: 'Dokumen perlu dirapikan',
    description:
      'Format, struktur, referensi, atau layout dokumen masih belum sesuai kebutuhan dan standar.',
    icon: Files,
  },
  {
    title: 'Waktu terbatas',
    description:
      'Sekolah, kuliah, kerja, dan proyek pribadi sering membuat proses pengerjaan tidak maksimal.',
    icon: Clock3,
  },
];

export const services = [
  {
    title: 'Pembuatan Website',
    description:
      'Bantu pembuatan website company profile, landing page, toko online sederhana, portfolio, dan kebutuhan web lainnya.',
    icon: Globe,
  },
  {
    title: 'Pembuatan Aplikasi',
    description:
      'Support pembuatan aplikasi berbasis web atau mobile sesuai kebutuhan, flow, dan fitur yang diperlukan.',
    icon: Code2,
  },
  {
    title: 'Pendampingan Skripsi',
    description:
      'Bantu arahan, struktur, perapian format, konsultasi alur, dan support teknis dokumen skripsi sesuai ketentuan.',
    icon: GraduationCap,
  },
  {
    title: 'Makalah & Artikel',
    description:
      'Bantu penyusunan struktur, perapian dokumen, referensi, dan format penulisan agar lebih rapi dan terarah.',
    icon: FileText,
  },
  {
    title: 'Konsultasi Jurnal',
    description:
      'Support pencarian arah pembahasan, struktur artikel, format jurnal, dan perapian dokumen.',
    icon: BookOpen,
  },
  {
    title: 'Desain Grafis',
    description:
      'Bantu desain poster, feed Instagram, banner, presentasi, logo sederhana, dan kebutuhan visual lainnya.',
    icon: Palette,
  },
  {
    title: 'Editing Video',
    description:
      'Bantu editing video promosi, tugas, konten pendek, reels, presentasi, dan kebutuhan multimedia.',
    icon: Video,
  },
  {
    title: 'Animasi 2D/3D',
    description:
      'Support animasi sederhana untuk presentasi, konten edukasi, promosi, dan kebutuhan visual kreatif.',
    icon: Sparkles,
  },
  {
    title: 'Proyek Sekolah/Kuliah',
    description:
      'Pendampingan pengerjaan proyek sesuai arahan, materi, dan kebutuhan teknis.',
    icon: School,
  },
  {
    title: 'Proyek Pekerjaan',
    description:
      'Bantu kebutuhan presentasi, dokumen, desain, website, laporan, atau proyek digital untuk pekerjaan.',
    icon: Briefcase,
  },
  {
    title: 'Tugas Umum',
    description:
      'Layanan fleksibel untuk kebutuhan lain yang bisa didiskusikan terlebih dahulu melalui konsultasi.',
    icon: Clipboard,
  },
];

export const featuredServices = [
  {
    title: 'Pembuatan Website',
    description:
      'Cocok untuk brand, usaha, portfolio pribadi, atau campaign digital yang perlu tampil rapi, cepat diakses, dan mudah dipresentasikan.',
    icon: Globe,
    features: [
      'Landing page',
      'Company profile',
      'Portfolio',
      'Website bisnis',
      'Website promosi',
      'Responsive mobile',
    ],
  },
  {
    title: 'Pendampingan Skripsi',
    description:
      'Fokus pada struktur, formatting, arahan bab, dan support teknis dokumen agar proses pengerjaan lebih terarah dan siap direview.',
    icon: GraduationCap,
    features: [
      'Konsultasi struktur',
      'Perapian format',
      'Arahan bab',
      'Editing dokumen',
      'Support referensi',
      'Revisi sesuai arahan',
    ],
  },
  {
    title: 'Desain Grafis',
    description:
      'Layanan visual untuk konten sosial media, materi promosi, dan kebutuhan presentasi yang ingin terlihat lebih premium dan profesional.',
    icon: Palette,
    features: [
      'Feed Instagram',
      'Poster',
      'Banner',
      'Presentasi',
      'Logo sederhana',
      'Brand visual',
    ],
  },
  {
    title: 'Editing Video',
    description:
      'Membantu proses edit video agar lebih rapi, singkat, enak ditonton, dan sesuai kebutuhan tugas, promosi, atau konten.',
    icon: Video,
    features: [
      'Reels',
      'Video promosi',
      'Video tugas',
      'Subtitle',
      'Cut-to-cut',
      'Motion sederhana',
    ],
  },
  {
    title: 'Pembuatan Aplikasi',
    description:
      'Support pengembangan aplikasi sederhana dengan alur yang jelas, tampilan bersih, dan dokumentasi penggunaan yang mudah dipahami.',
    icon: Code2,
    features: [
      'Web app',
      'Dashboard sederhana',
      'UI flow',
      'Fitur dasar',
      'Integrasi sederhana',
      'Dokumentasi penggunaan',
    ],
  },
];

export const whyChooseItems = [
  {
    title: 'Harga Bersaing',
    description:
      'Estimasi harga disesuaikan dengan tingkat kesulitan, deadline, dan kebutuhan.',
    icon: Wallet,
  },
  {
    title: 'Pengerjaan Rapi',
    description:
      'Setiap proyek dikerjakan mengikuti arahan dan format yang disepakati.',
    icon: CheckCheck,
  },
  {
    title: 'Bisa Konsultasi Dulu',
    description:
      'Kamu bisa menjelaskan kebutuhan terlebih dahulu sebelum memutuskan order.',
    icon: MessageCircle,
  },
  {
    title: 'Fleksibel Sesuai Deadline',
    description:
      'Deadline akan dicek terlebih dahulu agar pengerjaan tetap realistis.',
    icon: Clock3,
  },
  {
    title: 'Revisi Sesuai Kesepakatan',
    description:
      'Revisi mengikuti detail layanan dan kesepakatan awal.',
    icon: RefreshCw,
  },
  {
    title: 'Cocok untuk Banyak Kebutuhan',
    description:
      'Mulai dari pelajar, mahasiswa, pekerja, hingga bisnis kecil.',
    icon: Users,
  },
  {
    title: 'Privasi File Dijaga',
    description:
      'File dan detail kebutuhan klien diproses secara tertutup dan tidak dipublikasikan.',
    icon: ShieldCheck,
  },
  {
    title: 'Komunikasi Mudah',
    description:
      'Diskusi bisa dilakukan melalui WhatsApp atau Instagram.',
    icon: MessageCircle,
  },
];

export const orderSteps = [
  {
    title: 'Hubungi Admin',
    description: 'Klik tombol WhatsApp atau kirim DM Instagram.',
    icon: MessageCircle,
  },
  {
    title: 'Kirim Detail Kebutuhan',
    description: 'Jelaskan jenis layanan, deadline, file, format, dan arahan.',
    icon: FileText,
  },
  {
    title: 'Cek Tingkat Kesulitan',
    description: 'Tim akan meninjau kebutuhan dan kompleksitas proyek.',
    icon: Layers3,
  },
  {
    title: 'Dapat Estimasi Harga',
    description: 'Harga diberikan berdasarkan detail pekerjaan.',
    icon: Wallet,
  },
  {
    title: 'Proses Pengerjaan',
    description: 'Pengerjaan dimulai sesuai kesepakatan.',
    icon: Code2,
  },
  {
    title: 'Review & Revisi',
    description: 'Hasil bisa direview dan direvisi sesuai ketentuan awal.',
    icon: RefreshCw,
  },
  {
    title: 'Selesai',
    description: 'File atau hasil akhir dikirim sesuai format yang disepakati.',
    icon: CheckCheck,
  },
];

export const pricingFactors = [
  {
    title: 'Jenis layanan',
    description: 'Website, aplikasi, desain, video, dokumen, atau support proyek.',
    icon: Layers3,
  },
  {
    title: 'Tingkat kesulitan',
    description: 'Semakin detail dan teknis, estimasi akan menyesuaikan.',
    icon: Wrench,
  },
  {
    title: 'Deadline',
    description: 'Urgensi waktu ikut mempengaruhi alur dan prioritas pengerjaan.',
    icon: Clock3,
  },
  {
    title: 'Jumlah revisi',
    description: 'Ruang revisi dihitung dari kesepakatan awal.',
    icon: RefreshCw,
  },
  {
    title: 'Banyaknya halaman/fitur',
    description: 'Volume kerja berdampak pada estimasi waktu dan harga.',
    icon: FileText,
  },
  {
    title: 'Format pengerjaan',
    description: 'Kebutuhan file, template, style, atau output akhir tertentu.',
    icon: Files,
  },
  {
    title: 'Kompleksitas desain/teknis',
    description: 'Visual, interaksi, ataupun kebutuhan coding akan dicek lebih dulu.',
    icon: Monitor,
  },
];

export const portfolioItems = [
  {
    title: 'Website Company Profile',
    category: 'Website',
    description: 'Landing page profesional untuk usaha, profil tim, dan informasi layanan.',
    badge: 'Business Web',
  },
  {
    title: 'Landing Page Produk',
    category: 'Digital Campaign',
    description: 'Halaman promosi yang fokus pada CTA, copy, dan tampilan visual.',
    badge: 'Conversion Ready',
  },
  {
    title: 'Desain Feed Instagram',
    category: 'Desain',
    description: 'Visual feed yang konsisten untuk promosi, edukasi, atau branding.',
    badge: 'Social Content',
  },
  {
    title: 'Perapian Dokumen Skripsi',
    category: 'Akademik',
    description: 'Formatting bab, daftar isi, referensi, dan layout dokumen agar lebih rapi.',
    badge: 'Academic Support',
  },
  {
    title: 'Editing Video Reels',
    category: 'Video',
    description: 'Edit konten pendek yang ringkas, ritmis, dan sesuai brief.',
    badge: 'Short Form',
  },
  {
    title: 'Presentasi Profesional',
    category: 'Presentasi',
    description: 'Slide deck bersih untuk kelas, pitching, atau kebutuhan internal.',
    badge: 'Presentation',
  },
  {
    title: 'Makalah Terstruktur',
    category: 'Dokumen',
    description: 'Penyusunan alur penulisan, perapian format, dan layout dokumen.',
    badge: 'Structured Writing',
  },
  {
    title: 'Dashboard Aplikasi Sederhana',
    category: 'Aplikasi',
    description: 'Konsep dashboard untuk monitoring data, workflow, atau admin panel ringan.',
    badge: 'Web App',
  },
];

export const serviceOptions = services.map((service) => service.title);

