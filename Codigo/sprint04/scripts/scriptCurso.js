function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });

    return vars;
}


function carregaNomeCurso() {
    let tituloCurso = document.getElementById('nomeCurso')
    let idCurso = getUrlVars()["idCurso"]
    let nome_curso = db.cursos[idCurso].nomeCurso
    let htmlStr = ''

    htmlStr += `<h1 id="nomeCurso">${nome_curso}</h1>`


    tituloCurso.innerHTML = htmlStr
}


function carregaNomeDisciplina() {
    let tituloDisciplina = document.getElementById('nomeDisciplina')
    let btnVoltar = document.getElementById('btnVoltar')
    let idCurso = getUrlVars()["idCurso"]
    let idDisciplina = db.cursos[idCurso].idDisciplina

    for (i = 0; i < db.disciplinas.length; i++) {
        if (idDisciplina == db.disciplinas[i].id) {
            let nomeDisciplina = db.disciplinas[i].titulo
            let htmlStr = ''

            htmlStr += `<h4 id="nomeDisciplina">${nomeDisciplina}</h4>`

            tituloDisciplina.innerHTML = htmlStr
        }
    }
    for (i = 0; i < db.disciplinas.length; i++) {
        if (idDisciplina == db.disciplinas[i].id) {
            let nomeDisciplina = db.disciplinas[i].titulo
            let htmlStr = ''

            htmlStr += `<a class="btn voltar" href="disciplina.html?id=${db.disciplinas[i].id}">voltar para ${nomeDisciplina}</a>`

            btnVoltar.innerHTML = htmlStr
        }
    }
}


function carregaConteudoCurso() {
    let containerConteudo = document.getElementById('conteudoCurso')
    let idCurso = getUrlVars()["idCurso"]
    let id = getUrlVars()["id"]
    let video = db.cursos[idCurso].videos[id]
    let htmlStr = ''
    htmlStr +=
        `<div class="container-curso-video">
                <iframe src="${video.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="container-curso-texto">
                <h5>${video.nomeVideo}</h5>
                <p><span>Descrição: </span>${video.descricaoVideo}</p>
          </div>`

    containerConteudo.innerHTML = htmlStr
}


function carregaMenuConteudo() {
    let menuConteudo = document.getElementById('menuConteudo')
    let id = getUrlVars()["idCurso"]
    let videos = db.cursos[id].videos
    let htmlStr = ''

    for (i = 0; i < videos.length; i++) {
        let video = videos[i]
        htmlStr += `<li><a href="curso.html?idCurso=${id}&id=${video.idVideo}" class="btn">${video.nomeVideo}</a></li>`
    }
    menuConteudo.innerHTML = htmlStr
}


function carregaTitle() {
    let idCurso = getUrlVars()["idCurso"]
    document.title = db.cursos[idCurso].nomeCurso;
}
