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
    'assets/images/common/background.jpeg',
    'assets/images/team/common/bg-pattern-card.svg'
];

const imagesByPage = {
    'index.html': [
        shared[0],
        'assets/images/home/logo.v1.png',
        'assets/images/home/politehnica.jpg',
        'assets/images/home/service.png',
    ],
    '../team.html': [
        shared[0],
        'assets/images/team/steaua.jpg',
        'assets/images/team/engineers.jpg',
        'assets/images/team/league.jpg',
    ],
    '../services.html': [
        shared[0],
        'assets/images/services/laptop.png',
        'assets/images/services/pc.png',
        'assets/images/services/smartphone.png'
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