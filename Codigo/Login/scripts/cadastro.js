// declara um conjunto inicial de cadastro
var db_cadastro_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Arthur da Silva",
            "senha": "senha123",
            "papel": "professor",
            "email": "profArthur@gmail.com",
            "usuario": "Arturito123",
            "confirmSenha": "senha123"
        },
        {
            "id": 2,
            "nome": "Clarice Soares",
            "senha": "senha123",
            "papel": "aluno",
            "email": "Clarice123@outlook.com",
            "usuario": "Clarice123",
            "confirmSenha": "senha123"
        },
        {
            "id": 3,
            "nome": "Marco Oliveira",
            "senha": "senha123",
            "papel": "aluno",
            "email": "Marco123@yahoo.com",
            "usuario": "Marquinhos123",
            "confirmSenha": "senha123"
        },
        {
            "id": 4,
            "nome": "Gabriel Monteiro",
            "senha": "senha123",
            "papel": "aluno",
            "email": "Gabriel789@gmail.com",
            "usuario": "Gabriel321",
            "confirmSenha": "senha123"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbCadastro = JSON.parse(localStorage.getItem('db_cadastro'));
if (!dbCadastro) {
    dbCadastro = db_cadastro_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCadastro(cadastro) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbCadastro.data[dbCadastro.data.length - 1].id + 1;
    let novoCadastro = {
        "id": novoId,
        "nome": cadastro.nome,
        "email" : cadastro.email,
        "usuario": cadastro.usuario,
        "senha" : cadastro.senha,
        "papel": cadastro.papel,
        "confirmSenha": cadastro.confirmSenha
    };

    // Insere o novo objeto no array
    dbCadastro.data.push(novoCadastro);
    displayMessage("Cadastro inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(dbCadastro));
}

function updateCadastro(id, cadastro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbCadastro.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbCadastro.data[index].nome = cadastro.nome,
    dbCadastro.data[index].email = cadastro.email,
    dbCadastro.data[index].confirmSenha = cadastro.confirmSenha,
    dbCadastro.data[index].senha = cadastro.senha,
    dbCadastro.data[index].papel = cadastro.papel,
    dbCadastro.data[index].confirmSenha = cadastro.confirmSenha

    displayMessage("Cadastro alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(dbCadastro));
}

function deleteCadastro(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbCadastro.data = dbCadastro.data.filter(function (element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(dbCadastro));
}

/***************************HTML */

function exibeCadastro() {
          // Remove todas as linhas do corpo da tabela
          $("#table-cadastro").html("");
  
          // Popula a tabela com os registros do banco de dados
          for (i = 0; i < dbCadastro.data.length; i++) {
              let cadastro = dbCadastro.data[i];    
              $("#table-cadastro").append(`<tr><td scope="row">${cadastro.id}</td>
                                              <td>${cadastro.nome}</td>
                                              <td>${cadastro.usuario}</td>
                                              <td>${cadastro.email}</td>
                                              <td>${cadastro.senha}</td>
                                              <td>${cadastro.papel}</td>
                                              <td>${cadastro.confirmSenha}</td>
                                          </tr>`);
          }
      }
  
      function init() {
          // Adiciona funções para tratar os eventos 
          $("#btnInsert").click(function () {
              // Verfica se o formulário está preenchido corretamente
              if (!$('#form-cadastro')[0].checkValidity()) {
                  displayMessage("Preencha o formulário corretamente.");
                  return;
              }
  
              // Obtem os valores dos campos do formulário
              let campoNome = $("#inputNome").val();
              let campoUsuario = $("#inputUsuario").val();
              let campoEmail = $('#inputEmail').val();
              let campoSenha = $("#inputSenha").val();
              let campoPapel = $('#inputPapel').val();
              let campoConfirmSenha = $('#inputConfirmSenha').val();
              let cadastro = { nome: campoNome, 
                  usuario: campoUsuario, 
                  email: campoEmail, 
                  senha: campoSenha, 
                  papel: campoPapel,
                  confirmSenha: campoConfirmSenha };
  
              insertCadastro(cadastro);
  
              // Reexibe os cadastros
              exibeCadastro();
  
              // Limpa o formulario
              $("#form-cadastro")[0].reset();
          });
  
          // Intercepta o click do botão Alterar
          $("#btnUpdate").click(function () {
              // Obtem os valores dos campos do formulário
              let campoId = $("#inputId").val();
              if (campoId == "") {
                  displayMessage("Selecione um cadastro para ser alterado.");
                  return;
              }
              let campoNome = $("#inputNome").val();
              let campoUsuario = $("#inputUsuario").val();
              let campoEmail = $("#inputEmail").val();
              let campoSenha = $("#inputSenha").val();
              let campoPapel = $("#inputPapel").val();
              let campoConfirmSenha = $('#inputConfirmSenha').val();
              let cadastro = { nome: campoNome, 
                  usuario: campoUsuario, 
                  email: campoEmail, 
                  senha: campoSenha, 
                  papel: campoPapel,
                  confirmSenha: campoConfirmSenha };
  
              updateCadastro(parseInt(campoId), cadastro);
  
              // Reexibe os cadastros
              exibeCadastro();
  
              // Limpa o formulario
              $("#form-cadastro")[0].reset();
          });
  
          // Intercepta o click do botão Limpar Formulário
          $("#btnClear").click(function () {
              $("#form-cadastro")[0].reset();
          });
  
          // Intercepta o click do botão Excluir
          $("#btnDelete").click(function () {
              let campoId = $("#inputId").val();
              if (campoId == "") {
                  displayMessage("Selecione um cadastro a ser excluído.");
                  return;
              }
              deleteCadastro(parseInt(campoId));
  
              // Reexibe os cadastros
              exibeCadastro();
  
              // Limpa o formulario
              $("#form-cadastro")[0].reset();
          });
  
          // Oculta a mensagem de aviso após alguns segundos
          $('#msg').bind("DOMSubtreeModified", function () {
              window.setTimeout(function () {
                  $(".alert").fadeTo(500, 0).slideUp(500, function () {
                      $(this).remove();
                  });
              }, 5000);
          });
  
          // Preenche o formulário quando o usuario clicar em uma linha da tabela 
          $("#grid-cadastro").on("click", "tr", function (e) {
              let linhaCadastro = this;
              colunas = linhaCadastro.querySelectorAll("td");
  
              $("#inputId").val(colunas[0].innerText);
              $("#inputNome").val(colunas[1].innerText);
              $("#inputUsuario").val(colunas[2].innerText);
              $("#inputEmail").val(colunas[3].innerText);
              $("#inputSenha").val(colunas[4].innerText);
              $("#inputPapel").val(colunas[5].innerText);
              $("#inputConfirmSenha").val(colunas[6].innerText);
          });
  
          exibeCadastro();
      }