// src/storage.js

export const KUNCI = 'catatan-kuliah:v1';

export function muat() {
  try {
    // 1. Cek migrasi Level 2 (jika data lama masih ada di kunci 'catatan-kuliah')
    const dataLama = localStorage.getItem('catatan-kuliah');
    if (dataLama && !localStorage.getItem(KUNCI)) {
      localStorage.setItem(KUNCI, dataLama);
      localStorage.removeItem('catatan-kuliah');
    }

    const item = localStorage.getItem(KUNCI);
    if (!item) return []; // Belum pernah disimpan

    const parsed = JSON.parse(item);
    if (!Array.isArray(parsed)) return []; // Jika bukan array, kembalikan array kosong

    // Saring item yang rusak (pastikan berupa objek dan judulnya berupa string)
    return parsed.filter(c => c && typeof c === 'object' && typeof c.judul === 'string');
  } catch (err) {
    // Jika JSON rusak / terjadi error, jangan lempar galat, kembalikan array kosong
    return [];
  }
}

export function simpan(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    // Tangani error jika penyimpanan penuh (QuotaExceededError) atau diblokir
    console.warn('Gagal menyimpan ke localStorage:', err);
  }
}