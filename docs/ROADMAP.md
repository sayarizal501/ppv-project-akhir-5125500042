# ROADMAP P10–P14

Produk: TugasKu. Satu sprint = satu minggu, satu tema, satu hasil yang bisa didemokan.

## P10 — Debug dan Git

- Perbaiki bug hasil uji Sprint 1 (daftar bug di `docs/BUGS.md`, satu bug = satu commit `fix:`).
- Tambah penanganan data rusak di `localStorage` (JSON tidak valid, field hilang).
- Disiplin Git: commit kecil dengan pesan `feat:`/`fix:`/`docs:`, branch per fitur, riwayat bersih.
- **Selesai bila:** nol error Console pada alur utama; `git log` menunjukkan minimal 5 commit bermakna.

## P11 — ES Modules

- Pecah `src/js/app.js` menjadi modul: `store.js` (localStorage), `render.js` (daftar), `stats.js`, `views.js`.
- `index.html` memakai satu `<script type="module" src="src/js/main.js">`.
- `src/ui/ui-pustaka.js` dijadikan modul yang mengekspor API, bukan variabel global.
- **Selesai bila:** tidak ada variabel global selain modul; aplikasi berjalan dari `file://` maupun server statis.

## P12 — Komponen, penyimpanan aman, perawatan

- Komponen daftar tugas dipisah (kartu tugas, toolbar filter) dan dipakai ulang di semua view.
- Penyimpanan aman: validasi skema saat membaca, cadangan otomatis, tombol ekspor/impor JSON, peringatan saat kuota penuh.
- Perawatan: `DEPENDENCIES.md` diperbarui, komentar usang dibuang, CSS dirapikan per bagian.
- **Selesai bila:** impor JSON valid mengembalikan data; JSON rusak tidak membuat halaman blank.

## P13 — Konsep produk (Tugas 7)

- Dokumen konsep: visi produk, pengguna, alur utama, pembeda, dan rencana rilis.
- Mockup halaman utama dan satu halaman fitur memakai komponen pustaka yang sudah ada.
- **Selesai bila:** konsep 1 dokumen + 2 mockup, konsisten dengan charter.

## P14 — Demo akhir

- Uji 3 pengguna terhadap alur MVP, catat waktu dan hambatan.
- Perbaiki temuan kritis, lalu demo: alur tambah → selesai → statistik → hapus.
- **Selesai bila:** demo berjalan tanpa error, laporan uji pengguna terlampir, repo bersih.
