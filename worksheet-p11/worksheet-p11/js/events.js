// events.js — pemasangan seluruh pendengar peristiwa.
import { pilihKategori, aturUlang } from "./state.js";
import {
  barisFilter, form, tombolKirim, aturan,
  periksaKolom, ambilIsiForm,
} from "./dom.js";

export function pasangPendengar() {
  // 1. Klik filter
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  // 2. Tombol atur ulang (reset)
  const tombolReset = document.querySelector("#btn-reset");
  if (tombolReset) {
    tombolReset.addEventListener("click", () => {
      aturUlang();
    });
  }

  // 3. Validasi input form
  form.addEventListener("input", (event) => {
    const item = aturan.find((a) => a.input === event.target);
    if (!item) return;

    periksaKolom(item);
    const semuaSah = aturan.every((a) => a.sah(a.input.value.trim()));
    tombolKirim.disabled = !semuaSah;
  });

  // 4. Submit form
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