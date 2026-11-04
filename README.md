# Tugas P11 — Bedah Monolit: Catatan Kuliah jadi ES Modules

Praktikum Pemrograman Visual (TB033109) — Politeknik Elektronika Negeri Surabaya
Nama: Nabila Septia | NRP: 5125500031 | Kelas: D3 MM B

## Isi repositori

| Folder | Isi |
|---|---|
| `sebelum/` | Monolit asli dari lampiran (`index.html`, `app.js`), tidak diubah. |
| `sesudah/` | Hasil pemecahan: `index.html`, `src/` (4 modul ES), dan `uji/` (pemeriksa dosen, tidak diubah). |

## Peta modul (sesudah/src/)

```
main.js  ->  state.js  ->  storage.js
main.js  ->  ui.js
```

| Modul | Tanggung jawab (satu kalimat) |
|---|---|
| `storage.js` | Satu-satunya modul yang membaca dan menulis localStorage. |
| `state.js` | Pemilik data catatan beserta aturannya (tambah, sematkan, hapus, cari), tanpa DOM. |
| `ui.js` | Menggambar daftar catatan ke halaman. |
| `main.js` | Titik masuk yang memasang event dan menghubungkan state dengan tampilan. |

## Cara menjalankan

ES Modules tidak bisa dibuka lewat `file://`, jadi pakai server lokal:

```bash
cd sesudah
python3 -m http.server 5500
```

- Aplikasi: http://127.0.0.1:5500/
- Pemeriksa: http://127.0.0.1:5500/uji/uji-modul.html

## Hasil

- Pemeriksa `uji-modul.html`: 15 dari 15 butir LOLOS.
- Uji regresi R1–R7 di `sesudah/`: lihat PDF pengumpulan.
- Tidak ada variabel global aplikasi dan tidak ada atribut `onclick`.
