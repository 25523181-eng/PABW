// app.js — perakit: hanya import dan pemanggilan.
import { state, muat } from "./state.js";
import { tampilkanProfil, render } from "./dom.js";
import { pasangPendengar } from "./events.js";

// 1. Muat simpanan jika ada
const simpanan = muat();
if (simpanan !== null) {
  state.kategoriAktif = simpanan.kategoriAktif;
}

// 2. Jalankan perakitan awal
tampilkanProfil();
render(state);
pasangPendengar();

window.state = state;     // sementara, hapus setelah uji
window.render = render;   // sementara, hapus setelah uji
