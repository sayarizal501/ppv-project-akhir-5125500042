// storage.js — satu-satunya modul yang membaca dan menulis localStorage.
export const MK_AWAL = ['PRAKTIKUM ANIMASI 2D', 'ANIMASI 2D', 'SISTEM PEMANCAR', 'PRAKTIKUM SISTEM PEMANCAR', 'WORKSHOP UI/UX', 'PEMROGRAMAN VISUAL', 'JURNALISTIK', 'PRAKTIKUM PEMROGRAMAN VISUAL', 'JARINGAN KOMPUTER', 'PRAKTIKUM JARINGAN KOMPUTER', 'TEKNIK PENYIARAN', 'PRODUKSI KONTEN DIGITAL'];

export function muatTugas() {
  try {
    const data = JSON.parse(localStorage.getItem('tugas') || '[]');
    return Array.isArray(data) ? data.filter((t) => t && typeof t.nama === 'string' && typeof t.id === 'number') : [];
  } catch {
    return [];
  }
}

export function simpanTugas(tugas) {
  localStorage.setItem('tugas', JSON.stringify(tugas));
}

export function muatMatkul() {
  try {
    const data = JSON.parse(localStorage.getItem('matkul') || 'null');
    return Array.isArray(data) && data.length ? data : [...MK_AWAL];
  } catch {
    return [...MK_AWAL];
  }
}

export function simpanMatkul(matkul) {
  localStorage.setItem('matkul', JSON.stringify(matkul));
}
