document.getElementById("ticketform").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var popcornChecked = document.getElementById('popcorn').checked;
    var sodaChecked = document.getElementById('soda').checked;
    var quantity = document.getElementById('quantity').value;
    var date = new Date().toLocaleDateString();
    var movie = document.getElementById('movie').value; 

    Swal.fire({
        title: 'Terima kasih atas pembelian tiket Anda!',
        html: `<p>Detail Pembelian:</p>
            <p>Nama: ${name}</p>
            <p>Judul Film: ${movie}</p> <!-- Menampilkan judul film yang dipilih -->
            <p>Jumlah Tiket: ${quantity}</p>
            <p>Snacks: ${popcornChecked ? 'Popcorn' : ''} ${sodaChecked ? 'Soda' : ''}</p>
            <p>Tanggal: ${date}</p>`,
        icon: 'success'
    });
});
