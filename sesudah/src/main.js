// Contoh penerapan di main.js / app.js
import { KartuCatatan, PesanKosong } from './komponen.js';

function renderAplikasi(daftarCatatan) {
  // Ambil kontainer penampung di HTML
  const containerDisematkan = document.querySelector('#sematan'); // atau id kontainer Anda
  const containerSemua = document.querySelector('#semua');       // atau id kontainer Anda

  // Bersihkan isi kontainer lama
  containerDisematkan.replaceChildren();
  containerSemua.replaceChildren();

  // Pisahkan catatan yang disematkan dan yang biasa
  const disematkanList = daftarCatatan.filter(c => c.disematkan);
  const semuaList = daftarCatatan;

  // 1. Render daftar Disematkan
  if (disematkanList.length === 0) {
    containerDisematkan.append(PesanKosong('Tidak ada catatan disematkan.'));
  } else {
    // Memakai KartuCatatan secara berulang menggunakan map & append
    const elemenKartuDisematkan = disematkanList.map(catatan => KartuCatatan(catatan));
    containerDisematkan.append(...elemenKartuDisematkan);
  }

  // 2. Render daftar Semua Catatan
  if (semuaList.length === 0) {
    containerSemua.append(PesanKosong('Belum ada catatan sama sekali.'));
  } else {
    // Memakai KartuCatatan yang SAMA untuk daftar semua catatan (markup tidak ditulis ulang!)
    const elemenKartuSemua = semuaList.map(catatan => KartuCatatan(catatan));
    containerSemua.append(...elemenKartuSemua);
  }
}