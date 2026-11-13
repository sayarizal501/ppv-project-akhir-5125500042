// ui.js — menggambar daftar tugas, statistik, dan mata kuliah ke DOM.
import {
  semuaTugas, semuaMatkul, saringTugas, alihSelesai, hapusTugas,
  hapusMatkul, persenSelesai, jumlahSelesai,
} from './state.js';
import { konfirmasi, beriPesan } from '../ui/ui-pustaka.js';
import { BarisTugas } from '../ui/komponen.js';
import { peringatanPenyimpanan } from './storage.js';

const $ = (id) => document.getElementById(id);
const courseI = $('course'), list = $('taskList'), emptyEl = $('empty'),
  noMatchEl = $('noMatch'), searchI = $('search'), filterI = $('filter'), preview = $('preview'),
  storageMsg = $('storageMsg');

let idAnimasiBaru = null;
let rafStat = null;

export const kurangiGerak = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function getar(el) {
  if (kurangiGerak()) return;
  el.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(0)' }],
    { duration: 300, easing: 'ease-out' });
}

function hapusBaris(t, li) {
  konfirmasi({
    judul: 'Hapus tugas?',
    pesan: `"${t.nama}" akan dihapus dari daftar.`,
    labelAksi: 'Hapus',
    onSetuju: async () => {
      if (!kurangiGerak()) {
        const a = li.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-in' });
        try { await a.finished; } catch { /* abaikan */ }
      }
      hapusTugas(t.id); renderDaftar(); perbaruiStatistik();
      beriPesan('Tugas dihapus.');
    },
  });
}

export function renderDaftar(idBaru = null) {
  if (idBaru !== null) idAnimasiBaru = idBaru;
  preview.textContent = '';
  const shown = saringTugas(searchI.value, filterI.value);
  list.replaceChildren(...shown.map((t) => BarisTugas(t, {
    animasi: t.id === idAnimasiBaru && !kurangiGerak(),
    onSelesai: (id) => { alihSelesai(id); renderDaftar(); perbaruiStatistik(); },
    onHapus: hapusBaris,
    onFokus: (x) => {
      preview.textContent = x
        ? `${x.nama} dari ${x.mk}, deadline ${x.deadline}, prioritas ${x.prio}` : '';
    },
  })));
  idAnimasiBaru = null;
  emptyEl.style.display = semuaTugas().length ? 'none' : 'block';
  noMatchEl.hidden = semuaTugas().length === 0 || shown.length > 0;
  const peringatan = peringatanPenyimpanan();
  storageMsg.textContent = peringatan;
  storageMsg.hidden = peringatan === '';
}

export function renderPilihanMatkul() {
  const pilih = courseI.value;
  courseI.replaceChildren(...semuaMatkul().map((m) => {
    const o = document.createElement('option');
    o.value = m; o.textContent = m;
    return o;
  }));
  if (semuaMatkul().includes(pilih)) courseI.value = pilih;
}

export function renderMatkul() {
  $('matkulList').replaceChildren(...semuaMatkul().map((m) => {
    const li = document.createElement('li');
    const nama = document.createElement('span');
    nama.textContent = m;
    const hapus = document.createElement('button');
    hapus.type = 'button'; hapus.className = 'mini'; hapus.textContent = 'Hapus';
    hapus.addEventListener('click', () => {
      if (semuaMatkul().length <= 1) { $('matkulMsg').textContent = 'Minimal 1 mata kuliah harus ada.'; return; }
      hapusMatkul(m);
      renderPilihanMatkul(); renderMatkul();
    });
    li.append(nama, hapus);
    return li;
  }));
}

export function perbaruiStatistik() {
  const p = persenSelesai();
  $('pct').textContent = p;
  $('doneCount').textContent = jumlahSelesai();
  $('totalCount').textContent = semuaTugas().length;
  $('bar').style.transform = `scaleX(${p / 100})`;
  document.querySelector('.progres').setAttribute('aria-valuenow', String(p));
}

export function animasikanStatistik() {
  if (rafStat) cancelAnimationFrame(rafStat);
  const target = persenSelesai();
  const bar = $('bar'), angka = $('pct');
  document.querySelector('.progres').setAttribute('aria-valuenow', String(target));
  $('doneCount').textContent = jumlahSelesai();
  $('totalCount').textContent = semuaTugas().length;
  if (kurangiGerak()) {
    angka.textContent = target;
    bar.style.transform = `scaleX(${target / 100})`;
    return;
  }
  const awal = performance.now(), dur = 350;
  const dari = parseFloat((bar.style.transform.match(/scaleX\(([\d.]+)\)/) || [0, 0])[1]) || 0;
  const ke = target / 100;
  const step = (nu) => {
    const k = Math.min(1, (nu - awal) / dur);
    const v = dari + (ke - dari) * (1 - Math.pow(1 - k, 3));
    bar.style.transform = `scaleX(${v})`;
    angka.textContent = Math.round(target * k);
    if (k < 1) rafStat = requestAnimationFrame(step);
    else { angka.textContent = target; rafStat = null; }
  };
  rafStat = requestAnimationFrame(step);
}
