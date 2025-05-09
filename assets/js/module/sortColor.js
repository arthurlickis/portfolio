const hgColors = ["highlight--red", "highlight--blue", "highlight--purple", "highlight--green", "highlight--yellow"];
const titleHighlights = document.querySelectorAll(".title-highlight");

export default function sortColor() {
    hgColors.forEach(hg => {
        titleHighlights.forEach(titleHighlight => titleHighlight.classList.remove(hg));
    });

    const numSorted = Math.floor(Math.random() * hgColors.length);
    titleHighlights.forEach(titleHighlight => titleHighlight.classList.add(hgColors[numSorted]));

    setTimeout(sortColor, 2000);
};