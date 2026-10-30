# DEBUG_LOG Proyek Akhir (TugasKu) - Sprint 2

Dua bug nyata diperbaiki pada cabang terpisah, lalu masing-masing di-merge ke
`main`. Setiap bug dicatat dengan urutan yang sama: gejala, dugaan awal
(hipotesis), bukti dari DevTools, penyebab, perbaikan, lalu uji ulang. Alat yang
dipakai adalah tab Network untuk masalah aset dan tab Console untuk kesalahan
JavaScript.

## BUG-01: Font Inter gagal dimuat (404)

Gejala: teks halaman memakai font bawaan sistem, bukan Inter. Tab Network
mencatat tiga permintaan yang gagal:

```
GET /src/assets/fonts/inter-latin-400.woff2   404
GET /src/assets/fonts/inter-latin-600.woff2   404
GET /src/assets/fonts/inter-latin-700.woff2   404
```

Hipotesis awal adalah berkas fontnya tidak ada. Hipotesis tersebut gugur karena
folder `assets/fonts/` berisi ketiga berkas itu (47,1 KB, 23,9 KB, dan 23,8 KB).

Penyebabnya ada pada `src/css/style.css` baris 1 sampai 3, yaitu
`url("../assets/fonts/...")`. Karena berkas CSS berada di `src/css/`, alamat
tersebut menunjuk ke `src/assets/fonts/` yang tidak ada.

Perbaikan dilakukan pada cabang `fix/font-path` (commit `262efb3`) dengan
mengubah alamat menjadi `../../assets/fonts/` pada ketiga deklarasi `@font-face`.

Uji ulang: tab Network menampilkan ketiga berkas font dengan status 200 dan teks
halaman tampil memakai Inter.

## BUG-02: Data localStorage rusak membuat halaman berhenti

Gejala: bila `localStorage` berisi kunci `tugas` dengan JSON yang valid tetapi
bukan array (contoh: `{}`), halaman tetap terbuka namun daftar tugas tidak
pernah tampil dan tombol simpan tidak bereaksi. Console menampilkan:

```
Uncaught TypeError: tasks.reduce is not a function
```

Hipotesis awal adalah `JSON.parse` gagal membaca data. Hipotesis tersebut gugur
karena blok `try/catch` pada `src/js/app.js:38` sudah menangani JSON yang tidak
valid.

Penyebabnya, pemeriksaan tersebut hanya menangkap kesalahan sintaks. Nilai `{}`
lolos dari `JSON.parse` lalu langsung dipakai pada baris berikutnya
(`tasks.reduce`), sehingga seluruh kode inisialisasi setelahnya tidak pernah
dijalankan.

Perbaikan dilakukan pada cabang `fix/localstorage-rusak` (commit `0af4d7d`)
dengan menambah pemeriksaan `Array.isArray` dan menyaring setiap entri agar hanya
objek yang memiliki `nama` bertipe string dan `id` bertipe number yang dipakai.

Uji ulang: `localStorage.setItem('tugas', '{}')` kemudian halaman dimuat ulang.
Console bersih, daftar tampil dalam keadaan kosong, dan tugas baru dapat
disimpan.

## Ringkasan

| Bug | Alat | Berkas:baris | Commit fix | Merge |
|---|---|---|---|---|
| BUG-01 | Network | src/css/style.css:1-3 | `262efb3` | `bb7bda7` |
| BUG-02 | Console | src/js/app.js:38 | `0af4d7d` | `a4a2f21` |
