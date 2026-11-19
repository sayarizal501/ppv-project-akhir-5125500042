// konsep.js — data konsep produk TugasKu untuk halaman konsep Tugas 7.
// Status "selesai" menunjuk commit/tag di repositori ppv-project-akhir-5125500042.
const KONSEP = {
  nama: 'TugasKu',
  tagline: 'Catat tugas kuliah dalam 30 detik, tanpa akun.',
  persona: {
    nama: 'Dimas Arya, 20 tahun',
    siapa: 'Mahasiswa D3 Teknologi Multimedia dan Broadcasting semester 3 dengan 12 mata kuliah dan satu kepanitiaan.',
    keseharian: 'Kuliah dan praktikum dari pagi sampai sore, mengecek tugas dari ponsel di sela perjalanan dan malam hari dengan koneksi kos yang lambat.',
    masalah: 'Deadline dari 12 mata kuliah dan kelompok datang lewat chat kelas, chat grup, dan kertas; tugas sering baru diingat sehari sebelum tenggat.',
  },
  masalah: 'Deadline tugas tersebar di chat kelas, chat kelompok, dan kertas. Saat minggu sibuk, catatan itu tidak terbaca bersamaan sehingga ada tugas yang terlewat dan prioritas tertukar. Tidak ada satu tempat untuk melihat sisa tugas dan yang sudah selesai.',
  solusi: 'TugasKu mencatat tugas beserta mata kuliah, deadline, dan prioritas di satu halaman web yang tersimpan di browser tanpa akun. Daftar bisa dicari dan disaring, tugas bisa ditandai selesai atau dihapus dengan konfirmasi, dan statistik menunjukkan persentase yang sudah selesai. Data tetap ada setelah halaman dimuat ulang.',
  fitur: [
    { nama: 'Tambah tugas dengan validasi nama, mata kuliah, deadline, dan prioritas', prioritas: 'wajib', alasan: 'Inti alur; target ≤30 detik dan ≤6 interaksi per tugas. Selesai di 3ff624b dan ikut tag v0.4.0.' },
    { nama: 'Tandai selesai/batal dan hapus dengan konfirmasi', prioritas: 'wajib', alasan: 'Daftar harus mencerminkan kenyataan dan hapus tak sengaja harus dicegah. Selesai di 3ff624b; modal konfirmasi di f8549e2.' },
    { nama: 'Daftar tetap ada setelah reload', prioritas: 'wajib', alasan: 'Tanpa ini catatan hilang saat tab ditutup. Selesai di 3ff624b, diperkuat kunci berversi dan cadangan memori di 1fde1ae (tag v0.4.0).' },
    { nama: 'Cari, saring, dan statistik progres', prioritas: 'wajib', alasan: 'Cara tercepat menemukan tugas mendesak dan melihat progres. Selesai di 3ff624b; statistik dirapikan di 61271e5.' },
    { nama: 'Kelola mata kuliah sendiri', prioritas: 'sebaiknya', alasan: 'Daftar mata kuliah berubah tiap semester; tanpa ini formulir memakai daftar contoh. Selesai di 3ff624b.' },
    { nama: 'Badge prioritas dan pesan simpan/hapus', prioritas: 'sebaiknya', alasan: 'Prioritas tinggi perlu terlihat sekilas dan pengguna perlu tahu data tersimpan. Selesai di c06bbe8.' },
    { nama: 'Tampilan rapi pada layar 400 px', prioritas: 'sebaiknya', alasan: 'Pengguna utama membuka dari ponsel. Sudah dicek di 3ff624b dan dijaga tiap sprint.' },
    { nama: 'Ekspor dan impor JSON', prioritas: 'sebaiknya', alasan: 'Cadangan bila localStorage dibersihkan atau browser berganti, sesuai risiko di charter. Belum dikerjakan; dijadwalkan setelah v0.4.0.' },
    { nama: 'Login dan akun pengguna', prioritas: 'belum', alasan: 'Menambah friksi dan data pribadi tanpa menguji nilai utama; satu pengguna per browser sudah cukup. Tidak dibuat.' },
    { nama: 'Sinkron antar perangkat, backend, dan notifikasi push', prioritas: 'belum', alasan: 'Butuh server, biaya, dan izin notifikasi; belum menjawab masalah utama. Tidak dibuat (Won\'t di charter P09).' },
    { nama: 'Mode gelap dan pintasan keyboard lengkap', prioritas: 'belum', alasan: 'Kosmetik dan kenyamanan; Ctrl+K untuk fokus formulir sudah ada, sisanya ditunda sampai alur inti terbukti.' },
    { nama: 'Aplikasi mobile native', prioritas: 'belum', alasan: 'Web responsif sudah cukup untuk layar 400 px; toko aplikasi menambah beban rilis. Tidak dibuat.' },
  ],
  pembanding: [
    { nama: 'Google Tasks', kelebihan: 'Gratis, tersinkron di semua perangkat, dan terhubung ke Gmail serta Kalender.', kekurangan: 'Wajib akun Google, butuh internet saat pertama, dan tidak punya statistik per mata kuliah.' },
    { nama: 'Todoist', kelebihan: 'Fitur lengkap: prioritas, label, pengingat, dan tampilan proyek.', kekurangan: 'Wajib akun, sebagian fitur berbayar, dan berat untuk kebutuhan satu kelas.' },
    { nama: 'Catatan bawaan ponsel', kelebihan: 'Sudah terpasang dan bisa dibuka tanpa koneksi.', kekurangan: 'Tidak punya deadline, prioritas, atau rekap progres; catatan mudah tercecer.' },
  ],
  pembeda: 'Satu halaman statis tanpa akun dan tanpa server: data tinggal di browser, dibuka dari tautan mana pun, dan alur tambah tugas dijaga di bawah 30 detik.',
};
