# TugasKu

Aplikasi pencatat tugas kuliah berbasis web. Proyek akhir Praktikum Pemrograman
Visual, Iqgam Afrizal (5125500042), D3 Teknologi Multimedia dan Broadcasting.

Sprint 1 sampai Sprint 4 (P12) sudah selesai. Isi aplikasi berasal dari kode
Tugas 4 yang dipindahkan ke folder `src/` dan ditambahkan Bootstrap. Sejak
Sprint 3 kode dipecah menjadi ES Modules dengan `src/js/main.js` sebagai titik
masuk. Sprint 4 menambahkan komponen baris tugas yang dipakai ulang dan
penyimpanan aman berkunci versi.

## Cara menjalankan

Jalankan server lokal dari folder proyek, lalu buka alamatnya di browser:

```bash
python -m http.server 5500
```

Buka <http://127.0.0.1:5500/>. Sejak memakai ES Modules, `index.html` tidak
bisa dibuka langsung dengan klik dua kali (`file://`).

Data tugas dan daftar mata kuliah disimpan di localStorage browser, sehingga
data hanya tersimpan pada browser yang dipakai. Bila browser berganti, data
tidak ikut berpindah.

## Fitur MVP dan status

| Fitur | Status | Keterangan |
|---|---|---|
| Tambah tugas (nama, mata kuliah, deadline, prioritas) | Selesai | Validasi wajib isi, minimal 3 huruf, deadline tidak boleh lampau. |
| Tandai selesai / batal selesai | Selesai | Perubahan langsung disimpan. |
| Hapus tugas | Selesai | Memakai modal konfirmasi, bukan `confirm()` bawaan. |
| Cari dan filter tugas | Selesai | Cari nama/mata kuliah; filter semua, aktif, selesai, prioritas tinggi. |
| Statistik progres | Selesai | Persentase, jumlah selesai/total, progress bar. |
| Kelola mata kuliah | Selesai | Tambah dan hapus mata kuliah; minimal satu mata kuliah. |
| Komponen baris tugas reusable | Selesai (Sprint 4) | `BarisTugas` dipakai untuk semua item daftar. |
| Penyimpanan aman berkunci versi | Selesai (Sprint 4) | Kunci `tugasku:tugas:v1` dan `tugasku:matkul:v1`. |
| Ekspor/impor JSON | Belum | Direncanakan setelah Sprint 4. |

## Struktur modul

```
index.html
src/css/style.css
src/js/main.js  -> state.js -> storage.js
src/js/ui.js    -> state.js, ../ui/komponen.js, ../ui/ui-pustaka.js
src/js/views.js -> ui.js
src/ui/komponen.js
src/ui/ui-pustaka.js
```

| Berkas | Tanggung jawab |
|---|---|
| `src/js/main.js` | Titik masuk: validasi formulir, pemasangan event, render awal. |
| `src/js/state.js` | Data tugas dan mata kuliah beserta aturan tambah, selesai, hapus, saring, dan statistik; bebas DOM. |
| `src/js/storage.js` | Satu-satunya modul yang membaca dan menulis localStorage; kunci berversi, penyaringan data, cadangan memori. |
| `src/js/ui.js` | Menggambar daftar tugas, pilihan mata kuliah, statistik, dan pesan penyimpanan. |
| `src/js/views.js` | Perpindahan antara tampilan Daftar, Statistik, Matkul, dan Tentang. |
| `src/ui/komponen.js` | Komponen tampilan reusable; teks pengguna lewat `textContent`. |
| `src/ui/ui-pustaka.js` | Satu-satunya modul yang memanggil API Bootstrap (modal dan toast). |

## Kontrak komponen

```js
BarisTugas(tugas, { onSelesai, onHapus, onFokus, animasi }) -> HTMLElement
```

- `tugas`: `{ id: number, nama: string, mk: string, deadline: string,
  prio: 'Tinggi'|'Sedang'|'Rendah', done: boolean }`.
- `onSelesai(id)`, `onHapus(tugas, elemen)`, dan `onFokus(tugas|null)` adalah
  callback opsional. `animasi` bernilai `true` hanya untuk baris yang baru
  ditambahkan.
- Komponen mengembalikan `<li>` berisi nama, mata kuliah, deadline, badge
  prioritas, tombol Selesai/Batal, dan tombol Hapus.
- Nama dan mata kuliah ditulis lewat `textContent`, sehingga `<b>tebal</b>`
  tampil sebagai teks biasa.

## Kontrak penyimpanan

- `KUNCI_TUGAS = 'tugasku:tugas:v1'`, `KUNCI_MATKUL = 'tugasku:matkul:v1'`.
- `muatTugas()` dan `muatMatkul()` membaca localStorage setiap panggilan,
  menyaring item yang tidak sesuai skema, dan tidak pernah melempar galat.
  Bila penyimpanan diblokir, fungsi mengembalikan cadangan di memori.
- `simpanTugas(data)` dan `simpanMatkul(data)` memakai try/catch; bila kuota
  penuh atau penyimpanan diblokir, data tetap ada di memori dan
  `peringatanPenyimpanan()` berisi pesan untuk pengguna.
- Data lama di kunci `tugas` dan `matkul` dimigrasikan sekali jalan ke kunci
  berversi, lalu kunci lama dihapus.

## Uji ketahanan Sprint 4

| No | Skenario | Hasil |
|---|---|---|
| P-S2 | Isi `tugasku:tugas:v1` dengan `{rusak`, lalu muat ulang | Aplikasi tetap terbuka, daftar kosong, pesan "Data tersimpan rusak dan diabaikan." tampil, tugas baru bisa ditambah. |
| P-S5 | Isi dengan `[null, 5, {"judul": 7}, satu tugas sah]` | Hanya tugas sah yang tampil (lihat tabel uji manual di laporan). |
| P-S6 | `localStorage.setItem` dibuat melempar `QuotaExceededError`, lalu tambah tugas | Aplikasi tetap berjalan, tugas tampil dari memori, pesan "Penyimpanan browser tidak tersedia..." tampil. |

## Dokumen

- [Changelog](CHANGELOG.md): riwayat versi v0.1.0 sampai v0.4.0
- [Roadmap](docs/ROADMAP.md): rencana sprint P10 sampai P14 dan status Sprint 4
- [Charter](docs/CHARTER.md): masalah, fitur MoSCoW, dan risiko
- [BUGS.md](docs/BUGS.md): catatan bug hasil uji sprint
- [DEBUG_LOG.md](docs/DEBUG_LOG.md): proses dua bug Sprint 2 dan perbaikannya
- [MODULE_MAP.md](MODULE_MAP.md): peta modul dan tanggung jawab
- [DEPENDENCIES.md](DEPENDENCIES.md): pustaka yang dipakai dan alasannya
- [manifest.json](assets/manifest.json): daftar aset beserta lisensinya

## Tag versi

| Tag | Isi |
|---|---|
| `v0.4.0` | Komponen `BarisTugas` + penyimpanan aman berkunci versi (Sprint 4) |

## Kredit aset dan pustaka

- Bootstrap 5.3.3 dari CDN jsDelivr (MIT), alasan pemakaian dan cara menaikkan
  versi ada di `DEPENDENCIES.md`.
- Font Inter (SIL Open Font License 1.1) di `assets/fonts/`.
- `assets/images/hero.svg` dan `assets/images/ikon-tugas.svg`: gambar vektor
  buatan sendiri untuk proyek ini.
- AI: kode Sprint 4 saya kerjakan dengan bantuan OpenCode (model DeepSeek
  V4.1). Perintah yang saya pakai: "Terapkan komponen reusable `BarisTugas` dan
  penyimpanan aman berkunci versi pada proyek TugasKu, lalu uji dua skenario
  data rusak." Kodenya saya baca ulang dan uji di browser.
