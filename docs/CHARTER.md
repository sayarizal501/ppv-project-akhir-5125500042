# Project Charter — TugasKu (Sprint 1)

**Produk:** TugasKu — pencatat tugas kuliah berbasis web.
**Pemilik:** Iqgam Afrizal (5125500042) · D3 Multimedia Broadcasting, Praktikum Pemrograman Visual.
**Ruang lingkup:** P09–P14 (5 sprint), demo akhir minggu 14.

## 1. Masalah

Mahasiswa mencatat deadline di chat kelas, catatan kertas, dan aplikasi pesan yang
berbeda-beda. Akibatnya tugas terlewat, prioritas tertukar, dan tidak ada satu tempat
untuk melihat progres. Aplikasi catatan yang ada terlalu berat atau butuh akun.

## 2. Pengguna sasaran (persona)

**Iqgam, 20 tahun, mahasiswa D3 semester 3.** Mengambil 12 mata kuliah, mengerjakan
tugas di sela kelas dan saat pulang. Membuka aplikasi lewat ponsel, sering di koneksi
lambat. Butuh mencatat tugas dalam hitungan detik, melihat apa yang mendesak, dan tahu
sudah seberapa banyak yang selesai. Tidak mau daftar akun.

## 3. Fitur MVP (MoSCoW)

| Prioritas | Fitur |
|-----------|-------|
| **Must** | Tambah tugas dengan validasi (nama, matkul, deadline tidak lampau, prioritas); tandai selesai/batal; hapus dengan konfirmasi; data bertahan setelah reload (`localStorage`); cari + filter (semua/belum/selesai/prioritas tinggi); statistik persentase selesai |
| **Should** | Kelola daftar mata kuliah sendiri; badge prioritas yang terbaca; notifikasi singkat setiap simpan/hapus; tampilan rapi di layar 400 px |
| **Could** | Ekspor/impor JSON sebagai cadangan; mode gelap; pintasan keyboard |
| **Won't (sprint ini)** | Login/akun, sinkronisasi antar perangkat, notifikasi push/email, backend/database, aplikasi mobile native |

## 4. Kriteria sukses (terukur)

1. Menambah satu tugas selesai ≤ 30 detik dan ≤ 6 interaksi, diukur 3 kali.
2. Data 100% utuh setelah reload dan setelah browser ditutup (uji 10 tugas).
3. Nol error di Console DevTools pada alur utama (tambah, selesai, hapus, cari, statistik).
4. Angka statistik sama dengan hitungan manual pada 3 skenario data.
5. Tampilan tidak overflow horizontal pada lebar 400 px; semua tombol ≥ 40 px.
6. Uji 3 pengguna: minimal 2 dari 3 menyelesaikan alur "tambah lalu tandai selesai" tanpa dibantu.

## 5. Risiko

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| `localStorage` terhapus saat clear data browser / mode privat | Data pengguna hilang | Ekspor JSON (P12) + peringatan di halaman Tentang |
| CDN Bootstrap gagal dimuat saat demo offline | Modal dan toast mati, tombol tidak berfungsi | Sediakan salinan lokal di `assets/vendor/`, uji sebelum demo |
| Konflik gaya Bootstrap dengan CSS sendiri | Layout rusak di layar kecil | Bootstrap dimuat lebih dulu, kelas sendiri diberi nama berbeda (`panel`, `baris`, `tata-letak`), uji 400 px tiap sprint |
| Waktu sprint bentrok dengan tugas lain | Fitur Should/Could tidak selesai | Won't sudah ditetapkan; prioritas Must diselesaikan lebih dulu |

## 6. Batasan

Web statis tanpa backend, satu halaman, satu pengguna per browser. Fokus kualitas
antarmuka dan proses pengembangan bertahap, bukan fitur kolaborasi.
