// 1. EFEK NAVBAR BERUBAH WARNA SAAT DI-SCROLL
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Menambahkan class 'scrolled' jika di-scroll ke bawah
        navbar.classList.add('scrolled');
    } else {
        // Menghapus class 'scrolled' jika kembali ke paling atas
        navbar.classList.remove('scrolled');
    }
});


// 2. SMOOTH SCROLL NAVBAR DENGAN OFFSET (Agar tidak tertutup navbar)
// Mencari semua link di dalam nav-link
const navLinks = document.querySelectorAll('.nav-link a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Mencegah lompatan instan bawaan HTML
        e.preventDefault();

        // Mengambil ID tujuan dari atribut href (misal: "#character" menjadi "character")
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Menghitung tinggi navbar agar scroll berhentinya pas
            const navbarHeight = navbar.offsetHeight;
            
            // Menghitung posisi elemen tujuan dari atas halaman, dikurangi tinggi navbar
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            // Memerintahkan browser untuk meluncur mulus
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});