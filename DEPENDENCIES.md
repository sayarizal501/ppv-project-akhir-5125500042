# DEPENDENCIES

| Paket | Versi | Cara pasang | Dipakai untuk |
|-------|-------|-------------|----------------|
| Bootstrap CSS | 5.3.3 (terkunci) | CDN jsdelivr, `<link>` di `index.html` | reset, modal, toast, badge, spinner |
| Bootstrap JS bundle | 5.3.3 (terkunci) | CDN jsdelivr, `<script>` sebelum `src/ui/ui-pustaka.js` | `bootstrap.Modal`, `bootstrap.Toast` |
| Inter | 400/600/700 | lokal, `assets/fonts/*.woff2` | tipografi |

Tanpa build step, tanpa `npm install`. Tidak ada dependensi lain.

## Aturan versi

- URL CDN memakai versi persis (`@5.3.3`), bukan `@latest` atau `@5`, supaya tampilan
  tidak berubah diam-diam saat demo.
- Naik versi = ubah kedua URL (CSS dan JS) bersamaan, lalu uji ulang modal, toast,
  badge, dan spinner, kemudian perbarui tabel ini.
- Bila lab/demo tanpa internet: unduh `bootstrap.min.css` dan `bootstrap.bundle.min.js`
  ke `assets/vendor/`, ganti URL CDN dengan path lokal. Tidak ada perubahan kode lain.

## Batas ketergantungan

Hanya `src/ui/ui-pustaka.js` yang menyentuh API JavaScript Bootstrap. `src/js/app.js`
memanggil `UI.konfirmasi()` dan `UI.beriPesan()`, jadi penggantian pustaka cukup
mengubah satu berkas itu.
