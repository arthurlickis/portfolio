const hgColors = ["highlight--red", "highlight--blue", "highlight--purple", "highlight--green", "highlight--yellow"];
const titleHighlight = document.getElementById("title-highlight");

export default function sortColor() {
    hgColors.forEach(hg => titleHighlight.classList.remove(hg));

    const numSorted = Math.floor(Math.random() * hgColors.length);
    titleHighlight.classList.add(hgColors[numSorted]);

    setTimeout(sortColor, 2000);
};