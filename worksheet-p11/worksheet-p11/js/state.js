import { daftarProyek } from "./data.js";
 
export const state = {
  daftarProyek,
  kategoriAktif: "semua", // pengganti jenisAktif (app.js) dan kelas "aktif" di tombol
};
 
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}