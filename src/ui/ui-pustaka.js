// ui-pustaka.js — satu-satunya modul yang memanggil API JavaScript Bootstrap.
// Modul lain cukup memakai konfirmasi() dan beriPesan(); bila pustaka diganti,
// hanya berkas ini yang disentuh.
const elModal = document.querySelector('#modalKonfirmasi');
const tombolSetuju = document.querySelector('#tombolSetuju');
const areaToast = document.querySelector('#areaToast');
let aksiSetuju = null;

tombolSetuju.addEventListener('click', () => {
  bootstrap.Modal.getOrCreateInstance(elModal).hide();
  if (aksiSetuju) aksiSetuju();
});

export function konfirmasi({ judul, pesan, labelAksi = 'Lanjutkan', onSetuju }) {
  document.querySelector('#judulKonfirmasi').textContent = judul;
  document.querySelector('#isiKonfirmasi').textContent = pesan;
  tombolSetuju.textContent = labelAksi;
  aksiSetuju = onSetuju;
  bootstrap.Modal.getOrCreateInstance(elModal).show();
}

export function beriPesan(pesan, jenis = 'success') {
  const el = document.createElement('div');
  el.className = `toast toast-${jenis}`;
  el.setAttribute('role', jenis === 'danger' ? 'alert' : 'status');
  el.setAttribute('aria-live', jenis === 'danger' ? 'assertive' : 'polite');
  el.innerHTML = '<div class="toast-body"></div>';
  el.querySelector('.toast-body').textContent = pesan;
  areaToast.append(el);
  const t = bootstrap.Toast.getOrCreateInstance(el, { delay: 2600 });
  el.addEventListener('hidden.bs.toast', () => el.remove());
  t.show();
}
