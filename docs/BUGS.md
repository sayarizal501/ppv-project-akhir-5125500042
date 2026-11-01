# BUGS

Daftar bug hasil uji sprint yang dikerjakan pada P10. Satu bug satu commit
`fix:`.

| No | Tanggal | Gejala | Langkah reproduksi | Dugaan penyebab | Status |
|---|---|---|---|---|---|
| BUG-01 | 2026-10-27 | Font Inter gagal dimuat dengan status 404, teks halaman memakai font bawaan sistem | Buka `index.html`, lalu periksa tab Network | Berkas font tidak ada di folder aset | Selesai; alamat font diperbaiki pada `125f308` |
| BUG-02 | 2026-10-29 | Daftar tugas tidak tampil dan tombol simpan tidak bereaksi | Jalankan `localStorage.setItem('tugas', '{}')` lalu muat ulang halaman | `JSON.parse` gagal membaca data | Selesai; validasi `Array.isArray` ditambahkan pada `26b86fc` |

Proses penyelidikan kedua bug tersebut ada di `docs/DEBUG_LOG.md`.
