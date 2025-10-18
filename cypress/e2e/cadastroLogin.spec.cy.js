import{faker} from '@faker-js/faker'
import cadastro from '../selectors/cadastro.sel.cy'
require ('cypress-xpath');


describe('Usuarios devem realizar o cadastro e o login', () => {


let data
  before(() => {
    cy.fixture('usuarioComSaldo').then((tData) => {
      data = tData
    });
  })

it('atraves do cadastro da aplicacao com sucesso, depois página de login com sucesso e estando com saldo', () => {
    var pass = faker.internet.password();

    cy.new_user_com_saldo(
    faker.internet.email(),
    faker.person.fullName(), 
    pass,
    )
    cy.readFile('cypress/fixtures/usuarioComSaldo.json').then((data) => {
     cy.login(data.email, data.password)
    })
    cy.get(cadastro["pagina-logado"].painel_usuario)
      .should('exist').and('be.visible').and('contain.text', 'R$');
})
it('atraves do cadastro da aplicacao com sucesso, depois página de login com sucesso e estando sem saldo', () => {
    var pass = faker.internet.password();


    cy.new_user_sem_saldo(
    faker.internet.email(),
    faker.person.fullName(), 
    pass,
    )
    cy.readFile('cypress/fixtures/usuarioSemSaldo.json').then((data) => {
    cy.login(data.email, data.password);
    })
    cy.get(cadastro["pagina-logado"].painel_usuario)
      .should('exist').and('be.visible')
})
})

describe('Usuarios realizam o cadastro com senha e confirmação senha diferentes', () => {
  it('atraves do cadastro da aplicação', () => {
    cy.new_user_com_senha_diferente(
      faker.internet.email(),
      faker.person.fullName(),
      faker.internet.password(),
      faker.internet.password(),
    )
  })
})
