# Charter Proyek TugasKu

Produk: TugasKu, pencatat tugas kuliah berbasis web.
Pemilik: Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.
Dikerjakan dari P09 sampai P14, demo di minggu 14.

## Masalah

Deadline tugas saya catat di chat kelas, di kertas, dan di chat pribadi.
Akibatnya ada tugas yang kelewat dan prioritas sering ketuker. Aplikasi catatan
yang sudah ada biasanya berat atau harus bikin akun dulu.

## Pengguna

Saya sendiri: Iqgam, 20 tahun, mahasiswa D3 semester 3, ambil 12 mata kuliah.
Sering buka aplikasi dari HP dengan koneksi lambat. Yang saya butuh: catat
cepat, kelihatan mana yang mendesak, dan tahu sudah berapa yang selesai. Males
bikin akun.

## Fitur MVP (MoSCoW)

| Prioritas | Fitur |
|---|---|
| Must | Tambah tugas dengan validasi (nama, matkul, deadline nggak boleh lewat, prioritas); tandai selesai dan batal; hapus pakai konfirmasi; data tetap ada setelah reload; cari dan filter; statistik persentase selesai |
| Should | Tambah dan hapus mata kuliah sendiri; badge prioritas; notifikasi singkat saat simpan atau hapus; rapi di layar 400 px |
| Could | Ekspor dan impor JSON; mode gelap; pintasan keyboard |
| Won't | Login, sinkron antar perangkat, notifikasi push, backend, aplikasi mobile |

## Ukuran berhasil

Anggap berhasil kalau:

1. Nambah satu tugas paling lama 30 detik, maksimal 6 interaksi.
2. Data masih utuh setelah reload dan setelah browser ditutup (dites pakai 10 tugas).
3. Console bersih waktu nambah, selesai, hapus, cari, dan buka statistik.
4. Angka statistik cocok dengan hitungan manual di 3 contoh data.
5. Di lebar 400 px nggak ada geser ke samping, semua tombol minimal 40 px.
6. Dari 3 orang yang nyoba, minimal 2 bisa nambah tugas lalu tandai selesai tanpa dibantu.

## Risiko

| Kalau terjadi | Akibatnya | Cara ngatasin |
|---|---|---|
| localStorage kehapus (clear data atau mode privat) | Data hilang | Ekspor JSON di P12, kasih peringatan di halaman Tentang |
| CDN Bootstrap gagal dimuat pas demo offline | Modal dan toast mati | Simpan salinan di assets/vendor, dicek sebelum demo |
| Gaya Bootstrap bentrok sama CSS sendiri | Layout rusak di layar kecil | Bootstrap dimuat dulu, kelas sendiri dikasih nama beda, cek 400 px tiap sprint |
| Waktu bentrok sama tugas lain | Fitur Should dan Could nggak selesai | Fitur Won't sudah dibuang, Must dikerjakan dulu |

## Batasan

Web statis, tanpa backend, satu halaman, satu pengguna per browser.
