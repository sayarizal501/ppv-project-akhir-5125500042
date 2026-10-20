# DEPENDENCIES

| Paket | Versi | Dipasang bagaimana | Dipakai untuk |
|---|---|---|---|
| Bootstrap CSS | 5.3.3 | CDN jsdelivr, tag link di index.html | reset, modal, toast, badge, spinner |
| Bootstrap JS bundle | 5.3.3 | CDN jsdelivr, tag script sebelum ui-pustaka.js | bootstrap.Modal, bootstrap.Toast |
| Inter | 400, 600, 700 | file lokal di assets/fonts | font halaman |

Tidak ada npm, tidak ada build step.

## Aturan versi

- URL CDN pakai versi lengkap `@5.3.3`, bukan `@latest` atau `@5`, supaya tampilan
  tidak berubah sendiri saat demo.
- Kalau mau naik versi: ganti URL CSS dan JS bersamaan, uji modal, toast, badge, dan
  spinner, lalu perbarui tabel ini.
- Kalau demo tanpa internet: unduh `bootstrap.min.css` dan `bootstrap.bundle.min.js`
  ke `assets/vendor/`, ganti URL CDN jadi path lokal. File lain tidak perlu diubah.

## Batas pemakaian

Hanya `src/ui/ui-pustaka.js` yang memanggil API JavaScript Bootstrap. `src/js/app.js`
cukup memanggil `UI.konfirmasi()` dan `UI.beriPesan()`. Jadi kalau pustaka diganti,
yang diedit cuma satu file itu.
