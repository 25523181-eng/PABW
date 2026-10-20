# Worksheet P12: Vue 3 + Vite

Nama: Umar Abdillah | NIM: 25523181 | Kelas: E
Mata kuliah: Pengembangan Aplikasi Berbasis Web (SIF302)

Halaman profil dari Pertemuan 11 dipindahkan ke proyek Vue 3 + Vite, dipecah menjadi empat komponen, lalu dibangun untuk produksi.

## Perkakas

- Node.js: v22.15.0
- npm: 10.9.2

## Cara menjalankan

```bash
npm install
npm run dev       # server pengembangan, http://localhost:5173
npm run build     # menghasilkan folder dist/
npm run preview   # menjalankan isi dist/, http://localhost:4173
```

## Hasil build

Diukur di DevTools, tab Network, dengan Disable cache dan muat ulang halaman.

| Yang diukur | Sebelum build | Sesudah build |
|---|---|---|
| Ukuran seluruh berkas yang dikirim | ± 1.498 kB | ± 29,2 kB |
| Jumlah berkas yang dikirim | 20 berkas | 3 berkas |

Bukti halaman berjalan dari `npm run preview`: lihat `preview-p12.png`.

## Yang tidak di-commit

- `dist/`: hasil build, dibuat ulang dengan `npm run build`.
- `node_modules/`: dipasang ulang dengan `npm install`.

## Deklarasi penggunaan AI

Saya menggunakan Claude (Anthropic) sebagai alat bantu belajar selama mengerjakan worksheet ini.

**Bagian yang dibantu AI:**
- Penjelasan langkah-langkah worksheet (lembar C sampai F) dan urutan pengerjaannya.
- Kerangka kode komponen Vue (`KepalaProfil.vue`, `TombolFilter.vue`, `DaftarProyek.vue`, `FormKontak.vue`) dan `App.vue`, yang kemudian saya sesuaikan dengan data saya (properti `jenis`, penambahan `id`).
- Pemisahan `state.js` P11 menjadi `state.js` (reaktif) dan `simpanan.js`, serta penambahan fungsi `aturUlang()`.
- Membantu menemukan penyebab galat: `pilihKategori` yang terdeklarasi dua kali di `state.js`, dan `git push` yang ditolak (diselesaikan dengan `git pull --rebase`).
- Cara mengukur ukuran berkas di tab Network, dan bantuan menghitung angka dari tangkapan layar saya.
- Draf README ini.

**Bagian yang saya kerjakan sendiri:**
- Isi halaman, topik, dan data (`data.js`), `api.js` dari P10, serta enam berkas CSS P04-P06 (tidak diubah).
- Kode `state.js`, `muat()`, dan `simpan()` dari Pertemuan 11.
- Membuat proyek (`npm create vite`), memindahkan berkas, mengimpor CSS, menghapus berkas contoh, serta mengetik, menyesuaikan, dan menguji setiap komponen.
- Menjalankan `npm run dev`, `npm run build`, dan `npm run preview`.
- Seluruh pengujian di peramban (filter, formulir, tombol atur ulang, simpanan rusak, Console), pengukuran Network, tangkapan layar, dan pengisian worksheet.
- Commit dan push ke repositori.