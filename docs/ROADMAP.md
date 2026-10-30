# Roadmap P10-P14

Produk: TugasKu. Satu sprint satu minggu, tiap sprint memiliki tema dan hasil
yang dapat didemokan.

| Sprint | Tema | Isi | Dianggap selesai kalau |
|---|---|---|---|
| P10 | Debug + Git | Perbaiki bug dari uji sprint 1, catat di `docs/BUGS.md`, satu bug satu commit `fix:`; tangani data `localStorage` rusak atau kosong; fitur dikerjakan di cabang lalu di-merge ke `main` (misal cabang `fix/localstorage-rusak`). | Console bersih di alur utama, minimal 5 commit bermakna, ada bukti merge cabang. |
| P11 | ES Modules | Pecah `src/js/app.js` menjadi `store.js`, `render.js`, `stats.js`, dan `views.js`; `index.html` cukup memuat satu `<script type="module">`; `ui-pustaka.js` menjadi modul yang mengekspor fungsi, bukan variabel global. | Tidak ada variabel global, halaman berjalan dari `file://` dan dari server. |
| P12 | Komponen + simpan aman + perawatan | Kartu tugas dan toolbar filter menjadi komponen yang dapat dipakai ulang; cek skema data saat membaca `localStorage`, tambah cadangan otomatis; tombol ekspor dan impor JSON, pesan bila kuota penuh; perbarui `DEPENDENCIES.md`, mulai `CHANGELOG.md`; tag `v0.4`. | Impor JSON valid mengembalikan data, JSON rusak tidak membuat halaman kosong, tag `v0.4` sudah dibuat. |
| P13 | Konsep produk (Tugas 7) | Tulis konsep produk: visi, pengguna, alur utama, pembeda, dan rencana rilis; mockup halaman utama dan satu halaman fitur memakai komponen pustaka yang sudah ada. | Satu dokumen konsep dan dua mockup, isinya konsisten dengan charter. |
| P14 | Demo akhir | Uji 3 pengguna pada alur MVP, catat waktu dan bagian yang membingungkan; perbaiki temuan kritis; demo: tambah tugas, tandai selesai, buka statistik, hapus tugas. | Demo lancar, laporan uji pengguna dilampirkan, repo bersih. |

## Status per sprint

- **P10 (Sprint 2): selesai.** Dua bug diperbaiki di cabang terpisah lalu
  di-merge ke `main`, yaitu `fix/font-path` (font Inter 404) dan
  `fix/localstorage-rusak` (data `localStorage` rusak membuat halaman berhenti).
  Catatan prosesnya ada di `docs/DEBUG_LOG.md`. Daftar aset proyek ada di
  `assets/manifest.json`, dan tab Network halaman utama sudah tanpa 404.
- Sprint P11 sampai P14: belum dikerjakan.
