# Changelog

Semua perubahan penting pada proyek Catatan Kuliah ini akan dicatat dalam file ini.

## [v1.2.0] - 2026-11-10
### Ditambahkan
- Implementasi sistem penyimpanan data yang tangguh dan tahan korupsi (*anti-banting*) menggunakan `storage.js` dengan mekanisme versi `KUNCI` dan blok `try/catch`.
- Penanganan error otomatis jika data `localStorage` rusak, kosong, atau bukan berformat *array*.

## [v1.1.0] - 2026-11-10
### Ditambahkan
- Modularisasi komponen antarmuka menggunakan `komponen.js` (`KartuCatatan` dan `PesanKosong`) dengan pengamanan `textContent` untuk mencegah celah XSS.
- Integrasi perenderan daftar catatan ke kontainer Disematkan dan Semua Catatan.

## [v1.0.0] - 2026-11-09
### Ditambahkan
- Struktur dasar aplikasi web catatan kuliah.
- Fitur penambahan dan pengelolaan catatan dasar.