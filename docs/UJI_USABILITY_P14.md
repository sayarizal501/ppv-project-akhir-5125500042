# Uji Usability P14 (3 pengguna)

Dokumen ini dipakai untuk uji terakhir sebelum demo. Tujuannya menguji klaim di
`docs/CHARTER.md`: **minimal 2 dari 3 pengguna berhasil menambah tugas lalu
menandainya selesai tanpa dibantu.**

## Persiapan (5 menit)

1. Jalankan `jalankan.bat`, buka `http://127.0.0.1:5500/?demo=1`.
2. Tekan **Reset** supaya data bersih, lalu tutup panel dengan menghapus
   `?demo=1` dari alamat. Peserta tidak boleh melihat tombol demo.
3. Siapkan stopwatch (HP cukup) dan formulir di bagian bawah halaman ini.
4. Satu peserta satu sesi. Jangan mendampingi, jangan menunjuk tombol.

## Tugas yang diberikan (baca persis seperti ini)

> "Ini aplikasi pencatat tugas kuliah. Tolong tambahkan satu tugas: nama
> **Laporan Praktikum 6**, mata kuliah **Praktikum Pemrograman Visual**,
> deadline minggu depan, prioritas **Tinggi**. Setelah tersimpan, tandai tugas
> itu selesai. Saya tidak akan membantu; kalau bingung, katakan apa yang sedang
> Anda cari."

Setelah selesai, ajukan tiga pertanyaan singkat:

1. Bagian mana yang paling membingungkan tadi?
2. Apakah menurut Anda tugas tadi benar-benar tersimpan? Kenapa?
3. Kalau aplikasi ini dipakai tiap hari, apa yang paling mengganggu?

## Yang dicatat

| Kode | Data | Cara mengukur |
|---|---|---|
| T1 | Waktu menambah tugas | Detik, dari klik pertama sampai toast "Tugas disimpan." |
| T2 | Jumlah interaksi menambah tugas | Hitung klik + ketikan + pilihan, target ≤6 |
| T3 | Berhasil tanpa bantuan | Ya / Tidak |
| T4 | Waktu menandai selesai | Detik, sampai baris berubah status |
| T5 | Kesalahan yang dikatakan peserta | Kutip kalimatnya, jangan diringkas sendiri |

Target charter: T1 ≤30 detik, T2 ≤6 interaksi, T4 wajar (≤10 detik), dan
minimal 2 dari 3 peserta T3 = Ya.

## Formulir hasil

| Peserta | T1 (detik) | T2 (interaksi) | T3 | T4 (detik) | Catatan |
|---|---|---|---|---|---|
| P1 | | | | | |
| P2 | | | | | |
| P3 | | | | | |

Rekap:

- Rata-rata T1: ____ detik (target ≤30)
- Rata-rata T2: ____ interaksi (target ≤6)
- Berhasil tanpa bantuan: ____ dari 3 (target ≥2)
- Temuan baru: ____ (tulis di bawah, lalu perbaiki atau catat sebagai batasan)

## Setelah uji

1. Perbaiki temuan yang muncul di 2 peserta atau lebih. Temuan 1 peserta cukup
   dicatat sebagai batasan.
2. Masukkan angka rekap ke `docs/LAPORAN_DEMO_AKHIR.md` bagian 7 dan ke slide 6.
3. Jalankan `?demo=1` → **Isi contoh** → **Reset** supaya keadaan saat demo
   kembali seperti latihan.
4. Commit, lalu buat tag `v1.0.0`.

## Catatan jujur

Per 27 November 2026 uji ini **belum dijalankan**; yang tersedia baru uji Tugas 4
dengan 2 penguji (Fara dan Nio, 10 Oktober 2026). Angka pada formulir di atas
harus diisi dari sesi sungguhan, bukan dikarang.
