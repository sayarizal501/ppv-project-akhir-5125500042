# TugasKu

Aplikasi buat mencatat tugas kuliah. Proyek akhir Praktikum Pemrograman Visual,
Iqgam Afrizal (5125500042).

Sekarang baru sprint 1. Isinya kode Tugas 4 yang saya pindahkan ke folder `src/`
dan saya kasih Bootstrap.

## Cara buka

Klik `index.html` dua kali. Kalau mau lewat server:

```
python -m http.server 8000
```

Tugas dan daftar matkul disimpan di localStorage browser, jadi datanya cuma ada
di browser yang dipakai.

## Isi folder

- `index.html` halaman utama, menunya ada Daftar, Statistik, Matkul, dan Tentang
- `src/css/style.css` tampilan halaman
- `src/js/app.js` logika aplikasi
- `src/ui/ui-pustaka.js` cuma file ini yang manggil Bootstrap
- `assets/` gambar dan font
- `docs/` charter, roadmap, catatan bug, screenshot

## Bootstrap

Saya pakai Bootstrap 5.3.3 dari CDN. Versinya saya tulis lengkap biar tampilan
tidak berubah tiba-tiba. Yang dipakai baru modal buat konfirmasi hapus, toast,
badge prioritas, dan spinner. Cara pasang dan cara naik versi saya catat di
`DEPENDENCIES.md`.

## Bantuan AI

Bagian mindahin file ke `src/`, pasang Bootstrap, bikin `ui-pustaka.js`, dan nulis
dokumen di `docs/` saya kerjakan dibantu AI. Kode Tugas 4 saya tulis sendiri.
Semua hasilnya sudah saya buka dan coba di browser.

## Selanjutnya

Rencana P10 sampai P14 ada di `docs/ROADMAP.md`.
