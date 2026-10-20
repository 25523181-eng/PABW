// src/state.js
import { reactive } from "vue";
import { daftarProyek } from "./data.js";

export const state = reactive({
  daftarProyek,
  kategoriAktif: "semua",
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}

// Menghapus simpanan dan mereset tampilan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  render(state);
}