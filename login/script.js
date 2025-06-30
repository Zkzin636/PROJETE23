// Espera o carregamento da página e adiciona o listener no formulário
document.getElementById("login-form").addEventListener("submit", logar);

function logar(event){
    event.preventDefault(); // Impede o envio padrão do formulário

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Busca os usuários registrados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procura usuário com email ou nome de usuário e senha correspondentes
    const usuarioValido = usuarios.find(user => 
        (user.email === usuario || user.usuario === usuario) && user.senha === senha
    );

    if (usuarioValido) {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
