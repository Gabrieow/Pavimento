document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <div class="logo">
                <img src="logo.png" alt="Logo">
            </div>
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
                        <li><a href="assunto.html">Projetos Inspiradores</a></li>
                        <li><a href="assunto2.html">Tecnologias Sustentáveis</a></li>
                        <li><a href="assunto3.html">Cidades Sustentáveis</a></li>
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
