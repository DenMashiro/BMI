function hitungBMI() {
    var berat = document.getElementById('berat').value;
    var tinggi = document.getElementById('tinggi').value / 100; // mengubah tinggi ke meter
    var bmi = berat / (tinggi * tinggi);
    document.getElementById('hasilBMI').innerText = 'BMI Anda adalah ' + bmi.toFixed(2);

    var keterangan = '';
    if (bmi < 18.5) {
        keterangan = 'Berat badan Anda kurang.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        keterangan = 'Berat badan Anda normal.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        keterangan = 'Berat badan Anda berlebih.';
    } else {
        keterangan = 'Anda mengalami obesitas.';
    }
    document.getElementById('keteranganBMI').innerText = keterangan;
}

