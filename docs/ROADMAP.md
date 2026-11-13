# Roadmap P10-P14

Produk: TugasKu. Satu sprint satu minggu, tiap sprint memiliki tema dan hasil
yang dapat didemokan.

| Sprint | Tema | Isi | Dianggap selesai kalau |
|---|---|---|---|
| P10 | Debug + Git | Perbaiki bug dari uji sprint 1, catat di `docs/BUGS.md`, satu bug satu commit `fix:`; tangani data `localStorage` rusak atau kosong; fitur dikerjakan di cabang lalu di-merge ke `main` (misal cabang `fix/localstorage-rusak`). | Console bersih di alur utama, minimal 5 commit bermakna, ada bukti merge cabang. |
| P11 | ES Modules | Pecah `src/js/app.js` menjadi `storage.js`, `state.js`, `ui.js`, `views.js`, dan `main.js`; `index.html` cukup memuat satu `<script type="module">`; `ui-pustaka.js` menjadi modul yang mengekspor fungsi, bukan variabel global. | Tidak ada variabel global, halaman berjalan dari server lokal. |
| P12 | Komponen + simpan aman + perawatan | Ekstrak baris tugas menjadi komponen `BarisTugas` yang dipakai seluruh daftar; baca `localStorage` dengan skema dan KUNCI berversi, cadangan memori, dan pesan bila penyimpanan penuh/diblokir; uji dua skenario rusak; tulis `CHANGELOG.md`; tag `v0.4.0`. | Komponen dipakai di daftar, JSON rusak tidak membuat halaman kosong, dua skenario rusak terbukti, tag `v0.4.0` sudah dibuat. |
| P13 | Konsep produk (Tugas 7) | Tulis konsep produk: visi, pengguna, alur utama, pembeda, dan rencana rilis; mockup halaman utama dan satu halaman fitur memakai komponen pustaka yang sudah ada. | Satu dokumen konsep dan dua mockup, isinya konsisten dengan charter. |
| P14 | Demo akhir | Uji 3 pengguna pada alur MVP, catat waktu dan bagian yang membingungkan; perbaiki temuan kritis; demo: tambah tugas, tandai selesai, buka statistik, hapus tugas. | Demo lancar, laporan uji pengguna dilampirkan, repo bersih. |

## Status per sprint

- **P10 (Sprint 2): selesai.** Dua bug diperbaiki di cabang terpisah lalu
  di-merge ke `main`, yaitu `fix/font-path` (font Inter 404) dan
  `fix/localstorage-rusak` (data `localStorage` rusak membuat halaman berhenti).
  Catatan prosesnya ada di `docs/DEBUG_LOG.md`. Daftar aset proyek ada di
  `assets/manifest.json`, dan tab Network halaman utama sudah tanpa 404.
- **P11 (Sprint 3): selesai.** `src/js/app.js` dipecah menjadi `storage.js`,
  `state.js`, `ui.js`, `views.js`, dan `main.js` di cabang `refactor/modul`,
  lalu di-merge ke `main`. `ui-pustaka.js` sekarang modul ES dan tidak lagi
  memakai `window.UI`. Peta modul ada di `MODULE_MAP.md`. Alur MVP diuji ulang
  setelah refactor: tambah tugas, tandai selesai, cari/filter, statistik,
  tambah/hapus matkul, dan hapus tugas tetap berjalan tanpa galat Console.
- **P12 (Sprint 4): selesai.** Baris tugas diekstrak menjadi komponen
  `BarisTugas` di `src/ui/komponen.js` dan dipakai untuk seluruh item daftar.
  Penyimpanan memakai kunci berversi `tugasku:tugas:v1` dan
  `tugasku:matkul:v1`, menyaring data rusak, dan punya cadangan memori. Dua
  skenario rusak diuji lewat DevTools: S2 (JSON `{rusak`) dan S6 (kuota penuh).
  Riwayat versi ada di `CHANGELOG.md` dan rilis ditandai tag `v0.4.0`.
- Sprint P13 dan P14: belum dikerjakan.
