function carregaDisciplinas () { 
    let menuDisciplinas = document.getElementById ('menu_disciplinas')
    let htmlStr = ''

    for (i=0; i < db.disciplinas.length; i++) {
        let disciplina = db.disciplinas[i]
        htmlStr += `<li><a class="dropdown-item" href="disciplina.html?id=${disciplina.id}">${disciplina.titulo}</a></li>`
    }

    menuDisciplinas.innerHTML = htmlStr
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });

    return vars;
}

function carregaListaSites () {
    let listaSites = document.getElementById('lista-sites')
    let id = getUrlVars()["id"]
    let sites = db.disciplinas[id].site
    let htmlStr = ''

    for (i=0; i < sites.length; i++) {
        let site = sites[i]
        htmlStr += `<li><a href="${site.url}" target="_blank" class="btn">${site.nome}</a></li>`
    }
    listaSites.innerHTML = htmlStr
}

function carregaTitulo () {
    let titulo = document.getElementById ('titulo')
    let id = getUrlVars()["id"]
    let titulo_pag = db.disciplinas[id].titulo
    let htmlStr = ''

    htmlStr += `<h1 id="titulo">${titulo_pag}</h1>`

    titulo.innerHTML = htmlStr
}


function carregaCursos () {
    let containerCurso = document.getElementById('lista_cursos')
    let id = getUrlVars()["id"]
    let htmlStr = ''

    for (i=0; i < db.cursos.length; i++) {
        if (db.cursos[i].idDisciplina == id) {
            let curso = db.cursos[i]
            htmlStr +=
            `<li class="container-curso">
                <a href="curso.html">
                <img src="${curso.img}" alt="">
                <div class="container-texto">
                    <h5>${curso.nomeCurso}</h5>
                    <p class="disciplina"><span>Disciplina:</span> ${db.disciplinas[id].titulo}</p>
                    <p class="disciplina"><span>Descrição:</span> ${curso.descricao}</p>
                </div>
                </a>
          </li>`
        }
    }
    containerCurso.innerHTML = htmlStr
}
