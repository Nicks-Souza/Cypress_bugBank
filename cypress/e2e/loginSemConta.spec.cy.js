


describe('Usuarios tentam acessar o site sem ter uma conta criada', () => {

let data
  before(() => {
    cy.fixture('usuarioAleatorio').then((tData) => {
      data = tData
    });
  })

  it('através da pagina de login', () => {
    cy.login(data.email, data.password)
  })
})
