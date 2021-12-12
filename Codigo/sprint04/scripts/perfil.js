function preencheForm() {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    let form = document.getElementById('form-componentes')
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
    usuarioLogado = {};
    sessionStorage.setItem ('usuarioLogado', JSON.stringify (usuarioLogado));
    // redirecionar para a pagina inicial
    document.location.reload();
}

function salvarAlteracoes() {
    
    
}



