import { daftarProyek } from "./app.js";

const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#pesan-kosong");

const form       = document.querySelector("form");
const inputNama  = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputNim   = document.querySelector("#nim");
const inputPesan = document.querySelector("#pesan");

// B.1 
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  const status = proyek.selesai ? "" : " (sedang dikerjakan)";
  li.textContent = `${proyek.judul} — ${proyek.jenis}, ${proyek.tahun}${status}`;
  return li;
}

// B.2 + D.1 
function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen);
}

// C.2
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// C.1
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(

    (proyek) => kategori === "semua" || proyek.jenis === kategori
    
  );
  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarProyek);
// D.2 — validasi form
const tombolKirim = form.querySelector('button[type="submit"]');
form.noValidate = true; // tanpa ini, gelembung bawaan peramban muncul lebih dulu

// Satu aturan per kolom: cara memeriksa dan pesan yang menyebut cara memperbaiki
const aturan = [
  {
    input: inputNama,
    sah: (nilai) => nilai !== "",
    pesan: "Isi nama lengkap Anda, misalnya Umar Abdillah.",
  },
  {
    input: inputEmail,
    sah: (nilai) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai),
    pesan: "Tulis email dengan format nama@contoh.com.",
  },
  {
    input: inputNim,
    sah: (nilai) => /^[0-9]{8}$/.test(nilai),
    pesan: "NIM berisi delapan digit angka, contoh 25523181.",
  },
  {
    input: inputPesan,
    sah: (nilai) => nilai !== "",
    pesan: "Tulis pesan Anda, walau hanya satu kalimat.",
  },
];

// Siapkan satu tempat pesan galat di bawah tiap kolom
aturan.forEach((item) => {
  const galat = document.createElement("span");
  galat.id = `${item.input.id}-galat`;
  galat.className = "galat";
  galat.hidden = true;
  item.input.after(galat);
  item.galat = galat;

  // hubungkan ke kolom untuk pembaca layar (NIM sudah punya aria-describedby)
  const lama = item.input.getAttribute("aria-describedby");
  item.input.setAttribute("aria-describedby", lama ? `${lama} ${galat.id}` : galat.id);
});

// Periksa satu kolom dan tampilkan atau sembunyikan pesannya
function periksaKolom(item) {
  const sah = item.sah(item.input.value.trim());
  item.galat.textContent = sah ? "" : item.pesan;
  item.galat.hidden = sah;
  if (sah) {
    item.input.removeAttribute("aria-invalid");
  } else {
    item.input.setAttribute("aria-invalid", "true");
  }
  return sah;
}

// Saat mengetik: periksa kolom yang berubah, lalu atur tombol kirim
form.addEventListener("input", (event) => {
  const item = aturan.find((a) => a.input === event.target);
  if (!item) return;

  periksaKolom(item);
  const semuaSah = aturan.every((a) => a.sah(a.input.value.trim()));
  tombolKirim.disabled = !semuaSah;
});

// Saat dikirim
form.addEventListener("submit", (event) => {
  event.preventDefault(); // baris pertama: halaman tidak dimuat ulang

  const hasil = aturan.map(periksaKolom); // periksa semua kolom sekaligus
  const bermasalah = aturan.find((_, i) => !hasil[i]);
  if (bermasalah) {
    bermasalah.input.focus(); // pindahkan fokus ke kolom pertama yang bermasalah
    return;
  }

  console.log("Form sah:", {
    nama: inputNama.value.trim(),
    email: inputEmail.value.trim(),
    nim: inputNim.value.trim(),
    pesan: inputPesan.value.trim(),
  });
});