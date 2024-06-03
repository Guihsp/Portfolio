const projectsList = [
    {
        name: `Agenda de Contatos`,
        description: `Aplicação web para gerenciar contatos.`,
        technologies: [`HTML`, `CSS`, `JavaScript`, `Node.js`, `Express`, `MongoDB`],
        image: `contact-book.png`,
        link: `#`,
        repos: `https://github.com/guihsp/agenda-de-contatos`
    },
    {
        name: `Lista de Tarefas`,
        description: `Aplicação web para gerenciar tarefas a serem realizadas.`,
        technologies: [`HTML`, `CSS`, `JavaScript`],
        image: `todo-list.png`,
        link: `https://lista-de-tarefas-guihsp.netlify.app/`,
        repos: `https://github.com/Guihsp/Lista-de-Tarefas`
    },
    {
        name: `Github card`,
        description: `Aplicação web para buscar informações de um usuário do Github.`,
        technologies: [`HTML`, `CSS`, `JavaScript`],
        image: `github-card.png`,
        link: `https://github-card-3d.netlify.app/`,
        repos: `https://github.com/Guihsp/Github-Card-3D`
    }
];

const projectContainer = document.querySelector('.projects-list');

projectsList.forEach(project => {
    const techs = project.technologies.map(tech => `<span>${tech}</span>`).join('');

    const projectCard = `
        <div class="project-card">
            <img src="assets/imgs/projects/${project.image}" alt="${project.name}">
            <div class="description">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-subtitle ">${project.description}</p>
                <div class="project-techs">${techs}</div>
                <nav class="project-links">
                    <a href="${project.link}" class="btn" target="_blank">Ver projeto</a>
                    <a href="${project.repos}" class="btn" target="_blank">Ver código</a>
                </nav>
            </div>
        </div>
    `;

    projectContainer.innerHTML += projectCard;
});