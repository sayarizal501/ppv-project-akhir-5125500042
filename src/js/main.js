// main.js — titik masuk: validasi formulir, pemasangan event, dan render awal.
import { tambahTugas, tambahMatkul, semuaMatkul } from './state.js';
import {
  renderDaftar, renderPilihanMatkul, renderMatkul, perbaruiStatistik, getar, kurangiGerak,
} from './ui.js';
import { pindahView } from './views.js';
import { peringatanPenyimpanan } from './storage.js';
import { beriPesan } from '../ui/ui-pustaka.js';

const $ = (id) => document.getElementById(id);
const form = $('taskForm'), nameI = $('taskName'), courseI = $('course'),
  deadI = $('deadline'), prioI = $('priority'), loadEl = $('loading'),
  searchI = $('search'), filterI = $('filter');

document.querySelector('.nav').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-view]');
  if (b) pindahView(b.dataset.view);
});
$('btnKeDaftar').addEventListener('click', () => pindahView('daftar'));

const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
deadI.min = todayStr();

function validate() {
  let ok = true;
  const set = (input, errId, msg) => {
    $(errId).textContent = msg || '';
    input.classList.toggle('invalid', !!msg);
    if (msg) ok = false;
  };
  const nama = nameI.value.trim();
  set(nameI, 'errName', !nama ? 'Nama tugas wajib diisi.' : nama.length < 3 ? 'Nama tugas minimal 3 huruf.' : '');
  const mk = courseI.value.trim();
  set(courseI, 'errCourse', !mk ? 'Mata kuliah wajib diisi.' : '');
  const dl = deadI.value;
  set(deadI, 'errDeadline', !dl ? 'Deadline wajib diisi.' : dl < todayStr() ? 'Deadline tidak boleh tanggal lampau.' : '');
  return ok;
}

$('matkulForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = $('matkulName').value.trim();
  if (nama.length < 3) { $('matkulMsg').textContent = 'Nama minimal 3 huruf.'; return; }
  if (semuaMatkul().some((m) => m.toLowerCase() === nama.toLowerCase())) { $('matkulMsg').textContent = 'Sudah ada di daftar.'; return; }
  tambahMatkul(nama);
  renderPilihanMatkul(); renderMatkul();
  $('matkulName').value = '';
  $('matkulMsg').textContent = '';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) { getar(nameI.classList.contains('invalid') ? nameI : courseI.classList.contains('invalid') ? courseI : deadI); return; }
  loadEl.hidden = false;
  $('btnSave').disabled = true;
  window.setTimeout(() => {
    const id = tambahTugas({
      nama: nameI.value.trim(), mk: courseI.value.trim(), deadline: deadI.value,
      prio: prioI.value,
    });
    loadEl.hidden = true;
    $('btnSave').disabled = false;
    form.reset();
    $('charCount').textContent = '0/60';
    renderDaftar(id);
    perbaruiStatistik();
    beriPesan(peringatanPenyimpanan() || 'Tugas disimpan.');
    nameI.focus();
  }, kurangiGerak() ? 50 : 400);
});

$('imgHero').addEventListener('error', () => {
  $('imgHero').hidden = true;
  $('imgFallback').hidden = false;
});
$('imgIkon').addEventListener('error', () => { $('imgIkon').hidden = true; });

nameI.addEventListener('input', () => { $('charCount').textContent = `${nameI.value.length}/60`; validate(); });
courseI.addEventListener('input', validate);
deadI.addEventListener('input', validate);
searchI.addEventListener('input', renderDaftar);
filterI.addEventListener('change', renderDaftar);
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pindahView('daftar'); nameI.focus(); }
  if (e.key === 'Escape' && !e.target.closest('#matkulForm')) { form.reset(); $('charCount').textContent = '0/60'; validate(); }
});
$('btnReset').addEventListener('click', () => { form.reset(); $('charCount').textContent = '0/60'; validate(); });

renderPilihanMatkul();
renderDaftar();
renderMatkul();
perbaruiStatistik();
