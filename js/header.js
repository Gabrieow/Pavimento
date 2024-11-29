document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header class="header">
            <a href="index.html">    
                <div class="logo">
                    <img src="imgs/icone-pavimento-branco.svg" alt="logo site" width="30px" height="30px">
                    <p class="nome-logo">Pavimento</p>
                </div>
            </a>
                <nav>
                <button class="theme-switch">
                <img src="imgs/nightlight_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="night-mode" height="25px" width="25px" class="night-mode theme-active">
                <img src="imgs/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="light-mode" height="25px" width="25px" class="light-mode theme-desactive">
                    </button>
                <div class="toggle-menu">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="assunto.html">Projetos</a></li>
                        <li><a href="assunto2.html">Tecnologias</a></li>
                        <li><a href="assunto3.html">Sustentabilidade</a></li>
                    </ul>
                    <ul class="footer-menu">
                        <li><a href="contato.html">Contato</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li><a href="politica.html">Política do site</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
