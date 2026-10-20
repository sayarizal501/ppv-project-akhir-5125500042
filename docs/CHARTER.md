# Project Charter

Nama produk: TugasKu, pencatat tugas kuliah berbasis web.
Pemilik: Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.
Dikerjakan P09 sampai P14, demo di minggu 14.

## Masalah

Mahasiswa mencatat deadline di chat kelas, di kertas, dan di aplikasi pesan yang
berbeda-beda. Tugas jadi terlewat dan tidak ada satu tempat untuk melihat progres.
Aplikasi catatan yang ada terasa berat atau harus daftar akun dulu.

## Pengguna

Iqgam, 20 tahun, mahasiswa D3 semester 3. Ambil 12 mata kuliah. Sering membuka
aplikasi dari ponsel di koneksi lambat. Butuh mencatat tugas dengan cepat,
melihat mana yang mendesak, dan tahu sudah berapa yang selesai. Tidak mau daftar akun.

## Fitur MVP (MoSCoW)

| Prioritas | Fitur |
|---|---|
| Must | Tambah tugas dengan validasi (nama, matkul, deadline tidak boleh lewat, prioritas); tandai selesai dan batal; hapus pakai konfirmasi; data tetap ada setelah reload; cari dan filter; statistik persentase selesai |
| Should | Tambah dan hapus mata kuliah sendiri; badge prioritas; notifikasi singkat saat simpan atau hapus; rapi di layar 400 px |
| Could | Ekspor dan impor JSON; mode gelap; pintasan keyboard |
| Won't | Login, sinkron antar perangkat, notifikasi push, backend, aplikasi mobile |

## Ukuran berhasil

1. Satu tugas selesai ditambah dalam 30 detik atau kurang, maksimal 6 interaksi.
2. Data utuh setelah reload dan setelah browser ditutup (uji 10 tugas).
3. Tidak ada error di Console saat tambah, selesai, hapus, cari, dan buka statistik.
4. Angka statistik sama dengan hitungan manual pada 3 skenario data.
5. Tidak ada scroll ke samping di lebar 400 px, semua tombol minimal 40 px.
6. Dari 3 pengguna, minimal 2 bisa menambah tugas lalu menandainya selesai tanpa dibantu.

## Risiko

| Risiko | Akibat | Cara menangani |
|---|---|---|
| localStorage terhapus saat clear data atau mode privat | Data pengguna hilang | Ekspor JSON di P12, beri peringatan di halaman Tentang |
| CDN Bootstrap gagal dimuat saat demo offline | Modal dan toast tidak jalan | Simpan salinan di assets/vendor, cek sebelum demo |
| Gaya Bootstrap bentrok dengan CSS sendiri | Layout rusak di layar kecil | Bootstrap dimuat dulu, kelas sendiri diberi nama berbeda, cek 400 px tiap sprint |
| Waktu bentrok dengan tugas lain | Fitur Should dan Could tidak selesai | Fitur Won't sudah dibuang, Must dikerjakan dulu |

## Batasan

Web statis, tanpa backend, satu halaman, satu pengguna per browser.
