# Planos de teste de software **-----------------INCOMPLETO-------------------**

Requisitos para realização do teste:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso à plataforma

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

## Página das disciplinas

|CASO DE TESTE        |CT-01 - Visualizar as páginas das disciplinas                                                                                                                                                                                                                                                                    |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados|RF-01, RF-05                                                                                                                                                                                                                                                                                                     |
|Objetivo do Teste    |Verificar se a página das disciplinas está sendo carregada corretamente (cursos, links e nome da disciplina)                                                                                                                                                                                                     |
|Passos               |1) Acessar o Navegador <br> 2) Informar o endereço do Site <br>3) Visualizar a página principal  <br> 4) Abrir qualquer uma das disciplinas no menu dropdown "disciplinas"                                                                                                                                                      |
|Critérios de Êxito   |- O menu de disciplinas estará preenchido  <br>- O nome da disciplina escolhida no menu será carregado  <br>- Os sites indicados daquela disciplina aparecerão à direita  <br>- Serão carregados uma série de containers que apresentam os dados do curso: o nome, a disciplina, a descrição e uma imagem associada ao assunto |



## Página de estudos do usuário 

|CASO DE TESTE        |CT-02 - Cadastro de tarefas / o que deve ser estudado                                                                                                                                                                                                                                                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados|RF-07                                                                                                                                                                                                                                                                                                                                                                                              |
|Objetivo do Teste    |Verificar se o cadastro dos estudos está acontecendo corretamente                                                                                                                                                                                                                                                                                                                                  |
|Passos               |1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Fazer o login no site  <br>5) Abrir a página de estudos do usuário  <br>6) Criar uma tarefa - o que deve ser feito / estudado                                                                                                                                                                                    |
|Critérios de Êxito   |- Após criada, a tarefa aparecerá na página. A cor do card segue a prioridade da tarefa (vermelho: alta; laranja: média; verde: baixa) <br>- O usuário conseguirá alterar, excluir ou adicionar novas tarefas <br>- Ao dar uma tarefa como feita, ela será excluída <br>- Ao mudar a prioridade de uma tarefa o card deve ter sua cor alterada <br>- A página de estudos só poderá ser acessada mediante login  |


## Página de cursos salvos

|CASO DE TESTE        |CT-03 - Salvar cursos                                                                                                                                                                                                                                                                                                                                                                |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados|RF-13                                                                                                                                                                                                                                                                                                                                                                                |
|Objetivo do Teste    |Verificar se o usuário consegue salvar cursos e, posteriormente, visualizá-los na página "meus cursos"                                                                                                                                                                                                                                                                               |
|Passos               |1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Fazer o login no site  <br>5) Salvar algum curso (página da disciplina -> página do curso -> salvar curso) <br>6) Após clicar em salvar curso, um alerta aparecerá avisando o usuário se o curso foi salvado com sucesso ou se já havia sido salvado previamente <br>7) Acessar a página "meus cursos" |
|Critérios de Êxito   |- A página  só poderá ser acessada mediante login  <br>- O curso que foi salvado aparecerá na página, de lá é possível acessar a página do curso <br>- Se o usuário clicar no coração, o curso será removido da página de cursos salvos                                                                                                                                                      |


