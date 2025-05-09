import updateLayout from "./updateLayout.js";

export default function filterProject() {
    const projectsCardLink = document.querySelectorAll(".projects-card-link");
    const inputFilter = document.querySelector(".input-filter");

    inputFilter.addEventListener("change", () => {
        updateLayout();
        projectsCardLink.forEach(card => {
            const cardCurrentDataTech = card.getAttribute("data-tech");

            if (inputFilter.value === "todos" || cardCurrentDataTech === inputFilter.value) {
                card.style.display = "block";
               
            } else {
                card.style.display = "none";
            }
        });
    });
};