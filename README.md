# TugasKu

Aplikasi buat mencatat tugas kuliah. Proyek akhir Praktikum Pemrograman Visual
saya, Iqgam Afrizal (5125500042), D3 Multimedia Broadcasting.

Baru selesai sprint 1. Isinya masih kode Tugas 4 yang saya pindah ke folder
`src/`.

## Cara buka

Klik `index.html` dua kali udah jalan. Mau pakai server juga boleh:

```
python -m http.server 8000
```

Data tugas dan daftar matkul disimpan di localStorage browser, jadi datanya
nyangkut di browser yang dipakai. Pindah browser, datanya nggak ikut.

## Dokumen

- [Charter](docs/CHARTER.md): rencana proyek satu halaman, isinya masalah, fitur
  MoSCoW, dan risiko
- [Roadmap](docs/ROADMAP.md): rencana sprint P10 sampai P14
- [DEPENDENCIES.md](DEPENDENCIES.md): pustaka yang saya pakai dan alasannya

## Isi folder

- `index.html` halaman utama, menunya Daftar, Statistik, Matkul, dan Tentang
- `src/css/style.css` tampilan halaman
- `src/js/app.js` logika aplikasinya
- `src/ui/ui-pustaka.js` cuma file ini yang manggil Bootstrap
- `assets/` gambar dan font
- `docs/` charter, roadmap, catatan bug, dan screenshot

## Bantuan AI

Kode Tugas 4 saya tulis sendiri. Yang saya dibantu AI: mindahin file ke `src/`,
pasang Bootstrap, bikin `ui-pustaka.js`, dan ngerapin dokumen-dokumen di
`docs/`. Semua hasilnya tetap saya buka dan coba sendiri di browser sampai
bener-bener jalan.

Prompt yang saya pakai (intinya, dibahas per chat sama AI):

- "Saya punya kode Tugas 4 di satu folder, tolong pindahkan ke struktur
  src/css, src/js, src/ui tanpa mengubah perilakunya."
- "Pasang Bootstrap 5.3.3 lewat CDN, inget urutan: style.css harus dimuat
  sesudah bootstrap."
- "Bikin src/ui/ui-pustaka.js isinya konfirmasi hapus (modal) dan pesan
  singkat (toast), app.js jangan manggil bootstrap langsung."
- "Rapikan README ini dong, bahasanya jangan kaku-kaku banget."

## Selanjutnya

Rencana P10 sampai P14 ada di `docs/ROADMAP.md`.
