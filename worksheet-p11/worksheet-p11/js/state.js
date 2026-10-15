// state.js
import { daftarProyek } from "./data.js";
import { render } from "./dom.js"; // 1. Impor render

export const state = {
  daftarProyek,
  kategoriAktif: "semua",
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state); // 2. Panggil render setiap kali kategori berubah!
}