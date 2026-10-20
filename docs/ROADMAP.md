# Roadmap P10-P14

Produk: TugasKu. Satu sprint satu minggu, tiap sprint ada tema dan hasil yang
bisa didemokan.

| Sprint | Tema | Isi | Dianggap selesai kalau |
|---|---|---|---|
| P10 | Debug + Git | Perbaiki bug dari uji sprint 1, catat di `docs/BUGS.md`, satu bug satu commit `fix:`; tangani data `localStorage` rusak atau kosong; fitur dikerjakan di cabang lalu di-merge ke `main` (misal cabang `fix/localstorage-rusak`). | Console bersih di alur utama, minimal 5 commit bermakna, ada bukti merge cabang. |
| P11 | ES Modules | Pecah `src/js/app.js` jadi `store.js`, `render.js`, `stats.js`, `views.js`; `index.html` cukup memuat satu `<script type="module">`; `ui-pustaka.js` jadi modul yang mengekspor fungsi, bukan variabel global lagi. | Nggak ada variabel global, halaman jalan dari `file://` dan dari server. |
| P12 | Komponen + simpan aman + perawatan | Kartu tugas dan toolbar filter jadi komponen yang bisa dipakai ulang; cek skema data waktu baca `localStorage`, tambah cadangan otomatis; tombol ekspor/impor JSON, pesan kalau kuota penuh; perbarui `DEPENDENCIES.md`, mulai `CHANGELOG.md`; tag `v0.4`. | Impor JSON valid mengembalikan data, JSON rusak nggak bikin halaman blank, tag `v0.4` sudah dibuat. |
| P13 | Konsep produk (Tugas 7) | Tulis konsep produk: visi, pengguna, alur utama, pembeda, rencana rilis; mockup halaman utama dan satu halaman fitur pakai komponen pustaka yang sudah ada. | Satu dokumen konsep dan dua mockup, isinya konsisten dengan charter. |
| P14 | Demo akhir | Uji 3 pengguna pada alur MVP, catat waktu dan bagian yang bikin bingung; perbaiki temuan kritis; demo: tambah tugas, tandai selesai, buka statistik, hapus tugas. | Demo lancar, laporan uji pengguna dilampirkan, repo bersih. |
