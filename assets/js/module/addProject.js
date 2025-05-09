const projects = [
    {nome: "E-commmerce", img: "assets/images/projects/E-commerce.png", descricao: "E-commerce simples e objetivo onde os usuários podem navegar, adicionar produtos ao carrinho.", url: "https://e-commerce-portfolio-arthurr.netlify.app/", techs: ["html", "css", "js"], type: "front-end"},
    {nome: "CRUD - Musculação", img: "assets/images/projects/CRUDgym.png", descricao: "CRUD para gerenciar treinos e exercícios de musculação. Foi utilizado Webpack, Javascript, EJS, MongoDB e arquitetura MVC.", url: "https://crud-gym.onrender.com", techs: ["js", "node"], type: "full-stack"},
    {nome: "Impacto Gym", img: "assets/images/projects/ImpactoGym.png", descricao: "Design UX/UI para um webapp e CRUD, com interface intuitiva e interativa. Foco na simplicidade e fluidez das operações de criação, leitura, atualização e exclusão de dados, proporcionando uma experiência de usuário eficiente e agradável.", url: "https://www.figma.com/design/xWDxQfFXsssGq3fOBW5AVn/Impacto-Gym---Overview?node-id=1-2", techs: ["figma"], type: "design ux-ui"},
    {nome: "Landing Page - TechNest", img: "assets/images/projects/TechNest.png", descricao: "Landing page com design UX/UI moderno, simulando uma empresa de tecnologia. Foco em navegação intuitiva e experiência visual envolvente, destacando os serviços e soluções da empresa.", url: "https://www.figma.com/design/2srL4aqidDGUI0Yd3MQpjg/Project?node-id=0-1", techs: ["figma"], type: "design ux-ui"},
    {nome: "CRM - TechNest", img: "assets/images/projects/CRM.png", descricao: "Design UX/UI de um app de CRM, focado em facilitar o gerenciamento de clientes e dados. Interface intuitiva, otimizada para produtividade e com visual clean, garantindo uma experiência eficiente e agradável.", url: "https://www.figma.com/design/2srL4aqidDGUI0Yd3MQpjg/Project?node-id=421-3620", techs: ["figma"], type: "design ux-ui"}
];

export default function addProject() {
    const projectsCards = document.querySelector(".projects-cards");

    projects.forEach(obj => {
        const a = document.createElement("a");
        a.classList.add("projects-card-link");
        a.setAttribute("href", obj.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("data-tech", obj.type);

        const article = document.createElement("article");
        article.classList.add("projects-card");

        const img = document.createElement("img");
        img.classList.add("card__img");
        img.setAttribute("src", obj.img);  
        img.setAttribute("alt", `Projeto ${obj.nome}`);  

        const cardContent = document.createElement("div");
        cardContent.classList.add("card__content");

        const cardText = document.createElement("div");
        cardText.classList.add("card__text");

        const h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.innerText = obj.nome;

        const p = document.createElement("text");
        p.classList.add("title");
        p.innerText = obj.descricao;

        const ul = document.createElement("ul");
        ul.classList.add("card__techs");

        obj.techs.forEach(tech => {
            const li = document.createElement("li");
            li.classList.add("content__techs_tech");

            const techImg = document.createElement("img");

            if (tech === "html") {
                techImg.setAttribute("src", "assets/images/techs/HTML.svg");
                techImg.setAttribute("alt", "HTML logo");
                li.setAttribute("data-tech", tech);

            }
            if (tech === "css") {
                techImg.setAttribute("src", "assets/images/techs/CSS.svg");
                techImg.setAttribute("alt", "CSS logo");
                li.setAttribute("data-tech", tech);

            }
            if (tech === "js") {
                techImg.setAttribute("src", "assets/images/techs/Javascript.svg");
                techImg.setAttribute("alt", "Javascript logo");
                li.setAttribute("data-tech", tech);

            }
            if (tech === "figma") {
                techImg.setAttribute("src", "assets/images/techs/Figma.svg");
                techImg.setAttribute("alt", "Figma logo");
                li.setAttribute("data-tech", tech);
            }
            if (tech === "node") {
                techImg.setAttribute("src", "assets/images/techs/Nodejs.svg");
                techImg.setAttribute("alt", "Node.js logo");
                li.setAttribute("data-tech", tech);
            }

            li.appendChild(techImg);
            ul.appendChild(li);
        });

        cardText.appendChild(h3);
        cardText.appendChild(p);
        cardContent.appendChild(cardText);
        cardContent.appendChild(ul);

        article.appendChild(img);
        article.appendChild(cardContent);
        a.appendChild(article);

        projectsCards.appendChild(a);
    });
};