function kirimData() {
    
    // Ambil nilai inputan
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;
    var alamat = document.getElementById('alamat').value;
    var keluh = document.getElementById('keluh').value;

    // Cek apakah semua data telah diisi
    if (!nama || !email || !telepon || !alamat || !keluh) {
        alert('Semua data wajib diisi!');
        return;
    }

    // Buat pesan WhatsApp
    var pesan = `Nama: ${nama}%0AEmail: ${email}%0ANomor Telepon: ${telepon}%0AAlamat: ${alamat}%0AKeluh Kesah: ${keluh}`;
    var url = `https://api.whatsapp.com/send?phone=+6287737878998&text=${pesan}`;

    // Buka URL WhatsApp
    window.open(url, '_blank');
}
