function novoUsuario() {
  let divNovoUsuario = document.getElementById("divNovoUsuario"); // div
  divNovoUsuario.classList.remove("displayNone");

  let buttonUsuarioCadastrado = document.getElementById("usuarioCadastrado");
  let buttonCadastroUser = document.getElementById("newUser");
  buttonUsuarioCadastrado.classList.remove("corAzul");
  buttonCadastroUser.classList.add("corAzul");
}

function usuariosCadastrados() {
  let divNovoUsuario = document.getElementById("divNovoUsuario"); // div

  let buttonUsuarioCadastrado = document.getElementById("usuarioCadastrado");
  let buttonCadastroUser = document.getElementById("newUser");
  divNovoUsuario.classList.add("displayNone");
  buttonUsuarioCadastrado.classList.add("corAzul");
  buttonCadastroUser.classList.remove("corAzul");
}
