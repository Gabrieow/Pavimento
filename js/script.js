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

        // console.log(scrollPosition)
    })
})