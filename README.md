# TugasKu

Aplikasi pencatat tugas kuliah berbasis web. Proyek akhir Praktikum Pemrograman
Visual, Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.

Sprint 1 sampai Sprint 3 (P11) sudah selesai. Isi aplikasi berasal dari kode
Tugas 4 yang dipindahkan ke folder `src/` dan ditambahkan Bootstrap. Sejak
Sprint 3 kode dipecah menjadi ES Modules dengan `src/js/main.js` sebagai titik
masuk.

## Cara membuka

Jalankan server lokal dari folder proyek, lalu buka alamatnya di browser:

```bash
python -m http.server 5500
```

Buka <http://127.0.0.1:5500/>. Sejak memakai ES Modules, `index.html` tidak
bisa dibuka langsung dengan klik dua kali (`file://`).

Data tugas dan daftar mata kuliah disimpan di localStorage browser, sehingga
data hanya tersimpan pada browser yang dipakai. Bila browser berganti, data
tidak ikut berpindah.

## Dokumen

- [Charter](docs/CHARTER.md): rencana proyek satu halaman berisi masalah, fitur
  MoSCoW, dan risiko
- [Roadmap](docs/ROADMAP.md): rencana sprint P10 sampai P14
- [BUGS.md](docs/BUGS.md): catatan bug hasil uji sprint
- [DEBUG_LOG.md](docs/DEBUG_LOG.md): proses dua bug Sprint 2 dan perbaikannya
- [DEPENDENCIES.md](DEPENDENCIES.md): pustaka yang dipakai dan alasannya
- [manifest.json](assets/manifest.json): daftar aset beserta jenis, ukuran, dan
  lisensinya

## Isi folder

- `index.html`: halaman utama dengan menu Daftar, Statistik, Matkul, dan Tentang
- `src/css/style.css`: tampilan halaman
- `src/js/main.js`: titik masuk, validasi formulir, dan pemasangan event
- `src/js/state.js`: data tugas dan mata kuliah beserta aturannya
- `src/js/storage.js`: satu-satunya modul yang menyentuh `localStorage`
- `src/js/ui.js`: render daftar tugas, statistik, dan mata kuliah
- `src/js/views.js`: perpindahan antar empat tampilan
- `src/ui/ui-pustaka.js`: satu-satunya modul yang memanggil Bootstrap
- `MODULE_MAP.md`: peta modul dan tanggung jawab tiap modul
- `assets/`: gambar, font, dan manifest aset
- `docs/`: charter, roadmap, catatan bug, dan tangkapan layar

## Bootstrap

Bootstrap 5.3.3 dipasang dari CDN dengan versi lengkap, bukan `@latest`, agar
tampilan tidak berubah saat demo. Bagian yang dipakai baru modal konfirmasi
hapus, toast, badge prioritas, dan spinner. Alasan lengkap serta cara menaikkan
versi tercatat di `DEPENDENCIES.md`.

## Bantuan AI

Bagian ini menandai kode dari sumber lain sesuai catatan integritas Tugas P11.

- **Alat:** OpenCode (asisten koding), model DeepSeek V4.1 Flash.
- **Prompt yang dipakai:** teks tugas P11 butir 5-6 dari ETHOL beserta kode
  `src/js/app.js` hasil Sprint 2, dengan permintaan: "Pecah kode proyek menjadi
  minimal 3 modul ES di `src/`, satu arah tanpa dependensi melingkar, tanpa
  variabel global aplikasi dan tanpa `onclick`, kerjakan di cabang
  `refactor/modul` dengan satu commit `refactor:` per langkah, merge ke `main`,
  lalu jalankan alur MVP sebelum dan sesudah refactor. Perbarui `MODULE_MAP.md`
  dan `ROADMAP.md`."
- **Yang dihasilkan AI:** modul `storage.js`, `state.js`, `ui.js`, `views.js`,
  `main.js` yang dipecah dari `app.js`, serta draf `MODULE_MAP.md`.
- **Pemeriksaan manusia:** kode dibaca ulang, alur MVP dijalankan ulang setelah
  merge, Console diperiksa (0 error, 0 warning), dan tampilan 400 px dicek.
  Kode lama tetap ada di riwayat Git, bukan disalin dari proyek lain.

## Selanjutnya

Rencana P10 sampai P14 ada di `docs/ROADMAP.md`.
