# Portfolio — Modern Brutalism Next.Js (On-Progress)

Portfolio dengan tema **modern brutalism** hitam & putih, dibangun dengan Next.js App Router + TypeScript.

## Struktur Project

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx      → setup font (Space Grotesk + JetBrains Mono) & metadata
│   ├── page.tsx         → menyusun semua section/komponen
│   └── globals.css      → semua styling (CSS variables, brutalism look)
├── components/
│   ├── Navbar.tsx        → navigasi + tombol invert + menu mobile
│   ├── Marquee.tsx        → ticker berjalan
│   ├── Hero.tsx           → hero + animasi terminal typing
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx          → wrapper animasi reveal saat di-scroll
└── lib/
    └── data.ts              → SEMUA KONTEN (nama, project, skill, dll)
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000

## Cara Edit Konten

Hampir semua teks (nama, bio, daftar skill, project, riwayat, link sosial)
ada di satu file: **`lib/data.ts`**. Tinggal ubah isi array/objek di sana,
tidak perlu menyentuh komponen JSX.

Contoh ubah email & nama:

```ts
export const profile = {
  name: "Nama Kamu",
  logo: "NAMA",
  logoSuffix: ".DEV",
  ...
  email: "kamu@email.com",
};
```

Contoh tambah project baru — tinggal tambah objek baru ke array `projects`:

```ts
export const projects = [
  {
    number: "04",
    fileName: "project-baru.tsx",
    title: "Judul Project",
    description: "Deskripsi singkat...",
    tags: ["Next.js", "Prisma"],
    demoUrl: "https://...",
    codeUrl: "https://github.com/...",
  },
  // project lainnya...
];
```

## Ganti Gambar Project

Saat ini bagian visual project (`.project-visual`) memakai pola garis CSS
sebagai placeholder. Untuk pakai screenshot asli:

1. Letakkan gambar di folder `public/`, misal `public/projects/dashboard.png`
2. Di `components/Projects.tsx`, ganti `<div className="pnum">...</div>`
   dengan:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/projects/dashboard.png" alt={project.title} fill style={{ objectFit: "cover" }} />
   ```

## Mode Invert

Tombol `●/○` di navbar men-toggle class `invert` pada `<body>`.
Semua warna diatur lewat CSS variables di `app/globals.css`
(`:root` vs `body.invert`), jadi tinggal sesuaikan nilai di sana
kalau mau ubah skema warna.

## Deploy

Project ini siap di-deploy ke [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```
