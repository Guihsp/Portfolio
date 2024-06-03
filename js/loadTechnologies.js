// Lista de tecnologias
const technologiesList = [
    {
        category: 'Back-End',
        technologies: [
            { name: 'Java', description: 'Linguagem de programação orientada a objetos.' },
            { name: 'Node.js', description: 'Ambiente de execução JavaScript server-side.' },
            { name: 'Express', description: 'Framework para aplicações web Node.js.' }
        ]
    },
    {
        category: 'Front-End',
        technologies: [
            { name: 'HTML', description: 'Linguagem de marcação de hipertexto.' },
            { name: 'CSS', description: 'Linguagem de estilização de páginas web.' },
            { name: 'JavaScript', description: 'Linguagem de programação interpretada.' },
            { name: 'React', description: 'Biblioteca JavaScript para construção de interfaces de usuário.' },
            { name: 'TypeScript', description: 'Superset da linguagem JavaScript.' }
        ]
    },
    {
        category: 'Banco de Dados',
        technologies: [
            { name: 'MySQL', description: 'Sistema de gerenciamento de banco de dados relacional.' },
            { name: 'MongoDB', description: 'Banco de dados NoSQL orientado a documentos.' }
        ]
    },
    {
        category: 'Ferramentas',
        technologies: [
            { name: 'Git', description: 'Sistema de controle de versões distribuído.' },
            { name: 'Figma', description: 'Ferramenta de design de interface do usuário.' },
        ]
    },
    {
        category: 'Outras Habilidades',
        technologies: [
            { name: 'Comunicação', description: 'Capacidade de transmitir informações de forma clara e objetiva.' },
            { name: 'Trabalho em Equipe', description: 'Capacidade de colaborar e interagir com outras pessoas.' },
            { name: 'Resolução de Problemas', description: 'Capacidade de identificar e solucionar problemas de forma eficaz.' },
            { name: 'Adaptabilidade', description: 'Capacidade de se ajustar a novas situações e contextos.' },
        ]
    }
];

const createTechnologyItem = technology => {
    return `
        <li class="item">
            <p class="title-item">${technology.name}</p>
            <p class="description-item">${technology.description}</p>
        </li>
    `;
}

const createCategoryItem = (category, index) => {
    const technologyItems = category.technologies.map(createTechnologyItem).join('');

    return `
    <div class="tech-category">
        <input type="checkbox" class="tech-category-input" id="tech-category-${index + 1}">

        <div class="tech-category-contents">
            <label for="tech-category-${index + 1}">
                <h3 class="tech-category-title">
                    ${category.category}
                </h3>
            </label>

            <ul class="tech-list">
                ${technologyItems}
            </ul>
        </div>
    </div>
    `;
}

const loadTechnologies = () => {
    const list = document.querySelector('.tech-list'); 

    const categoryItems = technologiesList.map(createCategoryItem).join('');
    list.innerHTML = categoryItems;
}

window.addEventListener('DOMContentLoaded', loadTechnologies);