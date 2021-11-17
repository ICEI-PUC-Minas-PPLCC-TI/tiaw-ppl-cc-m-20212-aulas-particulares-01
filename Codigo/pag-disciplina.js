var db = {
    disciplinas: [
        {
            id: '0',
            titulo: 'Matemática',
            site: [
                    {
                        nome: 'Khan Academy',
                        url: 'https://pt.khanacademy.org/',
                    },
                    {
                        nome: 'Mestres da Matemática',
                        url: 'https://pt.khanacademy.org/',
                    },
                    {
                        nome: 'Só Matemática',
                        url: 'https://www.somatematica.com.br/',
                    },
                    {
                        nome: 'edX',
                        url: 'https://www.edx.org/course/subject/math',
                    },
                ]
        },
        {
            id: '1',
            titulo: 'Biologia',
            site: [
                    {
                        nome: 'Prof. Guilherme Goulart',
                        url: 'https://www.youtube.com/c/BiologiaProfGuilherme/featured',
                    },
                    {
                        nome: 'Biologia Total',
                        url: 'https://www.youtube.com/user/jubilut',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: 'https://brasilescola.uol.com.br/biologia',
                    },
                    {
                        nome: 'Só Biologia',
                        url: 'https://www.sobiologia.com.br/',
                    },
                ]
        },
        {
            id: '2',
            titulo: 'Química',
            site: [
                    {
                        nome: 'Química Sem Segredos',
                        url: 'http://quimicasemsegredos.com/',
                    },
                    {
                        nome: 'Só Química',
                        url: 'https://www.soquimica.com.br/',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: ' https://brasilescola.uol.com.br/quimica',
                    },
                    {
                        nome: 'Química On-line',
                        url: 'https://quimicaonline.com.br/',
                    },
                ]
        },
        {
            id: '3',
            titulo: 'Física',
            site: [
                    {
                        nome: 'Chama o Físico',
                        url: 'https://www.youtube.com/channel/UCHW95H66qwKrZVizKOk1BJA',
                    },
                    {
                        nome: 'Só Física',
                        url: 'https://www.sofisica.com.br/',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: 'https://brasilescola.uol.com.br/fisica',
                    },
                ]
        },
        {
            id: '4',
            titulo: 'Português',
            site: [
                    {
                        nome: 'Jana Rabelo',
                        url: 'https://www.youtube.com/c/JanaRabelo/featured',
                    },
                    {
                        nome: 'Só Português',
                        url: 'https://www.soportugues.com.br/',
                    },
                    {
                        nome: 'Só Literatura',
                        url: 'https://www.soliteratura.com.br/',
                    },
                    {
                        nome: 'Gramática On-line',
                        url: 'https://gramaticaonline.com.br/',
                    },
                    {
                        nome: 'Professor Nolsen',
                        url: 'https://www.youtube.com/c/ProfessorNoslen/featured',
                    },
                ]
        },
        {
            id: '5',
            titulo: 'História',
            site: [
                    {
                        nome: 'História Online',
                        url: 'https://www.youtube.com/c/Hist%C3%B3riaOnlineoficial/featured',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: 'https://brasilescola.uol.com.br/historiag',
                    },
                    {
                        nome: 'Só História',
                        url: 'https://www.sohistoria.com.br/',
                    },
                    {
                        nome: 'História do Mundo',
                        url: 'https://www.historiadomundo.com.br/',
                    },
                ]
        },
        {
            id: '6',
            titulo: 'Geografia',
            site: [
                    {
                        nome: 'Terra Negra',
                        url: 'https://www.youtube.com/channel/UCbQ4CkszFFUju5XtFid-XWQ',
                    },
                    {
                        nome: 'Só Geografia',
                        url: 'https://www.sogeografia.com.br/',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: 'https://brasilescola.uol.com.br/geografia',
                    },
                    {
                        nome: 'The World Factbook',
                        url: 'https://www.cia.gov/the-world-factbook/a',
                    },
                ]
        },
        {
            id: '7',
            titulo: 'Inglês',
            site: [
                    {
                        nome: 'Cambridge English',
                        url: 'https://www.cambridgeenglish.org/learning-english/',
                    },
                    {
                        nome: 'Brasil Escola',
                        url: 'https://brasilescola.uol.com.br/ingles',
                    },
                    {
                        nome: 'Duolingo',
                        url: 'https://pt.duolingo.com/course/en/pt/Aprenda-ingl%C3%AAs',
                    },
                    {
                        nome: 'Busuu',
                        url: 'https://www.busuu.com/pt/register?learning=en',
                    },
                    {
                        nome: 'English in Brazil',
                        url: 'https://www.youtube.com/user/carinafragozo',
                    },
                ]
        },
    ]
}

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
