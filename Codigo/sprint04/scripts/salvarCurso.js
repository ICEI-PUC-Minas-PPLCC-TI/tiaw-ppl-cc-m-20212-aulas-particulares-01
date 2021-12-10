var dbCursosSalvos = {
    salvos: [],
};


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });

    return vars;
}

function salvarCurso() {
    let idCurso = getUrlVars()["idCurso"];
    let teste = 0;
    let tmp = {};
    let dataSalvos;

    // checar se usuario ta logado
    //if (!usuarioCorrente.login) {
    //window.location.href = LOGIN_URL;
    //}
    //else {
    dataSalvos = JSON.parse(localStorage.getItem("cursosSalvos"))
    if (!dataSalvos) {
        dataSalvos = dbCursosSalvos.salvos
    }
    for (i = 0; i < dataSalvos.length; i++) {
        if (dataSalvos[i].idCurso == idCurso) {
            teste = 1;
        }
    }
    if (teste == 0) {
        alert("Curso salvo com sucesso")
        let curso = db.cursos[idCurso]
        tmp = {
            "idDisciplina": curso.idDisciplina,
            "idCurso": idCurso,
            "nomeCurso": curso.nomeCurso,
            "descricao": curso.descricao,
            "img": curso.img,
            //"idUsuario":,
        }
        dataSalvos.push(tmp);
    }
    else {
        alert("Você já salvou esse curso anteriormente")
    }

    localStorage.setItem("cursosSalvos", JSON.stringify(dataSalvos))
    //}
}


// carrega a lista de cursos salvos
function carregaCursosSalvos() {
    let containerCurso = document.getElementById('lista-cursos-salvos')
    let htmlStr = ''
    dataSalvos = JSON.parse(localStorage.getItem("cursosSalvos"))
    if (!dataSalvos) {
        dataSalvos = dbCursosSalvos.salvos
    }
    for (i = 0; i < dataSalvos.length; i++) {
        let curso = dataSalvos[i]
        htmlStr +=
            `<li class="container-curso">
                <a href="curso.html?idCurso=${curso.idCurso}&id=0" class="col-lg-3">
                    <img src="${curso.img}" alt="">
                </a>
                <div class="container-texto">
                    <div class="container-btn-titulo"> 
                        <a href="curso.html?idCurso=${curso.idCurso}&id=0"><h5>${curso.nomeCurso}</h5></a>
                        <button type="button" onclick="removeCurso(${i})"><ion-icon name="heart" class="btn-coracao"></ion-icon></button>
                    </div>
                    <a href="curso.html?idCurso=${curso.idCurso}&id=0">
                        <p class="disciplina"><span>Disciplina:</span> ${db.disciplinas[curso.idDisciplina].titulo}</p>
                        <p class="disciplina"><span>Descrição:</span> ${curso.descricao}</p>
                    </a>
                </div>
            </li>`
    }
    containerCurso.innerHTML = htmlStr
}



// remover curso selecionado pelo usuario
function removeCurso(index) {
    dataSalvos = JSON.parse(localStorage.getItem("cursosSalvos"))

    dataSalvos.splice(index, 1);
    localStorage.setItem("cursosSalvos", JSON.stringify(dataSalvos))

    carregaCursosSalvos()
}
