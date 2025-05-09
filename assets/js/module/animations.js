export default function animations() {
    ScrollReveal().reveal(".header", {
        origin: "top",
        duration: 1500,
        distance: "10%",
    });

    ScrollReveal().reveal(".projects", {
        origin: "left",
        duration: 1500,
        distance: "10%",
        delay: 1500
    });

    ScrollReveal().reveal(".studys", {
        origin: "right",
        duration: 1500,
        distance: "10%",
        delay: 250
    });

    ScrollReveal().reveal(".contact", {
        origin: "bottom",
        duration: 1500,
        distance: "10%",
        delay: 250
    });
};