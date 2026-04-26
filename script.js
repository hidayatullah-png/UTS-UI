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

// efek scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, //elemen muncul
    rootMargin: "0px 0px -50px 0px" 
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

//liat class fade-in
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});