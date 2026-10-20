# ROADMAP P10-P14

Satu minggu satu sprint. Setiap sprint harus ada hasil yang bisa ditunjukkan.

## P10 - debug dan git

- Perbaiki bug dari uji Sprint 1, catat di `docs/BUGS.md`, satu bug satu commit `fix:`.
- Tambah penanganan kalau data localStorage rusak atau kosong.
- Rapikan kebiasaan git: commit kecil, pesan jelas, branch untuk fitur baru.
- Selesai kalau: Console bersih di alur utama, minimal 5 commit bermakna.

## P11 - ES modules

- Pecah `src/js/app.js` jadi `store.js`, `render.js`, `stats.js`, `views.js`.
- `index.html` cukup memuat satu `<script type="module">`.
- `ui-pustaka.js` diubah jadi modul yang mengekspor fungsi, tidak lagi variabel global.
- Selesai kalau: tidak ada variabel global, halaman jalan dari `file://` dan dari server.

## P12 - komponen, penyimpanan aman, perawatan

- Pisahkan kartu tugas dan toolbar filter jadi komponen yang bisa dipakai ulang.
- Cek skema data saat membaca localStorage, tambah cadangan otomatis.
- Tambah tombol ekspor dan impor JSON, beri pesan kalau kuota penuh.
- Perbarui `DEPENDENCIES.md`, buang komentar dan CSS yang sudah tidak dipakai.
- Selesai kalau: impor JSON valid mengembalikan data, JSON rusak tidak bikin halaman blank.

## P13 - konsep produk (Tugas 7)

- Tulis konsep produk: visi, pengguna, alur utama, pembeda, rencana rilis.
- Buat mockup halaman utama dan satu halaman fitur pakai komponen pustaka yang sudah ada.
- Selesai kalau: satu dokumen konsep dan dua mockup, isinya tidak bertentangan dengan charter.

## P14 - demo akhir

- Uji 3 pengguna pada alur MVP, catat waktu dan bagian yang bikin bingung.
- Perbaiki temuan yang kritis.
- Demo: tambah tugas, tandai selesai, buka statistik, hapus tugas.
- Selesai kalau: demo lancar, laporan uji pengguna dilampirkan, repo bersih.
