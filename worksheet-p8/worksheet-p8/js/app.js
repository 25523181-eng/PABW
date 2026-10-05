const profil = {
  nama: "Umar Abdillah",
  nim: "25523181",
  peran: "Mahasiswa Informatika yang suka belajar membuat web",
  keahlian: ["HTML", "CSS", "JavaScript","Figma"],
  jumlahProyek: 3, 
};
 
// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));