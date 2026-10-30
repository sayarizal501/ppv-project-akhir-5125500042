# DEPENDENCIES

| Paket | Versi | Cara pasang | Dipakai untuk |
|---|---|---|---|
| Bootstrap CSS | 5.3.3 | CDN jsdelivr, tag link di index.html | reset, modal, toast, badge, spinner |
| Bootstrap JS bundle | 5.3.3 | CDN jsdelivr, tag script sebelum ui-pustaka.js | bootstrap.Modal, bootstrap.Toast |
| Inter | 400, 600, 700 | berkas lokal di assets/fonts | font halaman |

## Ukuran transfer

Ukuran diambil dari tab Network DevTools dan header `Content-Length` CDN (gzip):

| Berkas | Ukuran gzip | Ukuran asli |
|---|---|---|
| bootstrap.min.css | sekitar 30 KB | 227 KB |
| bootstrap.bundle.min.js | sekitar 23 KB | 79 KB |
| Total Bootstrap | sekitar 53 KB | 306 KB |

Total halaman, yaitu HTML, CSS sendiri, gambar, dan font lokal, lebih dari
500 KB. Dengan demikian pustaka ini masih di bawah sepertiga ukuran halaman.
Popper.js sudah termasuk di dalam bundle, jadi tidak ada berkas lain yang ikut
diunduh.

## Empat pertanyaan sebelum memilih pustaka

1. **Masalahnya apa?** Modal konfirmasi dan toast harus dapat difokus dengan
   keyboard, dapat ditutup dengan Esc, dan tampil di lapisan paling atas. Bila
   ditulis sendiri, pengelolaan fokus mudah bocor dan menjadi bug aksesibilitas.
2. **Apakah pustaka ini jawabannya?** Ya. Bootstrap sudah menyediakan modal,
   toast, badge, dan spinner yang diuji lintas browser, sehingga cukup memanggil
   kelasnya.
3. **Berapa biayanya?** Sekitar 53 KB gzip total seperti pada tabel di atas, dan
   hanya diunduh sekali karena cache CDN. Setara dengan satu foto kecil.
4. **Bagaimana bila nanti ingin mengganti pustaka?** API Bootstrap hanya
   dipanggil dari `src/ui/ui-pustaka.js`, sehingga penggantian pustaka berarti
   mengubah satu berkas itu saja tanpa menyisir seluruh `app.js`.

Tidak ada npm dan tidak ada build step.

## Aturan versi

- URL CDN memakai versi lengkap `@5.3.3`, bukan `@latest` atau `@5`, agar
  tampilan tidak berubah sendiri saat demo.
- Bila versi dinaikkan: ganti URL CSS dan JS bersamaan, uji modal, toast, badge,
  dan spinner, lalu perbarui tabel ini.
- Bila demo tanpa internet: unduh `bootstrap.min.css` dan
  `bootstrap.bundle.min.js` ke `assets/vendor/`, lalu ganti URL CDN menjadi path
  lokal. Berkas lain tidak perlu diubah.

## Batas pemakaian

Hanya `src/ui/ui-pustaka.js` yang memanggil API JavaScript Bootstrap.
`src/js/app.js` cukup memanggil `UI.konfirmasi()` dan `UI.beriPesan()`. Dengan
demikian, penggantian pustaka hanya menyentuh satu berkas tersebut.
