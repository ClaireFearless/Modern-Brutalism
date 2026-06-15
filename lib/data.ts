// =========================================================
// SEMUA KONTEN PORTFOLIO ADA DI SINI.
// =========================================================

export const profile = {
  name: "Ony Juna",
  logo: "Ony",
  logoSuffix: ".DEV",
  status: "/ STATUS: AVAILABLE",
  role: 'Mahasiswa Informatika & <span class="accent">Tech Enthusiast</span> — fokus pada Pengembangan Web.',
  email: "onyjepe@gmail.com",
};

export const marqueeItems = [
  "OPEN FOR INTERNSHIP",
  "WEB DEVELOPER",
  "BASED IN INDONESIA",
  "TECH ENTHUSIAST",
];

export const terminalLines = [
  { prompt: "whoami", output: "Ony as Claire" },
  { prompt: "cat role.txt", output: "Tech Enthusiast & Web Developer" },
  { prompt: "ls languages/", output: "JavaScript PHP Python" },

  { prompt: "status --check", output: "[OK] Available for internship & freelance" },
];

export const stats = [
  { num: "12+", label: "Project Selesai" },
  { num: "2", label: "Magang & Freelance" },
  { num: "6", label: "Semester Berjalan" },
  { num: "∞", label: "Cangkir Kopi Susu" },
];

export const aboutParagraphs = [
  "Sebagian orang melihat bug sebagai masalah. Aku melihatnya sebagai side quest yang harus diselesaikan sebelum lanjut ke cerita utama.",
  "Hari-hariku biasanya diisi dengan Next.js, Laravel, dan secangkir kopi. Kadang membuat fitur baru, kadang memperbaiki yang lama, dan kadang garuk kepala hanya untuk mencari satu titik koma yang hilang."
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Frameworks",
    skills: [
      "Next.js",
      "Laravel",
      "CodeIgniter4",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git / GitHub",
      "Docker",
      "Xampp",
      "Vercel",
      "Linux",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    title: "Development Tools",
    skills: ["VSCode", "Terminal", "Windows OS", "Arch Linux"],
  },
  {
    title: "Other Skills",
    skills: [
      "REST API",
      "Responsive Design",
      "Problem Solving",
      "AI Engineering",
    ],
  },
];

export const projects = [
  {
    number: "01",
    fileName: "Photography.tsx",
    title: "Sides Photography (On-Going)",
    description:
      "Website portfolio fotografi untuk menampilkan galeri karya, layanan, dan informasi kontak Sides Photography dalam tampilan yang responsif dan mudah diakses.",
    tags: ["Laravel", "PHP", "Tailwind", "Framer Motion"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    number: "02",
    fileName: "Dashboard.tsx",
    title: "Enggal Jaya Catering",
    description:
      "Membuat website company profile Enggal Jaya Catering menggunakan Next.js untuk menampilkan informasi perusahaan, layanan, dan portofolio catering.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React"],
    demoUrl: "https://enggaljaya.vercel.app",
    codeUrl: "https://github.com/ClaireFearless/Enggal-Jaya",
  },
  {
    number: "03",
    fileName: "Honkai.tsx",
    title: "Honkai Star Rail Profile",
    description:
      "Aplikasi chat real-time dengan room privat & publik, indikator status mengetik, dan notifikasi instan menggunakan WebSocket.",
    tags: ["React", "Node.js", "Express", "Tailwind"],
    demoUrl: "https://sparkle-profile.vercel.app/",
    codeUrl: "https://github.com/ClaireFearless/sparkle-profile",
  },
  {
    number: "04",
    fileName: "MyKisah.tsx",
    title: "Digital Wedding Invitation",
    description:
      "Website undangan pernikahan My Bini My Beloved dengan animasi interaktif dan penuh cinta.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demoUrl: "https://my-ye-shunguang.vercel.app/",
    codeUrl: "https://github.com/ClaireFearless/my-kisah",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const experience = [
  {
    year: "2023—Now",
    title: "S1 Informatika",
    description:
  "Mengembangkan pemahaman di bidang rekayasa perangkat lunak dan sistem terdistribusi, serta aktif mengeksplorasi web development, AI, dan teknologi modern.",
    tag: "Pendidikan",
  },
  {
    year: "2025",
    title: "Workshop Hosting untuk Pemula",
    description:
    "Mempelajari konsep dasar hosting website, deployment aplikasi web, dan pengelolaan layanan hosting.",
  tag: "Workshop",
  },
  {
    year: "2024",
    title: "CV Enggal Jaya Intern",
    description:
      "Berkontribusi dalam pengembangan website company profile perusahaan menggunakan Next.js, mulai dari implementasi antarmuka hingga optimasi performa.",
    tag: "Magang",
  },
  {
  year: "2023",
  title: "IT Staff",
  description:
    "Bertanggung jawab dalam pemeliharaan perangkat komputer, instalasi software, serta membantu penyelesaian masalah teknis di lingkungan kerja.",
  tag: "Work",
}
];

export const socials = [
  { label: "GitHub", href: "https://github.com/ClaireFearless" },
  { label: "Instagram", href: "https://www.instagram.com/hi.onyyxz" },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=onyjepe@gmail.com"}
];

export const footerText = "© 2026 Ony Juna — Built with Next.js";
