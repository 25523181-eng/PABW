// events.js — pemasangan seluruh pendengar peristiwa.
import { pilihKategori } from "./state.js";
import {
  barisFilter, form, tombolKirim, aturan,
  periksaKolom, ambilIsiForm,
} from "./dom.js";

export function pasangPendengar() {
  // Klik filter: hanya memanggil pengubah state
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  form.addEventListener("input", (event) => {
    const item = aturan.find((a) => a.input === event.target);
    if (!item) return;

    periksaKolom(item);
    const semuaSah = aturan.every((a) => a.sah(a.input.value.trim()));
    tombolKirim.disabled = !semuaSah;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const hasil = aturan.map(periksaKolom);
    const bermasalah = aturan.find((_, i) => !hasil[i]);
    if (bermasalah) {
      bermasalah.input.focus();
      return;
    }

    console.log("Form sah:", ambilIsiForm());
  });
}