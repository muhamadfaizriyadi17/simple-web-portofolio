// script.js

// Fungsi untuk toggle menu
let toggleMenu = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}

// Memilih elemen-elemen yang dibutuhkan
let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.nav-links');

// Mengaktifkan fungsi toggleMenu saat menu di-klik
menu.onclick = () => {
    toggleMenu();
}

// Menambahkan kode JavaScript baru
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Menutup menu setelah mengklik tautan
        toggleMenu();
    });
});
