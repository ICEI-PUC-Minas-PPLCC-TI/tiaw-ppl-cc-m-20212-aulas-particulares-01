

//------------------------STICKY NAV-------------------------//
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
//--------------------------------------------------------//


const LOGIN_URL = "login.html";

var db_usuarios = db_cadastro_inicial;
var usuarioLogado = {};

/* sepa n precisa disso
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
*/

function initLoginApp () {
    
    usuarioLogadoJSON = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogadoJSON) {
        usuarioLogado = JSON.parse (usuarioLogadoJSON);
    }
    

    var usuariosJSON = localStorage.getItem('db_usuarios');

    
    if (!usuariosJSON) {
        
        
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_usuarios = db_cadastro_inicial;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify (db_cadastro_inicial));
    }
    else  {
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};

function loginUser (usuario, senha) {
    
    for (i = 0; i < db_usuarios.data.length; i++) {
        var dadosUsuario = db_usuarios.data[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (usuario == dadosUsuario.usuario && senha == dadosUsuario.senha) {
            usuarioLogado.id = dadosUsuario.id;
            usuarioLogado.usuario = dadosUsuario.usuario;
            usuarioLogado.email = dadosUsuario.email;
            usuarioLogado.nome = dadosUsuario.nome;
            
            // Salva os dados do usuário Logado no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioLogado', JSON.stringify (usuarioLogado));

            return true;
        }
    }
    return false;
}

function logoutUser () {
    usuarioLogado = {};
    sessionStorage.setItem ('usuarioLogado', JSON.stringify (usuarioLogado));
    window.location = LOGIN_URL;
}

initLoginApp ();

function processaFormLogin (event) {                

    event.preventDefault ();

    
    var username = document.getElementById('loginUsuario').value;
    var password = document.getElementById('loginSenha').value;

    
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'index.html';
    }
    else {
        alert ('Usuário ou senha incorretos');
    }
}

document.getElementById ('login-form').addEventListener ('submit', processaFormLogin);