// state.js — objek state tunggal, fungsi pengubah, dan penyimpanan lokal
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarProyek,
  kategoriAktif: "semua",
};

// Menyimpan keadaan ke localStorage
export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Memuat keadaan dari localStorage
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

// Pengubah state: ubah, simpan, lalu render ulang
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state); // Simpan pilihan setiap ada perubahan
  render(state);
}

// Menghapus simpanan dan mereset tampilan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  render(state);
}