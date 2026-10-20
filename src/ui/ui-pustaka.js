// ui-pustaka.js — satu-satunya berkas yang memanggil API JavaScript Bootstrap.
// app.js cukup memanggil UI.konfirmasi() dan UI.beriPesan(); bila pustaka diganti,
// hanya berkas ini yang disentuh.
(function () {
  const elModal = document.querySelector('#modalKonfirmasi');
  const tombolSetuju = document.querySelector('#tombolSetuju');
  const areaToast = document.querySelector('#areaToast');

  window.UI = {
    konfirmasi({ judul, pesan, labelAksi = 'Lanjutkan', onSetuju }) {
      document.querySelector('#judulKonfirmasi').textContent = judul;
      document.querySelector('#isiKonfirmasi').textContent = pesan;
      tombolSetuju.textContent = labelAksi;
      tombolSetuju.onclick = () => {
        bootstrap.Modal.getOrCreateInstance(elModal).hide();
        onSetuju();
      };
      bootstrap.Modal.getOrCreateInstance(elModal).show();
    },

    beriPesan(pesan, jenis = 'success') {
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
    },
  };
})();
