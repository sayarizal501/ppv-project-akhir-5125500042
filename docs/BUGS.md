# BUGS

Daftar bug hasil uji sprint yang dikerjakan pada P10. Satu bug satu commit
`fix:`.

| No | Tanggal | Gejala | Langkah reproduksi | Dugaan penyebab | Status |
|---|---|---|---|---|---|
| BUG-01 | 2026-10-30 | Font Inter gagal dimuat dengan status 404, teks halaman memakai font bawaan sistem | Buka `index.html`, lalu periksa tab Network | Berkas font tidak ada di folder aset | Selesai; alamat font diperbaiki pada `262efb3` |
| BUG-02 | 2026-10-30 | Daftar tugas tidak tampil dan tombol simpan tidak bereaksi | Jalankan `localStorage.setItem('tugas', '{}')` lalu muat ulang halaman | `JSON.parse` gagal membaca data | Selesai; validasi `Array.isArray` ditambahkan pada `0af4d7d` |

Proses penyelidikan kedua bug tersebut ada di `docs/DEBUG_LOG.md`.

Cara mengisi: tambahkan baris setiap kali menemukan bug, tulis langkah
reproduksi yang dapat diulang orang lain, lalu perbarui status setelah
diperbaiki.
