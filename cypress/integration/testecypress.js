import "./functions"
beforeEach(() => {
    
    cy.visit('/');
    cy.VerificarPagina();
})

describe('Testes da Página e validações', () => {
    it('Verificar página', () => {
    });
    it('Campos vázios', () => {
    cy.camposNaoPreenchidos();
});  
    it('Preenchimento incorreto dos campos', () => {
    cy.camposIncorretos();
});  
 
    it('Preenchimento dos campos e verificação', () => {
    cy.preencherDadosCorretos()
}); 
    it('Edição incorreta', () => {
    cy.editarCampos();
}); 
    it('Edição correta', () => {
    cy.salvarCampos();
}); 
    it('Exclusão', () => {
    cy.excluirCadastro();
}); 
});
