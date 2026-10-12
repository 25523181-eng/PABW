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
## Pertemuan 8 — Deklarasi penggunaan AI

**Dibantu AI:**
- Struktur awal berkas app.js (data profil, fungsi, dan contoh array methods).
- Penjelasan membaca pesan galat di Console dan contoh kasus galat untuk Lembar E.
- Saran draf jawaban tiket keluar yang saya baca dan sesuaikan.

**Saya kerjakan sendiri:**
- Isi data profil dan daftar proyek (LesGo, Prototype Aption, SmartUMKM).
- Menjalankan kode di Live Server, memeriksa hasil di Console, dan mengambil tangkapan layar.
- Mencatat galat yang saya temui (E.5) dan memperbaikinya.
- Mengisi tabel B.4, D.4, dan Lembar F dengan hasil yang saya lihat sendiri.
- Commit dan push ke repositori.
## Pertemuan 9 — DOM, Event, dan Interaktivitas

- **Nama**: Umar Abdillah
- **NIM**: 25523181
- **Kelas**: E
- **Mata Kuliah**: Pengembangan Aplikasi Berbasis Web (PABW)

---

###  Ringkasan Pengerjaan
Pada Pertemuan 9 ini, halaman profil dikembangkan agar lebih interaktif dan dinamis dengan menghubungkan data JavaScript ke DOM:
1. **Render Data Dinamis:** Memuat dan menampilkan daftar proyek dari `app.js` ke elemen `#daftar` menggunakan `document.createElement()` dan `textContent`.
2. **Event Delegation:** Memasang satu *event listener* pada elemen induk (`#filter`) memanfaatkan `event.target.closest("button")` untuk menyaring kategori proyek ("Semua", "Web", "Desain", "Aplikasi").
3. **Manajemen State & Wadah:** Mengosongkan wadah (`wadah.textContent = ""`) setiap fungsi `render()` dipanggil untuk mencegah pembalikan/penggandaan kartu, serta mengontrol tampilan pesan saat kategori proyek kosong (`#pesan-kosong`).
4. **Validasi Form Interaktif:** Menangani formulir kontak tanpa *reload* halaman (`event.preventDefault()`), memvalidasi setiap kolom (*input event*), menampilkan pesan galat aksesibel (`aria-invalid` & `aria-describedby`), serta menahan tombol kirim hingga seluruh masukan sah.

---

###  Deklarasi Penggunaan AI

Sesuai ketentuan kejujuran akademik dan aturan PABW Pertemuan 9:

1. **Bagian yang Dikerjakan Mandiri:**
   - Menyusun kerangka elemen DOM pada `profil.html` (`#daftar`, `#filter`, `#pesan-kosong`, dan struktur form).
   - Penanganan validasi formulir dan pencegahan perilaku bawaan peramban (*submit event*).
   - Menjawab seluruh pertanyaan Lembar F (Tiket Keluar) serta pemeriksaan mandiri DevTools.

2. **Bagian yang Dibantu oleh AI:**
   - Meninjau dan memverifikasi kelengkapan kriteria checklist **Lembar F.1**.
    - Penulisan fungsi logika murni dan manipulasi DOM pada `js/app.js` dan `js/dom.js`.
   - Penerapan logika *event delegation* dan penyaringan array (`filter()`).
   - Membantu memformulasikan struktur penulisan dokumentasi dan deklarasi AI untuk berkas `README.md`.