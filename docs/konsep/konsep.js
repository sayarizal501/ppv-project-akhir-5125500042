// konsep.js - data konsep produk TugasKu untuk halaman konsep Tugas 7.
// Status "selesai" menunjuk commit/tag di repositori ppv-project-akhir-5125500042.
const KONSEP = {
  nama: 'TugasKu',
  tagline: 'Catat tugas kuliah dalam 30 detik, tanpa akun.',
  persona: {
    nama: 'Azcanio Almere, 20 tahun',
    siapa: 'Mahasiswa D4 Teknologi Rekayasa Multimedia semester 3 dengan 12 mata kuliah dan satu kepanitiaan.',
    keseharian: 'Kuliah dan praktikum dari pagi sampai sore, mengecek tugas dari ponsel di sela perjalanan dan malam hari dengan koneksi kos yang lambat.',
    masalah: 'Deadline dari 12 mata kuliah dan kelompok datang lewat chat kelas, chat grup, dan kertas; tugas sering baru diingat sehari sebelum tenggat.',
  },
  masalah: 'Deadline tugas tersebar di chat kelas, chat kelompok, dan kertas. Saat minggu sibuk, catatan itu tidak terbaca bersamaan sehingga ada tugas yang terlewat dan prioritas tertukar. Tidak ada satu tempat untuk melihat sisa tugas dan yang sudah selesai.',
  solusi: 'TugasKu mencatat tugas beserta mata kuliah, deadline, dan prioritas di satu halaman web yang tersimpan di browser tanpa akun. Daftar bisa dicari dan disaring, tugas bisa ditandai selesai atau dihapus dengan konfirmasi, dan statistik menunjukkan persentase yang sudah selesai. Data tetap ada setelah halaman dimuat ulang.',
  fitur: [
    { nama: 'Tambah tugas dengan validasi nama, mata kuliah, deadline, dan prioritas', prioritas: 'wajib', alasan: 'Merupakan inti alur penggunaan karena target penyelesaian satu tugas adalah ≤30 detik dengan ≤6 interaksi. Selesai di 3ff624b dan ikut tag v0.4.0.' },
    { nama: 'Tandai selesai/batal dan hapus dengan konfirmasi', prioritas: 'wajib', alasan: 'Daftar tugas harus mencerminkan kondisi sebenarnya, sedangkan penghapusan tidak sengaja perlu dicegah. Selesai di 3ff624b; modal konfirmasi di f8549e2.' },
    { nama: 'Daftar tetap ada setelah reload', prioritas: 'wajib', alasan: 'Tanpa fitur ini, catatan tugas akan hilang ketika tab atau browser ditutup. Selesai di 3ff624b, diperkuat kunci berversi dan cadangan memori di 1fde1ae (tag v0.4.0).' },
    { nama: 'Cari, saring, dan statistik progres', prioritas: 'wajib', alasan: 'Mempermudah pencarian tugas mendesak dan pemantauan progres penyelesaian. Selesai di 3ff624b; statistik dirapikan di 61271e5.' },
    { nama: 'Kelola mata kuliah sendiri', prioritas: 'sebaiknya', alasan: 'Daftar mata kuliah berubah setiap semester; tanpa fitur ini formulir hanya menggunakan daftar contoh. Selesai di 3ff624b.' },
    { nama: 'Badge prioritas dan pesan simpan/hapus', prioritas: 'sebaiknya', alasan: 'Prioritas tinggi perlu terlihat sekilas dan pengguna perlu memperoleh kepastian bahwa data telah tersimpan. Badge prioritas di 3ff624b; pesan simpan/hapus dirapikan di c06bbe8.' },
    { nama: 'Tampilan rapi pada layar 400 px', prioritas: 'sebaiknya', alasan: 'Pengguna utama mengakses aplikasi melalui ponsel. Sudah dicek di 3ff624b dan dijaga tiap sprint.' },
    { nama: 'Ekspor dan impor JSON', prioritas: 'sebaiknya', alasan: 'Berfungsi sebagai cadangan apabila localStorage dibersihkan atau browser diganti, sesuai risiko pada charter. Naik dari Could sejak Tugas 7; belum dikerjakan, dijadwalkan setelah v0.4.0.' },
    { nama: 'Login dan akun pengguna', prioritas: 'belum', alasan: 'Menambah hambatan dan data pribadi tanpa menguji nilai utama produk; satu pengguna per browser dinilai cukup. Tidak dibuat.' },
    { nama: 'Sinkron antar perangkat, backend, dan notifikasi push', prioritas: 'belum', alasan: 'Membutuhkan server, biaya, dan izin notifikasi sehingga belum menjawab masalah utama. Tidak dibuat (Won\'t di charter P09).' },
    { nama: 'Mode gelap dan pintasan keyboard lengkap', prioritas: 'belum', alasan: 'Merupakan fitur tambahan yang tidak memengaruhi alur utama; turun dari Could pada Tugas 7. Pintasan Ctrl+K untuk memfokuskan formulir sudah tersedia di 3ff624b, sedangkan fitur lainnya ditunda sampai alur inti terbukti.' },
    { nama: 'Aplikasi mobile native', prioritas: 'belum', alasan: 'Web responsif dinilai memadai untuk layar 400 px, sedangkan distribusi melalui toko aplikasi menambah beban rilis. Tidak dibuat.' },
  ],
  pembanding: [
    { nama: 'Google Tasks', kelebihan: 'Gratis, tersinkron di semua perangkat, dan terhubung ke Gmail serta Kalender.', kekurangan: 'Wajib akun Google, butuh internet saat pertama, dan tidak punya statistik per mata kuliah.' },
    { nama: 'Todoist', kelebihan: 'Fitur lengkap: prioritas, label, pengingat, dan tampilan proyek.', kekurangan: 'Wajib akun, sebagian fitur berbayar, dan berat untuk kebutuhan satu kelas.' },
    { nama: 'Catatan bawaan ponsel', kelebihan: 'Sudah terpasang dan bisa dibuka tanpa koneksi.', kekurangan: 'Tidak punya deadline, prioritas, atau rekap progres; catatan mudah tercecer.' },
  ],
  pembeda: 'Satu halaman statis tanpa akun dan tanpa server: data tinggal di browser, dibuka dari tautan mana pun, dan alur tambah tugas dijaga di bawah 30 detik.',
};
