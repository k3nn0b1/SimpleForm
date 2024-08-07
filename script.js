$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
});

function logar(event) {
  const formulario = document.getElementById("formulario");

  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  const cpf = document.getElementById("cpf");

  const valorNome = nome.value;

  console.log("Nome:", valorNome);
  console.log("CPF:", cpf.value);
  console.log("telefone:", telefone.value);

  const usuario = {
    nomeCompleto: valorNome,
    cpfObtido: cpf.value,
    emailObtido: telefone.value,
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  const usuarioObtido = localStorage.getItem("usuario");

  console.log("usuarioObtido", JSON.parse(usuarioObtido));
}

