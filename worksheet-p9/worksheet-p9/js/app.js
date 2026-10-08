

export const profil = {
  nama: "Umar Abdillah",
  nim: "25523181",
  peran: "Mahasiswa Informatika yang suka belajar membuat web",
  keahlian: ["HTML", "CSS", "JavaScript", "Figma"],
};

export const daftarProyek = [
  { judul: "LesGo", tahun: 2026, jenis: "web", selesai: false },
  { judul: "Prototype Aption", tahun: 2025, jenis: "desain", selesai: true },
  { judul: "SmartUMKM", tahun: 2026, jenis: "aplikasi", selesai: true },
];

const jumlahProyek = daftarProyek.length; // angka, bukan teks
let jenisAktif = "web"; // let: nilainya memang akan berubah

// Lembar C — dua fungsi murni
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

// Menulis teks ke halaman, dengan pengaman bila elemen tidak ditemukan
function pasangTeks(selektor, teks) {
  const elemen = document.querySelector(selektor);
  if (elemen === null) {
    console.error(`Elemen "${selektor}" tidak ditemukan di HTML`);
    return;
  }
  elemen.textContent = teks;
}

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`${profil.nama} punya ${jumlahProyek} proyek.`);

// Lembar D — console.table, filter, find, map, sort pada salinan
console.table(profil.keahlian);
console.table(daftarProyek);

const proyekAktif = daftarProyek.filter((proyek) => proyek.jenis === jenisAktif);
console.table(proyekAktif); // 1 baris: LesGo

jenisAktif = "desain"; // let diubah, filter ikut berubah
const proyekDesain = daftarProyek.filter((proyek) => proyek.jenis === jenisAktif);
console.table(proyekDesain); // 1 baris: Prototype Aption

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(proyekSelesai); // 2 baris: Prototype Aption, SmartUMKM

const proyek2025 = daftarProyek.filter((proyek) => proyek.tahun === 2025);
console.table(proyek2025); // 1 baris: Prototype Aption

const smartUmkm = daftarProyek.find((proyek) => proyek.judul === "SmartUMKM");
console.log(smartUmkm); // 1 object
console.log(daftarProyek.find((proyek) => proyek.judul === "Tidak Ada")); // undefined

const judulProyek = daftarProyek.map((proyek) => `${proyek.judul} (${proyek.tahun})`);
console.log(judulProyek, judulProyek.length === daftarProyek.length); // true

const terlamaDulu = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
console.log(terlamaDulu[0].judul, "|", daftarProyek[0].judul); // Prototype Aption | LesGo

// Menampilkan data ke halaman
document.title = `${profil.nama} — PABW 2026/2027`;
pasangTeks("header h1", profil.nama);
pasangTeks(".tagline", profil.peran);
pasangTeks("#keahlian", `Keahlian: ${formatKeahlian(profil.keahlian)}`);

const daftarKarya = document.querySelector("#karya ul");
if (daftarKarya !== null) {
  daftarKarya.replaceChildren(
    ...daftarProyek.map((proyek) => {
      const butir = document.createElement("li");
      const status = proyek.selesai ? "" : " (sedang dikerjakan)";
      butir.textContent = `${proyek.judul} — ${proyek.jenis}, ${proyek.tahun}${status}`;
      return butir;
    })
  );
} else {
  console.error('Elemen "#karya ul" tidak ditemukan di HTML');
}

const infoKaki = document.querySelector(".kaki p");
if (infoKaki !== null) {
  const waktu = document.createElement("time");
  waktu.dateTime = "2026";
  waktu.textContent = "2026";
  infoKaki.replaceChildren(`${profil.nama} · ${profil.nim} · `, waktu);
} else {
  console.error('Elemen ".kaki p" tidak ditemukan di HTML');
}
