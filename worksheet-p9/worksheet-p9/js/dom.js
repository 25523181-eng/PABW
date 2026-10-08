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
  li.textContent = proyek.judul; 
  return li;
}

// B.2 
function render(daftar) {
  wadah.textContent = "";              
  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen);             
}

render(daftarProyek);

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