const btnMenu = () => {
    const btnMobile = document.getElementById('btn-menu');
    const nav = document.getElementById('nav-bar');
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        nav.classList.toggle(`active`);
    }

    btnMobile.addEventListener(`click`, toggleMenu);
    btnMobile.addEventListener(`touchstart`, toggleMenu);

    const navLinks = document.querySelectorAll('#nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

const typeWriter = () => {
    const title = document.querySelector(`.home-title`);
    const p1 = document.querySelector(`.home-text .sub1`);
    const p2 = document.querySelector(`.home-text .sub2`);

    const typing = element => {
        if (element == title) {
            element.innerHTML = `Olá, eu sou o GUILHERME`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        } else if (element == p1) {
            element.innerHTML = `Desenvolvedor Web Full-stack`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        } else {
            element.innerHTML = `Bem-vindo ao meu portfólio`
            const textArray = element.innerHTML.split('');
            element.innerHTML = ``;

            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 75 * i);
            });
        }
    }

    setTimeout(() => typing(title), 500);
    setTimeout(() => typing(p1), 3600);
    setTimeout(() => typing(p2), 7000);
}

const createProject = () => {
    const projects = [
        {
            id: 1,
            title: 'Em Breve',
            image: 'Em construção',
            description: 'Este projeto está sendo desenvolvido. Em breve estará disponível para visualização.',
            viewProject: '',
            repository: ''
        },
        {
            id: 2,
            title: 'Em Breve',
            image: 'Em construção',
            description: 'Este projeto está sendo desenvolvido. Em breve estará disponível para visualização.',
            viewProject: '#',
            repository: '#'
        },
        {
            id: 3,
            title: 'Em Breve',
            image: 'Em construção',
            description: 'Este projeto está sendo desenvolvido. Em breve estará disponível para visualização.',
            viewProject: '#',
            repository: '#'
        },
        {
            id: 4,
            title: 'Em Breve',
            image: 'Em construção',
            description: 'Este projeto está sendo desenvolvido. Em breve estará disponível para visualização.',
            viewProject: '#',
            repository: '#'
        }
    ];

    const createLink = (url, text) => {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.classList.add('btn', 'btn-project');
        //link.target = '_blank';
        return link;
    }

    const createProjectElement = (project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = `project-${project.id}`;

        let imgElement;
        if (project.image.match(/\.(jpeg|jpg|png)$/)) {
            imgElement = document.createElement('img');
            imgElement.src = project.image;
            imgElement.classList.add('img');
        } else {
            imgElement = document.createElement('div');
            imgElement.classList.add('img');
            imgElement.textContent = project.image;
        }

        const imgLink = document.createElement('a');
        imgLink.href = project.viewProject;
        //imgLink.target = '_blank';
        imgLink.appendChild(imgElement);

        const projectInfoDiv = document.createElement('div');
        projectInfoDiv.classList.add('project-info');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('project-buttons');

        const viewProjectLink = createLink(project.viewProject, 'Ver Projeto');
        const repositoryLink = createLink(project.repository, 'Repositório');

        buttonsDiv.append(viewProjectLink, repositoryLink);
        projectInfoDiv.append(titleElement, descriptionElement, buttonsDiv);
        projectDiv.append(imgLink, projectInfoDiv);

        return projectDiv;
    }

    const addProjectsToHTML = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectElements = projects.map(createProjectElement);
        projectsDiv.append(...projectElements);
    }

    addProjectsToHTML();
}

const scrollSmooth = () => {
    const menuItems = document.querySelectorAll(`#nav-bar .nav-link[href^="#"]`);

    menuItems.forEach(item => {
        item.addEventListener(`click`, scrollTOIdOnClick);
    })

    function scrollTOIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
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
        rootMargin: '-18% 0px -18% 0px'
    });
    
    const elements = document.querySelectorAll(`.hidden`);
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
}

const btnTop = () => {
    const btn = document.getElementById(`btn-top`);

    btn.addEventListener(`click`, function () {
        window.scrollTo(0, 0);
    });
}

const init = () => {
btnMenu();
typeWriter();
createProject();
scrollSmooth();
scrollAnimation();
btnTop();
}

window.onload = init;