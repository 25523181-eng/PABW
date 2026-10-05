# PABW
## Design token halaman profil

- Berkas gaya yang akan dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`
- Warna utama: `#1d4ed8` (Royal Indigo Blue), dipilih karena memiliki rasio kontras tinggi (7.2:1) yang memenuhi standar WCAG 2.1 AA serta memberikan kesan visual yang modern dan profesional untuk profil portofolio mahasiswa Informatika.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
| --- | --- | --- |
| `--color-primary` | `#1d4ed8` | tombol, tautan, penanda |
| `--color-fg` | `#111625` | warna teks utama |
| `--color-bg` | `#f4f5f9` | latar halaman |
| `--radius-md` | `0.375rem` | sudut tombol dan kartu |
| `--space-4` | `1.125rem` | jarak standar antar elemen |

Kriteria selesai saya: mengubah `--color-primary` di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pengungkapan Penggunaan AI (AI Usage Disclosure)

Dalam pengerjaan tugas Praktikum Pertemuan 4 ini, saya menggunakan asisten AI (Gemini) sebagai mitra diskusi dan alat bantu evaluasi. Berikut adalah rincian pembagian kerja:

### 1. Dikerjakan Sendiri (Mandiri)
* **Penyusunan Kode HTML (`profil.html`):** Pengisian data pribadi, pembuatan struktur tabel, formulir kontak, serta penambahan 3 bagian baru (`#tanya-jawab`, `#galeri`, `#lini-masa`) menggunakan elemen semantik.
* **Arsitektur & Pembagian CSS:** Pembuatan dan pemisahan 5 berkas CSS (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`) beserta penentuan variabel/token.
* **Pengujian Alat Otomatis:** Membuka dan menjalankan pengujian langsung di browser melalui Chrome DevTools (Lighthouse Audit) dan W3C Nu HTML Checker.

### 2. Dibantu oleh AI
* **Audit & Verifikasi Kode CSS:** Mengidentifikasi dan menghitung penanda cara lama (seperti pencarian nilai *hex hardcoded* pada `komponen.css` dan `tema.css`) untuk pengisian Lembar I.2.
* **Navigasi Hasil Lighthouse:** Membantu menemukan posisi indikator *Kontras Teks* pada bagian *Passed Audits* di DevTools untuk pengisian Lembar I.3.
* **Penyusunan Deskripsi Evaluasi:** Membantu memformulasi kalimat deskriptif yang tepat dan ringkas untuk hasil uji manual (Lembar I.4) dan evaluasi struktur bagian baru (Lembar I.5).
* **Pemecahan Masalah (Troubleshooting):** Menganalisis penyebab variabel warna token yang tidak berubah saat uji coba beralih ke Mode Gelap.