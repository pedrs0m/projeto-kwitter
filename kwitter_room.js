
//ATUALIZAR O ELEMENTO HTML COM O NOME DO USUARIO

var firebaseConfig =
{
  apiKey: "AIzaSyC_HlvWcNEXyl44oiJDN8txHhkOcCan5FQ",
  authDomain: "projeto-kwitter.firebaseapp.com",
  databaseURL: "https://projeto-kwitter-default-rtdb.firebaseio.com",
  projectId: "projeto-kwitter",
  storageBucket: "projeto-kwitter.appspot.com",
  messagingSenderId: "394333858626",
  appId: "1:394333858626:web:44770949d3cf8f2f12f6db",
  measurementId: "G-ZQH4EH9E80"
}

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";


//A FUNCAO ADDROOM SERA CHAMADA QUANDO O BOTAO ADICIONAR SALA FOR CLICADO
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
//FUNCAO QUE OBTERA OS NOMES DA SALA DO BANCO DE DADOS
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
//FUNCAO QUE SERA CHAMADA QUANDO CLICLARMOS EM QUALQUER SALA
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
//FUNCAO PARA DESCONECTAR O PLAYER
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}


