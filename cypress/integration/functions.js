Cypress.Commands.add('camposNaoPreenchidos', () => {
    cy.contains('Cadastrar').click()
    cy.get(':nth-child(2) > .form-text').should('be.visible').contains('O campo Nome é obrigatório.')
    cy.get(':nth-child(3) > .form-text').should('be.visible').contains('O campo Email é obrigatório.')
    cy.get(':nth-child(4) > .form-text').should('be.visible').contains('O campo Password é obrigatório.')
});

Cypress.Commands.add('camposIncorretos', () => {
    cy.get('#name').type(Cypress.env('nameErrado'))
    cy.get('#password').type(Cypress.env('passErrado'))
    cy.contains('Cadastrar').click()
    cy.get(':nth-child(2) > .form-text').should('be.visible').contains('Insira um Nome e Sobrenome válido.')
    cy.get(':nth-child(3) > .form-text').should('be.visible').contains('O campo Email é obrigatório.')
    cy.get(':nth-child(4) > .form-text').should('be.visible').contains('O campo Password deve ter no minimo 8 caracteres.')
 
});

Cypress.Commands.add('preencherDadosCorretos', () => {
    cy.get('#name').type(Cypress.env('name'))
    cy.get('#email').type(Cypress.env('user'))
    cy.get('#password').type(Cypress.env('pass'))
    cy.contains('Cadastrar').click()
    cy.get('.alert').should('be.visible').contains('Usuário cadastrado com sucesso.')
    cy.get('td').nextAll().last().find('button').click({force: true})
    cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
    cy.get('.modal-body').should('be.visible')
    cy.get('.form-group.py-1').should('be.visible')
    cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('name'))
    cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value', Cypress.env('user'))
});

Cypress.Commands.add('VerificarPagina', () => {
    cy.location().its('href').should('include', `${Cypress.env('baseUrl')}`)
    cy.get('html').should('be.visible')
    cy.get('#name').should('be.visible').should('be.empty')
    cy.get('#email').should('be.visible').should('be.empty')
    cy.get('#password').should('be.visible').should('be.empty')
});

Cypress.Commands.add('editarCampos', () => {
    cy.get('td').nextAll().last().find('button').click({force: true})
    cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
    cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('name')).clear().type(Cypress.env('ediçãoErrado'))    
    cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
    cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value',Cypress.env('user')).clear()
    cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
});
Cypress.Commands.add('salvarCampos', () => {
    cy.get('td').nextAll().last().find('button').click({force: true})
    cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
    cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('name')).clear().type(Cypress.env('nameEditado'))
    cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value',Cypress.env('user')).clear().type(Cypress.env('userEditado'))
    cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
    cy.get('.alert').should('be.visible').contains('Usuário salvo com sucesso.')   
});
Cypress.Commands.add('excluirCadastro', () => {
    cy.get('td').nextAll().last().find('button').click({force: true})
    cy.get('div.show:nth-child(2) > a:nth-child(3)').click({force: true})
    cy.get('.modal-footer').find('.btn-danger').last().click({force: true})
    cy.get('.alert').should('be.visible').contains('Usuário removido com sucesso.')
});