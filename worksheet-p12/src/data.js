export const profil = {
  nama: "Umar Abdillah",
  nim: "25523181",
  peran: "Mahasiswa Informatika yang suka belajar membuat web",
  keahlian: ["HTML", "CSS", "JavaScript", "Figma"],
};
 
export const daftarProyek = [
  { id: 1, judul: "LesGo", tahun: 2026, jenis: "web", selesai: false },
  { id: 2, judul: "Prototype Aption", tahun: 2025, jenis: "desain", selesai: true },
  { id: 3, judul: "SmartUMKM", tahun: 2026, jenis: "aplikasi", selesai: true },
];
 
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}
 
export const formatKeahlian = (daftar) => daftar.join(" · ");