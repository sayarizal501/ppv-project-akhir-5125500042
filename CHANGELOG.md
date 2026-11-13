# Changelog — TugasKu

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.1.0/),
versi mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [0.4.0] - 2026-11-13

### Added
- `src/ui/komponen.js`: komponen `BarisTugas(tugas, opsi)` yang menerima data
  lewat parameter dan mengembalikan elemen `<li>`. Komponen ini dipakai untuk
  semua item daftar tugas, sehingga markup baris tidak lagi ditulis di `ui.js`.
- Pesan penyimpanan `#storageMsg` di halaman Daftar dan fungsi
  `peringatanPenyimpanan()` di `storage.js`.
- `CHANGELOG.md` dan bagian kontrak komponen/penyimpanan di `README.md`.

### Changed
- `src/js/storage.js`: kunci berversi `tugasku:tugas:v1` dan
  `tugasku:matkul:v1`; `muatTugas()`/`muatMatkul()` membaca ulang localStorage
  setiap panggilan, menyaring data rusak, dan tidak pernah melempar galat;
  `simpanTugas()`/`simpanMatkul()` memakai try/catch dan cadangan memori.
- `src/js/ui.js`: daftar tugas dirender lewat `BarisTugas`; status penyimpanan
  ditampilkan ke pengguna.
- `src/css/style.css`: aturan tampil/sembunyi `#storageMsg`.
- `README.md`, `MODULE_MAP.md`, dan `docs/ROADMAP.md` diperbarui untuk Sprint 4.

### Fixed
- Data localStorage rusak (JSON tidak sah, bukan array, atau item tidak sah)
  tidak lagi membuat halaman kosong atau berhenti.
- Penyimpanan penuh atau diblokir tidak lagi melempar galat; pengguna diberi
  pesan bahwa perubahan hanya ada di memori.
- Nama tugas berisi `<b>tebal</b>` tampil sebagai teks, bukan HTML.
- Data lama di kunci `tugas` dan `matkul` dimigrasikan sekali jalan ke kunci
  berversi lalu kunci lama dihapus.

## [0.3.0] - 2026-11-05

### Added
- `MODULE_MAP.md`: peta modul dan tanggung jawab tiap berkas.
- Pemeriksaan ulang alur MVP setelah refactor.

### Changed
- `src/js/app.js` dipecah menjadi `storage.js`, `state.js`, `ui.js`,
  `views.js`, dan `main.js`; `index.html` hanya memuat satu
  `<script type="module">`.
- `src/ui/ui-pustaka.js` menjadi modul ES, bukan variabel global `window.UI`.
- Semua pemasangan event dipindah ke `main.js` dengan delegasi klik.

## [0.2.0] - 2026-11-01

### Added
- Bootstrap 5.3.3 dari CDN untuk modal konfirmasi, toast, badge, dan spinner.
- `assets/manifest.json` dan tangkapan layar proyek di `docs/screenshots/`.
- `docs/BUGS.md` dan `docs/DEBUG_LOG.md` sebagai catatan uji dan perbaikan.

### Fixed
- Path font Inter salah folder sehingga font 404.
- Data `localStorage` rusak membuat aplikasi berhenti saat dimuat.
- Tombol hapus langsung menghapus tanpa konfirmasi; sekarang memakai modal.

## [0.1.0] - 2026-10-20

### Added
- Kode awal aplikasi dari Tugas 4 dipindahkan ke repositori proyek.
- `README.md`, `docs/CHARTER.md`, dan `docs/ROADMAP.md`.
- Halaman Daftar, Statistik, Matkul, dan Tentang dengan data contoh.
