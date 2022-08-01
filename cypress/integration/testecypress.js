import "./functions"
beforeEach(() => {
    
    cy.visit('/');
    cy.VerificarPagina();
//Iniciei com o beforeEach realizando nova visita a página e verificando campos e carregamento correto
});

describe('Testes da Página e validações', () => {
    it('Verificar página', () => {
// A verificação foi adicionada no beforeEach e irá ocorrer em todas as etapas
});

    it('Campos vázios', () => {
    cy.camposNaoPreenchidos();
// Nesta etapa verifiquei o não preenchimento e as mensagens de erro retornadas
});  
 
    it('Preenchimento incorreto dos campos', () => {
    cy.camposIncorretos();
// Nesta etapa verifiquei informações preenchidas incorretamente e as mensagens de erro retornadas pelos mesmos
});  
 
    it('Preenchimento dos campos e verificação', () => {
    cy.preencherDadosCorretos();
// Aqui realizei o preenchimento correto e o salvamento da criação de cadastro
}); 

    it('Edição incorreta', () => {
    cy.editarCampos();
// Nesta etapa realizei a edição incorreta e checagem de avisos de erros no campo de edição
}); 

    it('Edição correta', () => {
    cy.salvarCampos();
// Neste campo realizei a checagem dos campos corretos, edição correta e o salvamento das informações editadas
}); 

    it('Exclusão', () => {
    cy.excluirCadastro();
// Aqui realizei a exclusão e checagem de exclusão do cadastro
}); 
});
