// ui.js — menggambar daftar catatan ke halaman; tidak menyimpan data dan tidak memasang event.
function kartu(c, labelSemat) {
  return '<div class="kartu"><small>' + c.mk + '</small><h3>' + c.judul + '</h3>' +
    '<small>' + new Date(c.dibuat).toLocaleDateString('id-ID') + '</small>' +
    '<div class="aksi"><button data-aksi="semat" data-id="' + c.id + '">' + labelSemat + '</button>' +
    '<button data-aksi="hapus" data-id="' + c.id + '">Hapus</button></div></div>';
}

export function gambar(hasil) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');
  sematan.innerHTML = '';
  semua.innerHTML = '';
  let jumlahSemat = 0;
  for (const c of hasil) {
    if (c.disematkan) {
      jumlahSemat++;
      sematan.innerHTML += kartu(c, 'Lepas');
    }
    semua.innerHTML += kartu(c, c.disematkan ? 'Lepas' : 'Sematkan');
  }
  if (jumlahSemat === 0) sematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  if (hasil.length === 0) semua.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  info.textContent = hasil.length + ' catatan, ' + jumlahSemat + ' disematkan';
}