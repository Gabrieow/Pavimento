document.addEventListener("DOMContentLoaded", () =>{
    const html = document.querySelector('html')
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');
    const barMenu = document.querySelectorAll('.bar');
    const header = document.querySelector("header");

    //efeito mega menu
    toggleMenu.addEventListener('click', () => {
        if(toggleMenu.classList.contains('toggle_icon')){
            html.style.overflow = "initial"
            menu.classList.remove("visible-menu");
            toggleMenu.classList.remove("toggle_icon");
            barMenu[0].classList.remove('top-bar');
            barMenu[1].classList.remove('middle-bar');
            barMenu[2].classList.remove('bottom-bar');
        }else{
            html.style.overflow = "hidden "
            menu.classList.add("visible-menu");
            toggleMenu.classList.add("toggle_icon");
            barMenu[0].classList.add('top-bar');
            barMenu[1].classList.add('middle-bar');
            barMenu[2].classList.add('bottom-bar');
        }
    })
    // efeito menu sticky
    document.addEventListener('scroll', () => {
        // var headerY = header.getBoundingClientRect().top;
        var scrollPosition = window.scrollY
        if(scrollPosition >= 400){
            header.classList.add("sticky-header");
        }else{
            header.classList.remove('sticky-header');
        }
    })

    //darkmode
    const darkmode = document.querySelector(".night-mode");
    const lightmode = document.querySelector(".light-mode");
    const btnSwitch = document.querySelector(".theme-switch");
    const svgLogo = document.querySelector(".logo img");
    const nomeLogo = document.querySelector(".nome-logo");

    function addLightMode(filepath){
        const link = document.createElement("link");

        link.rel = 'stylesheet';
        link.type = "text/css";
        link.href = filepath;

        document.head.appendChild(link);
    }

    btnSwitch.addEventListener('click', () => {
        if(darkmode.classList.contains('theme-active')){
            darkmode.classList.remove('theme-active');
            lightmode.classList.remove('theme-desactive');
            darkmode.classList.add('theme-desactive');
            lightmode.classList.add('theme-active');
            svgLogo.src = "imgs/icone-pavimento-preto.svg";
            nomeLogo.classList.add('switch-logo');
            addLightMode("css/dark-mode.css")
        }else if(lightmode.classList.contains('theme-active')){
            lightmode.classList.remove('theme-active');
            darkmode.classList.remove('theme-desactive');
            lightmode.classList.add('theme-desactive');
            darkmode.classList.add('theme-active');
            nomeLogo.classList.remove('switch-logo');
            svgLogo.src = "imgs/icone-pavimento-branco.svg"
            document.querySelector('link[href="css/dark-mode.css"]').parentNode.removeChild(document.querySelector('link[href="css/dark-mode.css"]'))
        }
    })


})