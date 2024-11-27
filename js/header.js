document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <div class="logo">
                <img src="logo.png" alt="Logo">
            </div>
            <nav>
                <div class="toggle-menu">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="assunto.html">Assunto 1</a></li>
                        <li><a href="assunto2.html">Assunto 2</a></li>
                        <li><a href="assunto3.html">Assunto 3</a></li>
                        <li><a href="contato.html">Contato</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li><a href="politica.html">Política do site</a></li>
                        <li><a href="#" id="theme-toggle">Alterar Tema</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});