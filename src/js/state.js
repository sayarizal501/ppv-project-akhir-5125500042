// state.js — pemilik data tugas dan mata kuliah beserta aturannya; bebas DOM.
import { muatTugas, simpanTugas, muatMatkul, simpanMatkul } from './storage.js';

let tugas = muatTugas();
let matkul = muatMatkul();
let idSeq = tugas.reduce((m, t) => Math.max(m, t.id || 0), 0) + 1;

const bobotPrio = { Tinggi: 0, Sedang: 1, Rendah: 2 };

export const semuaTugas = () => tugas;
export const semuaMatkul = () => matkul;

export function tambahTugas({ nama, mk, deadline, prio }) {
  const id = idSeq++;
  tugas.unshift({ id, nama, mk, deadline, prio, done: false });
  simpanTugas(tugas);
  return id;
}

export function alihSelesai(id) {
  const t = tugas.find((x) => x.id === id);
  if (!t) return;
  t.done = !t.done;
  simpanTugas(tugas);
}

export function hapusTugas(id) {
  tugas = tugas.filter((x) => x.id !== id);
  simpanTugas(tugas);
}

export function tambahMatkul(nama) {
  matkul.push(nama);
  simpanMatkul(matkul);
}

export function hapusMatkul(nama) {
  matkul = matkul.filter((x) => x !== nama);
  simpanMatkul(matkul);
}

export function saringTugas(kata, filter) {
  const q = kata.trim().toLowerCase();
  return tugas.filter((t) => {
    if (!`${t.nama} ${t.mk}`.toLowerCase().includes(q)) return false;
    if (filter === 'aktif') return !t.done;
    if (filter === 'selesai') return t.done;
    if (filter === 'Tinggi') return t.prio === 'Tinggi';
    return true;
  }).sort((a, b) => (bobotPrio[a.prio] - bobotPrio[b.prio]) || (b.id - a.id));
}

export function persenSelesai() {
  if (!tugas.length) return 0;
  return Math.round((tugas.filter((t) => t.done).length / tugas.length) * 100);
}

export const jumlahSelesai = () => tugas.filter((t) => t.done).length;
