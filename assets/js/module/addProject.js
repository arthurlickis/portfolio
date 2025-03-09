const projects = [
    {nome: "E-commmerce", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["html", "css", "js"], type: "front-end"},
    {nome: "Dashboard", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["html", "css", "js"], type: "front-end"},
    {nome: "Blog", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["html", "css", "js"], type: "front-end"},
    {nome: "Taskmanager", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["html", "css", "js"], type: "front-end"},
    {nome: "Landing Page - TechNest", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["figma"], type: "design ux-ui"},
    {nome: "Aplicativo CRM - TechNest", img: "assets/images/projects/image.png", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", url: "#", techs: ["figma"], type: "design ux-ui"},
];

export default function addProject() {
    const projectsCards = document.querySelector(".projects-cards");

    projects.forEach(obj => {
        const a = document.createElement("a");
        a.classList.add("projects-card-link");
        a.setAttribute("href", obj.url);
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