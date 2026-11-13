// storage.js — satu-satunya modul yang membaca dan menulis localStorage.
export const KUNCI_TUGAS = 'tugasku:tugas:v1';
export const KUNCI_MATKUL = 'tugasku:matkul:v1';
const KUNCI_LAMA_TUGAS = 'tugas';
const KUNCI_LAMA_MATKUL = 'matkul';
const PESAN_BLOKIR = 'Penyimpanan browser tidak tersedia; perubahan hanya bertahan di memori.';

export const MK_AWAL = ['PRAKTIKUM ANIMASI 2D', 'ANIMASI 2D', 'SISTEM PEMANCAR', 'PRAKTIKUM SISTEM PEMANCAR', 'WORKSHOP UI/UX', 'PEMROGRAMAN VISUAL', 'JURNALISTIK', 'PRAKTIKUM PEMROGRAMAN VISUAL', 'JARINGAN KOMPUTER', 'PRAKTIKUM JARINGAN KOMPUTER', 'TEKNIK PENYIARAN', 'PRODUKSI KONTEN DIGITAL'];

let cadanganTugas = [];
let cadanganMatkul = [...MK_AWAL];
let pesan = '';

export const peringatanPenyimpanan = () => pesan;

const tugasSah = (t) =>
  t !== null && typeof t === 'object' &&
  typeof t.id === 'number' &&
  typeof t.nama === 'string' && t.nama.trim() !== '' &&
  typeof t.mk === 'string' &&
  typeof t.deadline === 'string' &&
  ['Tinggi', 'Sedang', 'Rendah'].includes(t.prio) &&
  typeof t.done === 'boolean';

const matkulSah = (m) => typeof m === 'string' && m.trim() !== '';

function saringTugas(data) {
  return Array.isArray(data) ? data.filter(tugasSah) : [];
}

function saringMatkul(data) {
  const daftar = Array.isArray(data) ? data.filter(matkulSah) : [];
  return daftar.length ? daftar : [...MK_AWAL];
}

function tulis(kunci, data) {
  try {
    localStorage.setItem(kunci, JSON.stringify(data));
    pesan = '';
    return true;
  } catch {
    pesan = PESAN_BLOKIR;
    return false;
  }
}

// Baca kunci baru; bila belum ada, pindahkan sekali jalan dari kunci lama.
function baca(kunci, kunciLama, saring, cadangan) {
  let isi;
  try {
    isi = localStorage.getItem(kunci);
  } catch {
    pesan = PESAN_BLOKIR;
    return cadangan;
  }

  if (isi === null) {
    try {
      const lama = localStorage.getItem(kunciLama);
      if (lama !== null) {
        const data = saring(JSON.parse(lama));
        tulis(kunci, data);
        localStorage.removeItem(kunciLama);
        return data;
      }
    } catch { /* kunci lama tidak terbaca: anggap belum ada data */ }
    return cadangan;
  }

  try {
    const mentah = JSON.parse(isi);
    const data = saring(mentah);
    pesan = Array.isArray(mentah) ? '' : 'Data tersimpan rusak dan diabaikan.';
    return data;
  } catch {
    pesan = 'Data tersimpan rusak dan diabaikan.';
    return [];
  }
}

export function muatTugas() {
  cadanganTugas = baca(KUNCI_TUGAS, KUNCI_LAMA_TUGAS, saringTugas, cadanganTugas);
  return cadanganTugas;
}

export function simpanTugas(tugas) {
  cadanganTugas = tugas;
  tulis(KUNCI_TUGAS, tugas);
}

export function muatMatkul() {
  cadanganMatkul = baca(KUNCI_MATKUL, KUNCI_LAMA_MATKUL, saringMatkul, cadanganMatkul);
  return cadanganMatkul;
}

export function simpanMatkul(matkul) {
  cadanganMatkul = matkul;
  tulis(KUNCI_MATKUL, matkul);
}
