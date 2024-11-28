document.addEventListener("DOMContentLoaded", () =>{
    var toggleMenu = document.querySelector('.toggle-menu');
    var menu = document.querySelector('.menu');
    var barMenu = document.querySelectorAll('.bar')
    var body = document.body;
    var header = document.querySelector("header");

    //efeito mega menu
    toggleMenu.addEventListener('click', () => {
        if(toggleMenu.classList.contains('toggle_icon')){
            body.style.overflow = "initial"
            menu.classList.remove("visible-menu");
            toggleMenu.classList.remove("toggle_icon");
            barMenu[0].classList.remove('top-bar');
            barMenu[1].classList.remove('middle-bar');
            barMenu[2].classList.remove('bottom-bar');
        }else{
            body.style.overflow = "hidden"
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
            header.classList.add("sticky-header")
        }else{
            header.classList.remove('sticky-header');
        }
    })

    //darkmode
    var darkmode = document.querySelector(".night-mode");
    var lightmode = document.querySelector(".light-mode");
    var btnSwitch = document.querySelector(".theme-switch")

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
            addLightMode("css/dark-mode.css")
        }else if(lightmode.classList.contains('theme-active')){
            lightmode.classList.remove('theme-active');
            darkmode.classList.remove('theme-desactive');
            lightmode.classList.add('theme-desactive');
            darkmode.classList.add('theme-active');
            console.log('tema escuro ativo agora')
            // removeLightMode();
            document.querySelector('link[href="css/dark-mode.css"]').parentNode.removeChild(document.querySelector('link[href="css/dark-mode.css"]'))
        }
    })


})