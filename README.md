# TugasKu

Aplikasi buat mencatat tugas kuliah. Proyek akhir Praktikum Pemrograman Visual,
Iqgam Afrizal (5125500042).

Masalahnya: catatan tugas kuliah terpecah di aplikasi catatan, grup WhatsApp, dan
ingatan, jadinya ada tugas yang lewat sampai nilainya hilang.

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
- `assets/` gambar dan font
- `docs/` charter dan rencana sprint

## Dokumen

- [Charter](docs/CHARTER.md) satu halaman: masalah, sasaran, MoSCoW, risiko
- [Roadmap](docs/ROADMAP.md) rencana sprint P10 sampai P14