# TugasKu

Aplikasi pencatat tugas kuliah berbasis web. Proyek akhir Praktikum Pemrograman
Visual, Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.

Sprint 1 dan Sprint 2 (P10) sudah selesai. Isi aplikasi berasal dari kode
Tugas 4 yang dipindahkan ke folder `src/` dan ditambahkan Bootstrap.

## Cara membuka

Buka berkas `index.html` di browser (Chrome atau Edge).

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
- `src/js/app.js`: logika aplikasi
- `src/ui/ui-pustaka.js`: satu-satunya berkas yang memanggil Bootstrap
- `assets/`: gambar, font, dan manifest aset
- `docs/`: charter, roadmap, catatan bug, dan tangkapan layar

## Bootstrap

Bootstrap 5.3.3 dipasang dari CDN dengan versi lengkap, bukan `@latest`, agar
tampilan tidak berubah saat demo. Bagian yang dipakai baru modal konfirmasi
hapus, toast, badge prioritas, dan spinner. Alasan lengkap serta cara menaikkan
versi tercatat di `DEPENDENCIES.md`.

## Bantuan AI

Kode Tugas 4 ditulis sendiri. Bantuan AI dipakai untuk memindahkan berkas ke
`src/`, memasang Bootstrap, membuat `ui-pustaka.js`, dan merapikan dokumen di
`docs/`. Semua hasilnya tetap dibuka dan diuji di browser sampai berjalan.

Inti permintaan yang dipakai:

- "Kode Tugas 4 ada di satu folder, pindahkan ke struktur src/css, src/js, dan
  src/ui tanpa mengubah perilakunya."
- "Pasang Bootstrap 5.3.3 lewat CDN. Perhatikan urutan: style.css harus dimuat
  sesudah bootstrap."
- "Buat src/ui/ui-pustaka.js berisi konfirmasi hapus (modal) dan pesan singkat
  (toast). app.js tidak boleh memanggil bootstrap langsung."
- "Rapikan README ini, bahasanya jangan terlalu kaku."

## Selanjutnya

Rencana P10 sampai P14 ada di `docs/ROADMAP.md`.
