// src/komponen.js

/**
 * Komponen untuk merender satu buah kartu catatan
 * @param {Object} catatan - Data catatan (id, judul, mk, dibuat, disematkan)
 * @returns {HTMLElement} Elemen HTML kartu
 */
export function KartuCatatan(catatan) {
  // 1. Buat elemen kontainer utama kartu
  const cardEl = document.createElement('div');
  cardEl.className = 'catatan-card'; // Sesuaikan kelas CSS Anda

  // 2. Buat elemen untuk Mata Kuliah
  const mkEl = document.createElement('span');
  mkEl.className = 'mk-teks';
  mkEl.textContent = catatan.mk; // Menggunakan textContent agar aman

  // 3. Buat elemen untuk Judul Catatan
  const judulEl = document.createElement('h3');
  // PENTING: Gunakan textContent agar teks seperti <b>tebal</b> tampil aman sebagai teks biasa, bukan HTML
  judulEl.textContent = catatan.judul; 

  // 4. Buat elemen untuk Tanggal Pembuatan
  const tanggalEl = document.createElement('small');
  tanggalEl.textContent = new Date(catatan.dibuat).toLocaleDateString('id-ID');

  // 5. Tombol Sematkan / Lepas
  const btnSemat = document.createElement('button');
  btnSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';
  // Tambahkan event listener sesuai kebutuhan aplikasi Anda (misal untuk toggle pin)
  btnSemat.dataset.id = catatan.id;
  btnSemat.className = 'btn-semat';

  // 6. Tombol Hapus
  const btnHapus = document.createElement('button');
  btnHapus.textContent = 'Hapus';
  btnHapus.dataset.id = catatan.id;
  btnHapus.className = 'btn-hapus';

  // Gabungkan semua elemen ke dalam cardEl
  cardEl.append(mkEl, judulEl, tanggalEl, btnSemat, btnHapus);

  return cardEl;
}

/**
 * Komponen pendukung jika daftar kosong
 * @param {string} pesan 
 * @returns {HTMLElement}
 */
export function PesanKosong(pesan = 'Belum ada catatan.') {
  const p = document.createElement('p');
  p.className = 'pesan-kosong';
  p.textContent = pesan;
  return p;
}