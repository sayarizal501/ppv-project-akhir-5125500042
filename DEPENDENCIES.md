# DEPENDENCIES

| Paket | Versi | Cara pasang | Dipakai untuk |
|---|---|---|---|
| Bootstrap CSS | 5.3.3 | CDN jsdelivr, tag link di index.html | reset, modal, toast, badge, spinner |
| Bootstrap JS bundle | 5.3.3 | CDN jsdelivr, tag script sebelum ui-pustaka.js | bootstrap.Modal, bootstrap.Toast |
| Inter | 400, 600, 700 | file lokal di assets/fonts | font halaman |

## Ukuran transfer

Saya ukur dari tab Network DevTools dan header `Content-Length` CDN (gzip):

| Berkas | Ukuran gzip | Ukuran asli |
|---|---|---|
| bootstrap.min.css | ± 30 KB | 227 KB |
| bootstrap.bundle.min.js | ± 23 KB | 79 KB |
| Total Bootstrap | ± 53 KB | 306 KB |

Dibandingin sama total halaman (HTML, CSS sendiri, gambar, font lokal) yang
lebih dari 500 KB, pustaka ini masih di bawah sepertiga muat halaman.
Popper.js juga udah ikut di bundle, jadi nggak ada file lain yang keunduh.

## Empat pertanyaan yang saya jawab dulu sebelum pasang

1. **Masalahnya apa?** Modal konfirmasi dan toast harus bisa difokus pakai
   keyboard, bisa ditutup pakai Esc, dan tampil di paling atas. Kalau saya
   tulis sendiri, manajemen fokusnya gampang bocor dan jadi bug aksesibilitas.
2. **Pustaka ini jawabannya?** Iya. Bootstrap udah punya modal, toast, badge,
   sama spinner yang udah diuji lintas browser, tinggal panggil kelasnya.
3. **Berapa biayanya?** Sekitar 53 KB gzip total (tabel di atas), cuma
   diunduh sekali karena cache CDN. Setara satu foto kecil.
4. **Kalau nanti pengen ganti gimana?** API Bootstrap cuma dipanggil dari
   `src/ui/ui-pustaka.js` (aturannya ada di bawah), jadi ganti pustaka berarti
   edit satu file itu aja, nggak perlu menyisir seluruh `app.js`.

Nggak ada npm, nggak ada build step.

## Aturan versi

- URL CDN pakai versi lengkap `@5.3.3`, jangan `@latest` atau `@5`, biar
  tampilan nggak berubah sendiri pas demo.
- Kalau sempat mau naik versi: ganti URL CSS dan JS bersamaan, uji modal,
  toast, badge, dan spinner-nya, terus update tabel ini.
- Kalau demo tanpa internet: unduh `bootstrap.min.css` dan
  `bootstrap.bundle.min.js` ke `assets/vendor/`, ganti URL CDN jadi path
  lokal. File lain nggak usah diubah.

## Batas pemakaian

Cuma `src/ui/ui-pustaka.js` yang manggil API JavaScript Bootstrap.
`src/js/app.js` tinggal manggil `UI.konfirmasi()` dan `UI.beriPesan()`. Jadi
pustakanya diganti pun, yang diedit cuma satu file itu.
