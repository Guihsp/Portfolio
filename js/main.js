const btnMenu = () => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementsByClassName('nav-bar')[0];

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        nav.classList.toggle(`active`);

        if (nav.classList.contains('active')) {
            document.body.classList.add('no-scroll');
            document.querySelector('header').classList.add('active-bg');
        } else {
            document.body.classList.remove('no-scroll');
            document.querySelector('header').classList.remove('active-bg');
        }
    }

    btnMobile.addEventListener(`click`, toggleMenu);
    btnMobile.addEventListener(`touchstart`, toggleMenu);

    const navLinks = document.querySelectorAll('.nav-bar .nav-item .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

const typeWriter = () => {
    const title = document.querySelector(`.intro-text .heading`);
    const h2 = document.querySelector(`.intro-text .subheading`);
    const p = document.querySelector(`.intro-text .description`);

    const typing = (element, callback) => {
        let text;
        if (element == title) {
            text = `Olá, eu sou o Guilherme!`;
        } else if (element == h2) {
            text = `Desenvolvedor de Software`;
        } else {
            text = `Sou um dev apaixonado por tecnologia e inovação, com talento para resolver problemas complexos e criar soluções. Vamos trabalhar juntos?`;
        }

        element.classList.add(`typing`);

        const textArray = text.split('');
        element.innerHTML = '';

        textArray.forEach((letter, i) => {
            setTimeout(() => element.innerHTML += letter, 75 * i);
        });

        setTimeout(() => {
            if (element != p) {
                element.classList.remove('typing');
            }
            callback();
        }, 75 * textArray.length);
    }

    typing(title, () => {
        setTimeout(() => {
            typing(h2, () => {
                setTimeout(() => {
                    typing(p, () => {});
                }, 300);
            });
        }, 300);
    });
}

const scrollSmooth = () => {
    const elements = document.querySelectorAll(`.link-scroll[href^="#"]`);

    elements.forEach(item => {
        item.addEventListener(`click`, scrollTOIdOnClick);
    });

    function scrollTOIdOnClick(event) {
        event.preventDefault();
        let element = event.target;

        if (element.tagName.toLowerCase() === 'i') {
            element = element.parentNode;
        }

        const id = element.getAttribute(`href`);
        const section = document.querySelector(id).offsetTop;

        window.scroll({
            top: section - 70,
        })
    }
}

const scrollAnimation = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(`show`);
            }
        });
    }, {
        rootMargin: '-30% 0px -30% 0px'
    });

    const elements = document.querySelectorAll(`.hidden`);

    elements.forEach(element => {
        observer.observe(element);
    });
}

const btnTop = () => {
    const btn = document.getElementById(`btn-top`);

    btn.addEventListener(`click`, () => {
        window.scrollTo(0, 0);
    });

    btn.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 270) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
}


const headerScroll = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 60) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    preloader.style.opacity = '0';
    preloader.style.display = 'none';

    typeWriter();
    headerScroll();
    btnMenu();
    scrollSmooth();
    scrollAnimation();
    btnTop();
});
