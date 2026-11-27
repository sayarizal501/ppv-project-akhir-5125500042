# Changelog TugasKu

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.1.0/),
versi mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [1.0.0] - 2026-11-27

Rilis demo akhir (P14). Aplikasi tidak berubah perilakunya; yang ditambahkan
adalah alat demo, bukti uji, dan bahan presentasi.

### Added
- `demo-kit.js` dan pengaturan `window.DEMO_KIT` di `index.html`: tombol Isi
  contoh (6 tugas, 2 selesai) dan Reset yang hanya aktif pada `?demo=1`.
- Pengatur waktu demo yang berubah oranye pada menit ke-5 dan merah pada menit
  ke-7.
- `docs/LAPORAN_DEMO_AKHIR.md`: laporan persiapan demo, hasil uji kit, skenario
  5-7 menit, potongan kode andalan, dan jawaban pertanyaan seribu pengguna.
- `docs/UJI_USABILITY_P14.md`: protokol dan formulir uji 3 pengguna.
- `docs/slide-demo-akhir.html` dan `docs/slide-demo-akhir.pdf`: 10 slide demo.
- `docs/video/demo-cadangan-60detik.mp4`: rekaman cadangan alur utama.
- Tangkapan layar panel demo, spanduk kesalahan, dan timer menit ke-5/ke-7 di
  `docs/screenshots/`.

### Changed
- `src/css/style.css`: panel demo menjadi bilah penuh di atas halaman supaya
  tidak menutup navigasi dan formulir.
- `README.md`: bagian Mode demo.
- `docs/konsep/konsep.js`: alasan tiap fitur ditulis ulang lebih lengkap.

## [0.4.0] - 2026-11-13

### Added
- `src/ui/komponen.js`: komponen `BarisTugas(tugas, opsi)` yang menerima data
  lewat parameter dan mengembalikan elemen `<li>`. Semua item daftar tugas
  memakai komponen ini, jadi markup baris tidak lagi ditulis di `ui.js`.
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
- Toast setelah menyimpan tidak lagi berbunyi "Tugas disimpan." ketika
  penyimpanan gagal; pesannya mengikuti `peringatanPenyimpanan()`.
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
