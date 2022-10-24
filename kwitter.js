
function addUser() {

  //obtem o nome do usuario da scaixa de entrada e o armazena em uma variavel
  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  //armazena o valor da variavel user name no armazenamento local

    window.location = "kwitter_room.html";
  //redireciona o usuario para a pagina do kwitter_room.html
}

