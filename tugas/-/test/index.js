const jumlah_soal = 10;
const jawaban_benar = 8;
const jawaban_salah = 0;

const nilai = (jawaban_benar - jawaban_salah) / jumlah_soal;

let predikat = "";

if (nilai >= 0.8) {
    predikat = "sangat baik";
} else {
    predikat = "baik";
}

console.log("Nilai      : " + nilai);
console.log(`Predikat   : ${predikat}`);
