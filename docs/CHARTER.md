# Charter Proyek TugasKu

Produk: TugasKu, pencatat tugas kuliah berbasis web.
Pemilik: Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.
Dikerjakan dari P09 sampai P14, demo pada minggu ke-14.

## Masalah

Deadline tugas tercatat di chat kelas, di kertas, dan di chat pribadi. Akibatnya
ada tugas yang terlewat dan prioritas sering tertukar. Aplikasi catatan yang
sudah ada umumnya berat atau mewajibkan pembuatan akun lebih dulu.

## Pengguna

Persona (dipertajam di Tugas 7/P13 dari charter P09; arahnya tidak berubah):
Dimas Arya, 20 tahun, mahasiswa D3 Teknologi Multimedia dan Broadcasting
semester 3 dengan 12 mata kuliah dan satu kepanitiaan.

Keseharian: kuliah dan praktikum dari pagi sampai sore, mengecek tugas dari
ponsel di sela perjalanan dan malam hari dengan koneksi kos yang lambat.

Masalah: deadline dari 12 mata kuliah dan kelompok datang lewat chat kelas,
chat grup, dan kertas; tugas sering baru diingat sehari sebelum tenggat.

Kebutuhannya adalah mencatat dengan cepat, melihat tugas yang mendesak, dan
mengetahui berapa tugas yang sudah selesai, tanpa membuat akun.

## Fitur MVP (MoSCoW)

| Prioritas | Fitur |
|---|---|
| Must | Tambah tugas dengan validasi (nama, mata kuliah, deadline tidak boleh lewat, prioritas) |
| Must | Tandai selesai/batal dan hapus dengan konfirmasi |
| Must | Daftar tetap ada setelah reload |
| Must | Cari, saring, dan statistik persentase selesai |
| Should | Tambah dan hapus mata kuliah sendiri |
| Should | Badge prioritas dan pesan singkat saat menyimpan atau menghapus |
| Should | Tampilan rapi pada layar 400 px |
| Should | Ekspor dan impor JSON (naik dari Could di Tugas 7/P13) |
| Won't versi ini | Login dan akun pengguna; sinkron antar perangkat, backend, dan notifikasi push; mode gelap dan pintasan keyboard lengkap (Ctrl+K sudah ada); aplikasi mobile native |

Catatan: tabel ini disinkronkan dengan `docs/konsep/` pada Tugas 7/P13. Must
diringkas menjadi empat kelompok fitur yang sama dengan halaman konsep; ekspor
dan impor JSON naik ke Should karena menyangkut keamanan data; mode gelap dan
pintasan keyboard lengkap turun ke Won't versi ini karena kosmetik dan belum
menjawab masalah utama.

## Ukuran berhasil

Dianggap berhasil bila:

1. Menambah satu tugas paling lama 30 detik, maksimal 6 interaksi.
2. Data masih utuh setelah reload dan setelah browser ditutup, diuji dengan 10
   tugas.
3. Console bersih saat menambah, menyelesaikan, menghapus, mencari, dan membuka
   statistik.
4. Angka statistik cocok dengan hitungan manual pada 3 contoh data.
5. Pada lebar 400 px tidak ada geser ke samping dan semua tombol minimal 40 px.
6. Dari 3 orang yang mencoba, minimal 2 dapat menambah tugas lalu menandainya
   selesai tanpa dibantu.

## Risiko

| Kalau terjadi | Akibatnya | Cara mengatasinya |
|---|---|---|
| localStorage terhapus (clear data atau mode privat) | Data hilang | Ekspor JSON (Should, belum dikerjakan), beri peringatan di halaman Tentang |
| CDN Bootstrap gagal dimuat saat demo offline | Modal dan toast mati | Simpan salinan di assets/vendor, diperiksa sebelum demo |
| Gaya Bootstrap bentrok dengan CSS sendiri | Layout rusak pada layar kecil | Bootstrap dimuat lebih dulu, kelas sendiri diberi nama berbeda, cek 400 px tiap sprint |
| Waktu bentrok dengan tugas lain | Fitur Should dan Could tidak selesai | Fitur Won't sudah dibuang, Must dikerjakan lebih dulu |

## Batasan

Web statis, tanpa backend, satu halaman, satu pengguna per browser.
