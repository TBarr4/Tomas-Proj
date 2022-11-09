<h1 align="center">:file_cabinet: Tomas-Proj:</h1>

## :memo: Descrição
Este projeto tem o intuito de demonstrar as minhas habilidades em cypress adquiridas até o momento, afim de vislumbrar evolução futura

## :books: Funcionalidades
* <b>Funcionalidade</b>: Dentro deste projeto será encontrado um script de teste que contempla os cenários descritos pelo bdd que também está apresentado na pasta readme, assim como o cumprimento das etapas pedidas

## :wrench: Tecnologia utilizada
* Cypress;

## :rocket: Rodando o projeto
Após o projeto ser clonado em sua maquina, para  executá-lo basta instalar o cypress e abri-lo com o seguinte comando abaixo que já está levando em conta a config.
```
<./node_modules/.bin/cypress open --env configFile=QA>
```
## :memo: Roteiro de testes utilizado/BDD
Segue abaixo roteiro de testes/cenários no BDD:


Cenário 1: Campos vazios

Dado que eu esteja na tela inicial

Quando eu não preencher as informações necessárias

E clique em cadastrar/salvar as informações

Então devo receber as mensagens de erro e não conseguir prosseguir com o cadastro
```

Cenário 2: Preenchimento incorreto dos campos

Dado que eu esteja na tela inicial

Quando eu preencher dados fora dos padrões da página

E clicar em cadastrar/salvar as informações

Então devo receber as mensagens de erro e não conseguir prosseguir com o cadastro
```

Cenário 3: Preenchimento dos campos

Dado que eu esteja na tela inicial

Quando eu preencher dados corretamente

E clicar em cadastrar/salvar as informações

Então devo conseguir salvar o cadastro sem problemas
```

Cenário 4: Edição incorreta

Dado que eu esteja na tela inicial

Quando eu acessar a edição de um cadastro que fiz

E clicar para tentar editar com informações fora do padrão

Então devo receber as mensagens de erro e não conseguir prosseguir com a edição
```

Cenário 5: Edição correta

Dado que eu esteja na tela inicial

Quando eu acessar a edição de um cadastro que fiz

E clicar para tentar editar com informações dentro do padrão

Então devo conseguir realizar a edição 
```

Cenário 6: Exclusão

Dado que eu esteja na tela inicial

Quando eu acessar um cadastro que eu tenha editado ou não

E clicar para excluí-lo

Então devo conseguir excluí-lo e visualizar a mensagem de exclusão
```

## :handshake: Realizado por
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/TBarr4">
        <img src="https://avatars.githubusercontent.com/u/106219774?v=4" width="100px;" alt="Foto de TBarr4 no GitHub"/><br>
        <sub>
          <b>TBarr4</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
Caso surjam demais dúvidas me mantenho à disposição

Um abraço = )
## :dart: Projeto concluido 
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="tomas-barra" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/tomas-barra?trk=profile-badge">Tomás Barra</a></div>
              
