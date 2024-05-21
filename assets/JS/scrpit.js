// Função para controlar o comportamento do menu
const btnMenu = () => {
    // Seleciona o botão do menu e a barra de navegação
    const btnMobile = document.getElementById('btn-menu');
    const nav = document.getElementById('nav-bar');

    // Função para alternar a visibilidade do menu
    function toggleMenu(event) {
        // Se o evento for 'touchstart', previne o comportamento padrão
        if (event.type === 'touchstart') event.preventDefault();
        // Adiciona ou remove a classe 'active' da barra de navegação
        nav.classList.toggle(`active`);
    }

    // Adiciona os eventos de clique e toque ao botão do menu
    btnMobile.addEventListener(`click`, toggleMenu);
    btnMobile.addEventListener(`touchstart`, toggleMenu);

    // Seleciona todos os links da barra de navegação
    const navLinks = document.querySelectorAll('#nav-bar a');
    // Para cada link, adiciona um evento de clique que remove a classe 'active' da barra de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Função para criar o efeito de digitação
const typeWriter = () => {
    // Seleciona os elementos do DOM que receberão o efeito
    const title = document.querySelector(`.home-title`);
    const p1 = document.querySelector(`.home-text .sub1`);
    const p2 = document.querySelector(`.home-text .sub2`);

    // Função que aplica o efeito de digitação a um elemento
    const typing = element => {
        // Verifica qual elemento está sendo processado e define o texto correspondente
        if (element == title) {
            element.innerHTML = `Olá, eu sou o GUILHERME`
        } else if (element == p1) {
            element.innerHTML = `Desenvolvedor De Software`
        } else {
            element.innerHTML = `Bem-vindo ao meu portfólio`
        }

        // Divide o texto em um array de caracteres
        const textArray = element.innerHTML.split('');
        // Limpa o conteúdo do elemento
        element.innerHTML = ``;

        // Para cada letra no array, define um timeout para adicioná-la ao elemento
        // O delay é multiplicado pelo índice da letra, criando o efeito de digitação
        textArray.forEach((letter, i) => {
            setTimeout(() => element.innerHTML += letter, 75 * i);
        });
    }

    // Define timeouts para iniciar o efeito de digitação em cada elemento
    // Os delays são escolhidos para que o efeito comece em momentos diferentes para cada elemento
    setTimeout(() => typing(title), 500);
    setTimeout(() => typing(p1), 3600);
    setTimeout(() => typing(p2), 7000);
}

// Função para criar cards de tecnologias




// Função para criar os projetos
const createProjects = () => {
    // Array com os dados dos projetos
    const dataProjects = [
        {
            id: 1,
            title: 'Card do Github',
            image: 'assets/imgs/github-card.png',
            description: 'Um projeto simples e interativo que utiliza a API do GitHub para exibir informações do usuário em um card 3D.',
            viewProject: 'https://github-card-3d.netlify.app/',
            repository: 'https://github.com/Guihsp/Github-Card-3D'
        },
        {
            id: 2,
            title: 'Lista de Tarefas',
            image: 'assets/imgs/todo-list.png',
            description: 'Uma lista de tarefas simples e intuitiva, onde é possível adicionar e remover tarefas concluídas. Utiliza o LocalStorage para armazenar as tarefas.',
            viewProject: 'https://lista-de-tarefas-guihsp.netlify.app/',
            repository: 'https://github.com/Guihsp/Lista-de-Tarefas'
        },
        {
            id: 3,
            title: 'Agenda de Contatos',
            image: 'assets/imgs/contact-book.png',
            description: `A aplicação é uma agenda de contatos, onde é possível cadastrar, listar, atualizar e deletar contatos. 
                         Também conta com um sistema de autenticação, onde é possível realizar o cadastro de usuários, login e logout onde as informações são armazenadas no banco de dados mongoDB.`,	
            viewProject: 'https://github.com/Guihsp/agenda-contatos',
            repository: 'https://github.com/Guihsp/agenda-contatos'
        },
        {
            id: 4,
            title: 'Em Breve',
            image: 'Em construção',
            description: 'Este projeto está sendo desenvolvido. Em breve estará disponível para visualização.',
            viewProject: '',
            repository: ''
        }
    ];

    // Função para criar um link
    const createLink = (url, text) => {
        // Retorna uma string com a tag 'a' preenchida com a url e o texto passados como parâmetros
        return `<a href="${url}" class="btn btn-project">${text}</a>`;
    }

    // Função para criar um elemento de projeto
    const createProjectElement = (project) => {
        // Verifica se a imagem é um arquivo .jpeg, .jpg ou .png
        // Se for, cria um div com a imagem como background
        // Se não for, cria um div com o texto da imagem
        const imgElement = project.image.match(/\.(jpeg|jpg|png)$/) ?
            `<div class="img" style="background-image: url(${project.image})"></div>` :
            `<div class="img">${project.image}</div>`;

        // Retorna uma string com a estrutura HTML do projeto
        return `
            <div class="project" id="project-${project.id}">
                <a href="${project.viewProject}">
                    ${imgElement}
                </a>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-buttons">
                        ${createLink(project.viewProject, 'Ver Projeto')}
                        ${createLink(project.repository, 'Repositório')}
                    </div>
                </div>
            </div>
        `;
    }

    // Função para adicionar os projetos ao HTML
    const addProjectsToHTML = () => {
        // Seleciona o div com a classe 'projects'
        const projectsDiv = document.querySelector('.projects');
        // Mapeia o array de projetos, criando um elemento de projeto para cada um, e junta tudo em uma string
        const projectElements = dataProjects.map(createProjectElement).join('');
        // Adiciona a string de projetos ao div 'projects'
        projectsDiv.innerHTML = projectElements;
    }

    // Chama a função para adicionar os projetos ao HTML
    addProjectsToHTML();
}


// Função para implementar a rolagem suave
const scrollSmooth = () => {
    // Seleciona todos os itens do menu que têm um link para uma seção da página
    const menuItems = document.querySelectorAll(`#nav-bar .nav-link[href^="#"]`);

    // Para cada item do menu, adiciona um evento de clique
    menuItems.forEach(item => {
        item.addEventListener(`click`, scrollTOIdOnClick);
    })

    // Função para rolar para a seção correspondente ao item do menu clicado
    function scrollTOIdOnClick(event) {
        // Previne o comportamento padrão do clique
        event.preventDefault();
        // Obtém o elemento que foi clicado
        const element = event.target;
        // Obtém o valor do atributo 'href' do elemento, que é o id da seção para a qual deve rolar
        const id = element.getAttribute(`href`);
        // Obtém a posição vertical da seção na página
        const section = document.querySelector(id).offsetTop;

        // Faz a janela rolar para a seção
        // O valor '- 70' é usado para compensar o tamanho do cabeçalho
        window.scroll({
            top: section - 70,
        })
    }
}

// Função para implementar a animação de rolagem
const scrollAnimation = () => {
    
    // Cria um novo IntersectionObserver, que é uma API que permite observar
    // quando um elemento se torna visível na viewport
    const observer = new IntersectionObserver((entries) => {
        // Para cada elemento observado
        entries.forEach(entry => {
            // Se o elemento está na viewport
            if (entry.isIntersecting) {
                // Adiciona a classe 'show' ao elemento
                entry.target.classList.add(`show`);
            }
        });
    }, {
        // Define as margens da área de interseção
        // Neste caso, a área de interseção é 18% menor que a viewport em ambos os lados
        rootMargin: '-18% 0px -18% 0px'
    });
    
    // Seleciona todos os elementos com a classe 'hidden'
    const elements = document.querySelectorAll(`.hidden`);
    
    // Para cada elemento selecionado
    elements.forEach(element => {
        // Inicia a observação do elemento
        observer.observe(element);
    });
}

// Função para implementar o comportamento do botão 'Topo'
const btnTop = () => {
    // Seleciona o botão 'Topo' pelo seu id
    const btn = document.getElementById(`btn-top`);

    // Adiciona um evento de clique ao botão
    btn.addEventListener(`click`, function () {
        // Quando o botão é clicado, a janela é rolada para o topo (posição 0, 0)
        window.scrollTo(0, 0);
    });
}

btnMenu();
typeWriter();
createProjects();
scrollSmooth();
scrollAnimation();
btnTop();