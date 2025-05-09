export default function updateLayout() {
    const projectsCards = document.querySelector('.projects-cards');
    const inputFilter = document.querySelector('.input-filter');

    if (window.innerWidth >= 1000) {
        if (inputFilter.value === "todos") {
            projectsCards.style.gridTemplateColumns = "repeat(3, 1fr)";
        } else {
            projectsCards.style.gridTemplateColumns = "repeat(2, 1fr)";
        }
    } else {
        projectsCards.removeAttribute("style");
    }
}

window.addEventListener('resize', updateLayout);
updateLayout();