## :memo: BDD
Segue abaixo roteiro de testes/cenários no BDD:

Cenário 1: Campos vazios
Dado que eu esteja na tela inicial
Quando eu não preencher as informações necessárias
E clique em cadastrar/salvar as informações
Então devo receber as mensagens de erro e não conseguir prosseguir com o cadastro

Cenário 2: Preenchimento incorreto dos campos
Dado que eu esteja na tela inicial
Quando eu preencher dados fora dos padrões da página
E clicar em cadastrar/salvar as informações
Então devo receber as mensagens de erro e não conseguir prosseguir com o cadastro

Cenário 3: Preenchimento dos campos
Dado que eu esteja na tela inicial
Quando eu preencher dados corretamente
E clicar em cadastrar/salvar as informações
Então devo conseguir salvar o cadastro sem problemas

Cenário 4: Edição incorreta
Dado que eu esteja na tela inicial
Quando eu acessar a edição de um cadastro que fiz
E clicar para tentar editar com informações fora do padrão
Então devo receber as mensagens de erro e não conseguir prosseguir com a edição

Cenário 5: Edição correta
Dado que eu esteja na tela inicial
Quando eu acessar a edição de um cadastro que fiz
E clicar para tentar editar com informações dentro do padrão
Então devo conseguir realizar a edição 

Cenário 6: Exclusão
Dado que eu esteja na tela inicial
Quando eu acessar um cadastro que eu tenha editado ou não
E clicar para excluí-lo
Então devo conseguir excluí-lo e visualizar a mensagem de exclusão