// komponen.js: komponen tampilan yang menerima data lewat parameter.
// Semua teks dari pengguna ditulis lewat textContent, bukan innerHTML.
const PRIO = ['Tinggi', 'Sedang', 'Rendah'];

export function BarisTugas(tugas, { onSelesai, onHapus, onFokus, animasi = false } = {}) {
  const li = document.createElement('li');
  if (tugas.done) li.classList.add('done');
  if (tugas.prio === 'Tinggi') li.classList.add('tinggi');

  const kiri = document.createElement('div');
  const judul = document.createElement('strong');
  judul.textContent = tugas.nama;
  const prio = PRIO.includes(tugas.prio) ? tugas.prio : 'Sedang';
  const tag = document.createElement('span');
  tag.className = `badge tag ${prio}`;
  tag.textContent = prio;
  const judulBaris = document.createElement('div');
  judulBaris.className = 'judul-baris';
  judulBaris.append(judul, tag);
  const meta = document.createElement('div');
  meta.className = 'meta';
  const tgl = document.createElement('span');
  tgl.className = 'tgl';
  tgl.textContent = tugas.deadline;
  meta.append(`${tugas.mk} · `, tgl);
  kiri.append(judulBaris, meta);

  const kanan = document.createElement('div');
  kanan.style.display = 'flex';
  kanan.style.gap = '6px';
  kanan.style.alignItems = 'center';

  const tombolSelesai = document.createElement('button');
  tombolSelesai.type = 'button';
  tombolSelesai.className = 'mini';
  tombolSelesai.textContent = tugas.done ? 'Batal' : 'Selesai';
  tombolSelesai.addEventListener('click', () => onSelesai?.(tugas.id));

  const tombolHapus = document.createElement('button');
  tombolHapus.type = 'button';
  tombolHapus.className = 'mini';
  tombolHapus.textContent = 'Hapus';
  tombolHapus.addEventListener('click', () => onHapus?.(tugas, li));

  kanan.append(tombolSelesai, tombolHapus);
  li.append(kiri, kanan);

  if (onFokus) {
    li.addEventListener('mouseover', () => onFokus(tugas));
    li.addEventListener('mouseout', () => onFokus(null));
  }
  if (animasi) {
    li.animate(
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
      { duration: 250, easing: 'ease-out' });
  }
  return li;
}
