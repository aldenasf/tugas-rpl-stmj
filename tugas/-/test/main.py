jumlah_soal = 10
jawaban_benar = 8
jawaban_salah = 0

nilai = (jawaban_benar - jawaban_salah) / jumlah_soal

if (nilai >= 0.8):
    predikat = "sangat baik"
else:
    predikat = "baik"

print("Nilai    : " + str(nilai))
print("Predikat : " + predikat)