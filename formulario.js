document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    var inputNome = document.getElementById('nome').value.trim();
    var inputEmail = document.getElementById('email').value.trim();
    var inputTelefone = document.getElementById('telefone').value.trim();

    if(!inputNome || !inputEmail || !inputTelefone){
        alert("Por favor, preencha todos os campos obrigatorios.");
        return;
    }

    const mensagem = `
        Informações do formulário:
        Nome: ${inputNome}
        E-mail: ${inputEmail}
        Telefone: ${inputTelefone}
    `;

    alert(mensagem)
})