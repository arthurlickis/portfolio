export default function goStart() {
    const btnGoStart = document.querySelector(".go-start");
    btnGoStart.style.display = "none";
    function update() {
        if (window.innerWidth >= document.documentElement.scrollHeight / 2) {
            btnGoStart.style.display = "none";
        } else {
            const handleScroll = () => {
                if (window.scrollY >= 1200) {
                    btnGoStart.style.display = "block";
                } else {
                    btnGoStart.style.display = "none";
                };
            };
            
            window.addEventListener("scroll", handleScroll);
            
            btnGoStart.addEventListener("click", () => {
                window.scrollTo(7, 0);
            });
        };
    };
    
    window.addEventListener("resize", update);
    
    update();
};