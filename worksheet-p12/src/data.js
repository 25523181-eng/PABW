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
 
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}
 
export const formatKeahlian = (daftar) => daftar.join(" · ");