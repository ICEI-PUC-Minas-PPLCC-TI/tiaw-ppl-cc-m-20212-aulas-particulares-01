// declara um conjunto inicial de cadastro
var db_cadastro_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Arthur da Silva",
            "cidade": "Belo Horizonte",
            "papel": "professor",
            "email": "profArthur@gmail.com",
            "usuario": "Arturito123",
            "telefone": "(31) 91234-5678"
        },
        {
            "id": 2,
            "nome": "Clarice Soares",
            "cidade": "Betim",
            "papel": "aluno",
            "email": "Clarice123@outlook.com",
            "usuario": "Clarice123",
            "telefone": "(31) 99012-3456"
        },
        {
            "id": 3,
            "nome": "Marco Oliveira",
            "cidade": "Rio de Janeiro",
            "papel": "aluno",
            "email": "Marco123@yahoo.com",
            "usuario": "Marquinhos123",
            "telefone": "(21) 97890-1234"
        },
        {
            "id": 4,
            "nome": "Gabriel Monteiro",
            "cidade": "Belo Horizonte",
            "papel": "aluno",
            "email": "Gabriel789@gmail.com",
            "usuario": "Gabriel321",
            "telefone": "(31) 95678-9012"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_cadastro'));
if (!db) {
    db = db_cadastro_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCadastro(cadastro) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoCadastro = {
        "id": novoId,
        "nome": cadastro.nome,
        "email" : cadastro.email,
        "usuario": cadastro.usuario,
        "cidade" : cadastro.cidade,
        "papel": cadastro.papel,
        "telefone": cadastro.telefone
    };

    // Insere o novo objeto no array
    db.data.push(novoCadastro);
    displayMessage("Cadastro inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}

function updateCadastro(id, cadastro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = cadastro.nome,
    db.data[index].email = cadastro.email,
    db.data[index].telefone = cadastro.telefone,
    db.data[index].cidade = cadastro.cidade,
    db.data[index].papel = cadastro.papel,
    db.data[index].telefone = cadastro.telefone

    displayMessage("Cadastro alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}

function deleteCadastro(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}