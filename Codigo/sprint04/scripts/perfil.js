function preencheForm() {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    let form = document.getElementById('form-componentes')
    if (usuario) {
            let htmlStr = `<input type="text" class="form-control" id="inputId" hidden disabled>
                            
                        <label for="inputNome" class="form-label">Nome Completo:</label>
                        <input type="text" class="form-control" id="inputNome" value="${usuario.nome}">

                        <label for="inputUsuario" class="form-label">Nome de Usuário</label>
                        <input type="text" class="form-control" id="inputUsuario" value="${usuario.usuario}">

                        <label for="inputEmail" class="form-label">Endereço de Email</label>
                        <input type="email" class="form-control" id="inputEmail" value="${usuario.email}">

                        <label for="inputPassword" class="form-label">Digite uma senha</label>
                        <input type="password" class="form-control" id="inputSenha">

                        <label for="inputPassword" class="form-label">Confirme sua senha</label>
                        <input type="password" class="form-control" id="inputConfirmSenha">`

            form.innerHTML = htmlStr
    }
}



function apagarPerfil() {
    // FALTA: alerta: certeza que quer apagar o perfil? se sim proceder e apagar
    let usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    let id = usuario.id
    let dbCadastro = JSON.parse(localStorage.getItem('db_cadastro'));
    // apagar perfil do local storage
    dbCadastro = dbCadastro.filter(function (element) { return element.id != id });
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(dbCadastro));

    //Deslogar usuario
    LogoutUser()
}

function salvarAlteracoes() {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    let dbCadastro = JSON.parse(localStorage.getItem('db_cadastro'));
    let index = dbCadastro.map((obj) => obj.id).indexOf(usuario.id);
    let campoNome = document.getElementById('inputNome').val();
    let campoUsuario = document.getElementById('inputUsuario').val();
    let campoEmail = document.getElementById('inputEmail').val();
    let campoSenha = document.getElementById('inputSenha').val();
    let campoPapel = document.getElementById('inputPapel').val();
    let campoConfirmSenha = document.getElementById('inputConfirmSenha').val();

    (dbCadastro[index].nome = campoNome),
    (dbCadastro[index].email = campoEmail),
    (dbCadastro[index].confirmSenha = campoConfirmSenha),
    (dbCadastro[index].senha = campoSenha),
    (dbCadastro[index].papel = campoPapel),
    (dbCadastro[index].usuario = campoUsuario);

    (usuario.nome = campoNome),
    (usuario.email = campoEmail),
    (usuario.confirmSenha = campoConfirmSenha),
    (usuario.senha = campoSenha),
    (usuario.papel = campoPapel),
    (usuario.usuario = campoUsuario);


    localStorage.setItem("db_cadastro", JSON.stringify(dbCadastro));
    sessionStorage.setItem ('usuarioLogado', JSON.stringify (usuario));
}



