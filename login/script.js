
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    const dados = localStorage.getItem("usuarioRegistrado");

    if (!dados) {
      alert("Nenhuma conta encontrada. Registre-se primeiro.");
      return;
    }

    const usuario = JSON.parse(dados);

    if (email === usuario.email && senha === usuario.senha) {
      alert("Login realizado com sucesso!");
      window.location.href = "pagina-principal.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  });
});