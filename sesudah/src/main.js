// main.js — titik masuk: menghubungkan event, state, dan tampilan.
import * as state from './state.js';
import { gambar } from './ui.js';

let kataCari = '';

function render() {
  gambar(state.cari(kataCari));
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const judul = document.getElementById('judul').value.trim();
  if (judul === '') return;
  state.tambah(judul, document.getElementById('mk').value);
  document.getElementById('judul').value = '';
  render();
});

document.getElementById('cari').addEventListener('input', (e) => {
  kataCari = e.target.value;
  render();
});

// delegasi: satu pendengar untuk semua tombol Sematkan/Lepas/Hapus
document.querySelector('main').addEventListener('click', (e) => {
  const tombol = e.target.closest('button[data-aksi]');
  if (!tombol) return;
  const id = Number(tombol.dataset.id);
  if (tombol.dataset.aksi === 'semat') {
    state.alihSemat(id);
  } else if (tombol.dataset.aksi === 'hapus') {
    if (!confirm('Hapus catatan ini?')) return;
    state.hapus(id);
  }
  render();
});

render();