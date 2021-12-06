// declara um conjunto inicial de tarefas
var db_tarefas_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Fazer os exercícios de trigonometria",
            "prioridade": "Média",
        },
        {
            "id": 2,
            "nome": "Rever curso de trigonometria",
            "prioridade": "Média",
        },
        {
            "id": 3,
            "nome": "Fazer as questões do enem 2020, dia 01",
            "prioridade": "Alta",
        },
        {
            "id": 4,
            "nome": "Fazer as questões do enem 2020, dia 02",
            "prioridade": "Alta",
        },
        {
            "id": 5,
            "nome": "Rever questões que errei no enem 2019",
            "prioridade": "Alta",
        },
        {
            "id": 6,
            "nome": "Assistir curso de cinemática",
            "prioridade": "Alta",
        },
        {
            "id": 7,
            "nome": "Escrever redação - tema a definir",
            "prioridade": "Baixa",
        },
        {
            "id": 8,
            "nome": "Fazer exercícios de citologia",
            "prioridade": "Média",
        },
        {
            "id": 9,
            "nome": "Fazer exercícios de química orgânica",
            "prioridade": "Baixa",
        },
        {
            "id": 10,
            "nome": "Assistir curso de  Química Geral",
            "prioridade": "Alta",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbTarefas = JSON.parse(localStorage.getItem('db_tarefa'));
if (!dbTarefas) {
    dbTarefas = db_tarefas_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertTarefa(tarefa) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbTarefas.data.length != 0) 
      novoId = dbTarefas.data[dbTarefas.data.length - 1].id + 1;
    let novaTarefa = {
        "id": novoId,
        "nome": tarefa.nome,
        "prioridade" : tarefa.prioridade,
    };

    // Insere o novo objeto no array
    dbTarefas.data.push(novaTarefa);
    displayMessage("Tarefa inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tarefa', JSON.stringify(dbTarefas));
}

function updateTarefa(id, tarefa) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbTarefas.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbTarefas.data[index].nome = tarefa.nome,

    dbTarefas.data[index].prioridade = tarefa.prioridade

    displayMessage("Tarefa alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tarefa', JSON.stringify(dbTarefas));
}

function deleteTarefa(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbTarefas.data = dbTarefas.data.filter(function (element) { return element.id != id });

    displayMessage("Tarefa removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tarefa', JSON.stringify(dbTarefas));
}