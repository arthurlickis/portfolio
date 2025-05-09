export default function linkEmail() {
    const linkEmail = document.getElementById("link-email");
    const emailIcon = document.getElementById("social__icon--email");

    if (linkEmail && emailIcon) {
        linkEmail.addEventListener("focus", (e) => {
            emailIcon.classList.toggle("ph-envelope");
            emailIcon.classList.toggle("ph-envelope-open");
        });
    };
};
