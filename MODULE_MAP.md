# Peta Modul TugasKu — Sprint 4 (P12)

Titik masuk: `index.html` memuat satu `<script type="module" src="src/js/main.js">`.
Arah dependensi satu jalur, tanpa impor melingkar.

```
main.js ──> state.js ──> storage.js
   │
   └──> ui.js ──> state.js
            ├──> ../ui/komponen.js
            ├──> ../ui/ui-pustaka.js
            └──> storage.js
   └──> views.js ──> ui.js
   └──> ../ui/ui-pustaka.js
```

| Modul | Tanggung jawab (satu kalimat) |
|---|---|
| `src/js/main.js` | Titik masuk yang memvalidasi formulir, memasang semua event, dan menjalankan render awal. |
| `src/js/state.js` | Pemilik data tugas dan mata kuliah beserta aturan tambah, selesai, hapus, saring, dan hitung persentase; bebas DOM. |
| `src/js/storage.js` | Satu-satunya modul yang membaca dan menulis `localStorage`, dengan kunci berversi, penyaringan data, dan cadangan memori. |
| `src/js/ui.js` | Menggambar daftar tugas, pilihan mata kuliah, statistik, animasinya, dan pesan penyimpanan ke DOM. |
| `src/js/views.js` | Mengatur perpindahan antara tampilan Daftar, Statistik, Matkul, dan Tentang. |
| `src/ui/komponen.js` | Komponen `BarisTugas` yang menerima data lewat parameter dan dipakai untuk semua item daftar. |
| `src/ui/ui-pustaka.js` | Satu-satunya modul yang memanggil API Bootstrap untuk modal konfirmasi dan toast. |

## Yang belum dimodulkan

- `index.html`: markup empat tampilan, modal, dan wadah toast. Tetap satu berkas
  karena isinya statis.
- `src/css/style.css`: tampilan halaman; belum dipecah karena belum ada
  komponen visual lain yang dipakai ulang.
- Bootstrap 5.3.3 dari CDN: pustaka pihak ketiga, bukan kode proyek, jadi tidak
  ikut dipecah. Pembungkusnya sudah terisolasi di `src/ui/ui-pustaka.js`.
- `assets/`: gambar dan font statis yang tidak berisi logika.
