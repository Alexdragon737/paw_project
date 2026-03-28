const myButton = document.getElementById('myBtn');

// Scroll to top logic
window.addEventListener('scroll', function () {
    myButton.style.display =
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            ? 'block'
            : 'none';
});

myButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Nav icon toggle which replaces jQuery
const icon = document.getElementById('icon');
const navList = document.querySelector('nav ul');

if (icon && navList) {
    icon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
}

// Image preloading logic 
const shared = [
    'assets/images/background.jpeg',
    'assets/images/team/common/bg-pattern-card.svg'
];

const imagesByPage = {
    'index.html': [
        shared[0],
        'assets/images/logo.v1.png',
        'assets/images/politehnica.jpg',
        'assets/images/service.png',
    ],
    '../team.html': [
        shared[0],
        'assets/images/steaua.jpg',
        'assets/images/engineers.jpg',
        'assets/images/league.jpg',
    ],
    '../services.html': [
        shared[0],
        'assets/images/laptop.png',
        'assets/images/pc.png',
        'assets/images/smartphone.png'
    ],
    '../team/coman.html': [
        ...shared,
        'assets/images/team/image-coman.jpg'
    ],
    '../team/soare.html': [
        ...shared,
        'assets/images/team/image-soare.jpg'
    ],
    '../team/rares.html': [
        ...shared,
        'assets/images/team/image-rares.jpg'
    ]
};

const currentPage = window.location.pathname.split('/').pop();
const imagesToPreload = imagesByPage[currentPage] || [];

imagesToPreload.forEach(function (src) {
    const img = new Image();
    img.src = src;
});