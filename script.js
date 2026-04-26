//navbar scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Smooth scrolling untuk link navigasi
const navLinks = document.querySelectorAll('.nav-link a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;

            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

//slider
const locationSlider = document.querySelector('.location-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (locationSlider && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        locationSlider.scrollBy({
            left: 270, behavior: 'smooth'
        })
    })
    prevBtn.addEventListener('click', () => {
        locationSlider.scrollBy({
            left: -270, behavior: 'smooth'
        })
    })
}

// =========================================
// EFEK FADE-IN SAAT DI-SCROLL
// =========================================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Animasi dimulai saat 15% elemen sudah masuk layar
    rootMargin: "0px 0px -50px 0px" // Memicu sedikit lebih awal sebelum elemen benar-benar di tengah
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        // Jika elemen belum terlihat, jangan lakukan apa-apa
        if (!entry.isIntersecting) {
            return;
        } else {
            // Jika terlihat, tambahkan class 'show' agar muncul perlahan
            entry.target.classList.add('show');
            // Hentikan pantauan agar animasi tidak berulang-ulang saat scroll naik-turun
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

// Minta JavaScript mengamati semua elemen yang punya class 'fade-in'
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});