// dom.js — seluruh sentuhan ke halaman: pemilih, render, kelas, validasi tampilan.
import { profil, formatKeahlian } from "./data.js";

// ---------- Pemilih ----------
export const wadah       = document.querySelector("#daftar");
export const barisFilter = document.querySelector("#filter");
const kosong             = document.querySelector("#pesan-kosong");

export const form        = document.querySelector("form");
const inputNama          = document.querySelector("#nama");
const inputEmail         = document.querySelector("#email");
const inputNim           = document.querySelector("#nim");
const inputPesan         = document.querySelector("#pesan");
export const tombolKirim = form.querySelector('button[type="submit"]');

// ---------- Identitas (dipindah dari app.js) ----------
function pasangTeks(selektor, teks) {
  const elemen = document.querySelector(selektor);
  if (elemen === null) {
    console.error(`Elemen "${selektor}" tidak ditemukan di HTML`);
    return;
  }
  elemen.textContent = teks;
}

export function tampilkanProfil() {
  document.title = `${profil.nama} — PABW 2026/2027`;
  pasangTeks("header h1", profil.nama);
  pasangTeks(".tagline", profil.peran);
  pasangTeks("#keahlian", `Keahlian: ${formatKeahlian(profil.keahlian)}`);

  const infoKaki = document.querySelector(".kaki p");
  if (infoKaki !== null) {
    const waktu = document.createElement("time");
    waktu.dateTime = "2026";
    waktu.textContent = "2026";
    infoKaki.replaceChildren(`${profil.nama} · ${profil.nim} · `, waktu);
  } else {
    console.error('Elemen ".kaki p" tidak ditemukan di HTML');
  }
}

// ---------- Daftar proyek ----------
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  const status = proyek.selesai ? "" : " (sedang dikerjakan)";
  li.textContent = `${proyek.judul} — ${proyek.jenis}, ${proyek.tahun}${status}`;
  return li;
}

export function render(daftar) {
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

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// ---------- Validasi form (tampilan galat) ----------
form.noValidate = true;

export const aturan = [
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

aturan.forEach((item) => {
  const galat = document.createElement("span");
  galat.id = `${item.input.id}-galat`;
  galat.className = "galat";
  galat.hidden = true;
  item.input.after(galat);
  item.galat = galat;

  const lama = item.input.getAttribute("aria-describedby");
  item.input.setAttribute("aria-describedby", lama ? `${lama} ${galat.id}` : galat.id);
});

export function periksaKolom(item) {
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

export function ambilIsiForm() {
  return {
    nama: inputNama.value.trim(),
    email: inputEmail.value.trim(),
    nim: inputNim.value.trim(),
    pesan: inputPesan.value.trim(),
  };
}