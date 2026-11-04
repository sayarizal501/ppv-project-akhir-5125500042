// views.js — mengatur perpindahan tampilan Daftar, Statistik, Matkul, dan Tentang.
import { animasikanStatistik, kurangiGerak } from './ui.js';

let viewAktif = 'daftar';

export function pindahView(nama) {
  if (nama === viewAktif) return;
  viewAktif = nama;
  document.querySelectorAll('.nav button').forEach((b) => {
    if (b.dataset.view === nama) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
  document.querySelectorAll('.view').forEach((v) => {
    const aktif = v.id === `view-${nama}`;
    if (aktif) {
      v.hidden = false;
      if (!kurangiGerak()) { void v.offsetWidth; }
      v.classList.add('aktif');
    } else {
      v.classList.remove('aktif');
      if (kurangiGerak()) { v.hidden = true; return; }
      window.setTimeout(() => { if (!v.classList.contains('aktif')) v.hidden = true; }, 210);
    }
  });
  if (nama === 'statistik') animasikanStatistik();
}
