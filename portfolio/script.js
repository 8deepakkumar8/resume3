// Header Toggle

let MenuBtn = document.getElementById('MenuBtn');


MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// typing effect
let typed = new Typed('.auto-input', {
    
    strings: ['Software Engineer!','Front-End Developer!', 'UI Designer!'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
})
