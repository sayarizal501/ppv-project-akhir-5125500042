# Peta Modul TugasKu — Sprint 3 (P11)

Titik masuk: `index.html` memuat satu `<script type="module" src="src/js/main.js">`.
Arah dependensi satu jalur, tanpa impor melingkar.

```
main.js ──> state.js ──> storage.js
   │
   ├─────> ui.js ──────> state.js
   │          └────────> ui-pustaka.js
   ├─────> views.js ───> ui.js
   └─────> ui-pustaka.js
```

| Modul | Tanggung jawab (satu kalimat) |
|---|---|
| `src/js/main.js` | Titik masuk yang memvalidasi formulir, memasang semua event, dan menjalankan render awal. |
| `src/js/state.js` | Pemilik data tugas dan mata kuliah beserta aturan tambah, selesai, hapus, saring, dan hitung persentase; bebas DOM. |
| `src/js/storage.js` | Satu-satunya modul yang membaca dan menulis `localStorage`, termasuk memulihkan data yang rusak. |
| `src/js/ui.js` | Menggambar daftar tugas, pilihan mata kuliah, statistik, dan animasinya ke DOM. |
| `src/js/views.js` | Mengatur perpindahan antara tampilan Daftar, Statistik, Matkul, dan Tentang. |
| `src/ui/ui-pustaka.js` | Satu-satunya modul yang memanggil API Bootstrap untuk modal konfirmasi dan toast. |

## Yang belum dimodulkan

- `index.html`: markup empat tampilan, modal, dan wadah toast. Tetap satu berkas
  karena isinya statis dan belum perlu komponen.
- `src/css/style.css`: tampilan halaman; belum dipecah karena belum ada
  komponen visual yang dipakai ulang.
- Bootstrap 5.3.3 dari CDN: pustaka pihak ketiga, bukan kode proyek, jadi tidak
  ikut dipecah. Pembungkusnya sudah terisolasi di `src/ui/ui-pustaka.js`.
- `assets/`: gambar dan font statis yang tidak berisi logika.
