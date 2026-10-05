const profil = {
  nama: "Umar Abdillah",
  nim: "25523181",
  peran: "Mahasiswa Informatika yang suka belajar membuat web",
  keahlian: ["HTML", "CSS", "JavaScript", "Figma"],
};

const daftarProyek = [
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

const elemen = document.querySelector("#tentang h2");
if (elemen !== null) {
  console.log(elemen.textContent); // "Tentang saya"
} else {
  console.error('Elemen "#tentang h2" tidak ditemukan di HTML');
}

const nilaiNim = document.querySelector("#nim").value; // selalu teks
console.log(typeof nilaiNim);         // "string"
console.log(Number(nilaiNim) + 1);    // 25523182
console.log(typeof Number(nilaiNim)); // "number"