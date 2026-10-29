# Charter Proyek TugasKu

Produk: TugasKu, pencatat tugas kuliah berbasis web.
Pemilik: Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.
Dikerjakan dari P09 sampai P14, demo pada minggu ke-14.

## Masalah

Deadline tugas tercatat di chat kelas, di kertas, dan di chat pribadi. Akibatnya
ada tugas yang terlewat dan prioritas sering tertukar. Aplikasi catatan yang
sudah ada umumnya berat atau mewajibkan pembuatan akun lebih dulu.

## Pengguna

Pengguna utama adalah mahasiswa D3 semester 3 berusia 20 tahun dengan 12 mata
kuliah, yang sering membuka aplikasi dari ponsel dengan koneksi lambat.
Kebutuhannya adalah mencatat dengan cepat, melihat tugas yang mendesak, dan
mengetahui berapa tugas yang sudah selesai, tanpa membuat akun.

## Fitur MVP (MoSCoW)

| Prioritas | Fitur |
|---|---|
| Must | Tambah tugas dengan validasi (nama, mata kuliah, deadline tidak boleh lewat, prioritas); tandai selesai dan batal; hapus dengan konfirmasi; data tetap ada setelah reload; cari dan filter; statistik persentase selesai |
| Should | Tambah dan hapus mata kuliah sendiri; badge prioritas; notifikasi singkat saat menyimpan atau menghapus; rapi pada layar 400 px |
| Could | Ekspor dan impor JSON; mode gelap; pintasan keyboard |
| Won't | Login, sinkron antar perangkat, notifikasi push, backend, aplikasi mobile |

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
| localStorage terhapus (clear data atau mode privat) | Data hilang | Ekspor JSON di P12, beri peringatan di halaman Tentang |
| CDN Bootstrap gagal dimuat saat demo offline | Modal dan toast mati | Simpan salinan di assets/vendor, diperiksa sebelum demo |
| Gaya Bootstrap bentrok dengan CSS sendiri | Layout rusak pada layar kecil | Bootstrap dimuat lebih dulu, kelas sendiri diberi nama berbeda, cek 400 px tiap sprint |
| Waktu bentrok dengan tugas lain | Fitur Should dan Could tidak selesai | Fitur Won't sudah dibuang, Must dikerjakan lebih dulu |

## Batasan

Web statis, tanpa backend, satu halaman, satu pengguna per browser.
