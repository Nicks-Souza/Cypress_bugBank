import { faker } from "@faker-js/faker";
import transferencia from "../selectors/transferencia.sel.cy";
require("cypress-xpath");

describe("Testes de Transferência no BugBank", () => {
  let contaComSaldo;
  let contaSemSaldo;



  before(() => {
    const pass1 = faker.internet.password();
    const pass2 = faker.internet.password();


    cy.new_user_com_saldo(
      faker.internet.email(),
      faker.person.fullName(),
      pass1
    );

  
    cy.new_user_sem_saldo(
      faker.internet.email(),
      faker.person.fullName(),
      pass2
    );
  });


  beforeEach(() => {
    cy.fixture("usuarioComSaldo").then((data) => {
      contaComSaldo = data;
    });
    cy.fixture("usuarioSemSaldo").then((data) => {
      contaSemSaldo = data;
    });
  });




  it("Deve realizar uma transferência válida entre contas", () => {

    cy.login(contaComSaldo.email, contaComSaldo.password);


    cy.xpath(transferencia["pagina-transferencia"].botao_transferencia).click();


    cy.xpath(transferencia["pagina-transferencia"].input_numeroConta)
      .click({ force: true })
      .type(contaSemSaldo.conta);

    cy.xpath(transferencia["pagina-transferencia"].input_digito)
      .click({ force: true })
      .type(contaSemSaldo.digito);

    cy.xpath(transferencia["pagina-transferencia"].input_valor)
      .click({ force: true })
      .type("100");

    cy.xpath(transferencia["pagina-transferencia"].input_descricao)
      .click({ force: true })
      .type("Transferência válida de teste");

    cy.xpath(transferencia["pagina-transferencia"].btn_confirmar).click();

    cy.xpath(transferencia["pagina-transferencia"].modal_sucesso)
      .should("be.visible")
      .and("contain.text", "Transferencia realizada com sucesso");
  });



  it("Não deve permitir transferência com dados inválidos", () => {
    const pass = faker.internet.password();
    const email = faker.internet.email();

    cy.new_user_com_saldo(email, faker.person.fullName(), pass);

    cy.fixture("usuarioComSaldo").then((contaNova) => {

      cy.login(contaNova.email, contaNova.password);

      cy.xpath(transferencia["pagina-transferencia"].botao_transferencia).click();


      cy.xpath(transferencia["pagina-transferencia"].input_numeroConta)
        .click({ force: true })
        .type("00000");

      cy.xpath(transferencia["pagina-transferencia"].input_digito)
        .click({ force: true })
        .type("0");

      cy.xpath(transferencia["pagina-transferencia"].input_valor)
        .click({ force: true })
        .type("500");

      cy.xpath(transferencia["pagina-transferencia"].input_descricao)
        .click({ force: true })
        .type("Transferência inválida de teste");

      cy.xpath(transferencia["pagina-transferencia"].btn_confirmar).click();


      cy.xpath(transferencia["pagina-transferencia"].modal_erro)
        .should("be.visible")
        .and("contain.text", "Conta inválida ou inexistente");

      cy.xpath(transferencia["pagina-transferencia"].botao_fechar_modal).click();
    });
  });




  it("Não deve permitir transferência com valor acima do saldo", () => {
    const passComSaldo = faker.internet.password();
    const passSemSaldo = faker.internet.password();

    cy.new_user_com_saldo(
      faker.internet.email(),
      faker.person.fullName(),
      passComSaldo
    );

    cy.new_user_sem_saldo(
      faker.internet.email(),
      faker.person.fullName(),
      passSemSaldo
    );


    cy.fixture("usuarioComSaldo").then((contaNovaSaldo) => {
      cy.fixture("usuarioSemSaldo").then((contaNovaSemSaldo) => {

        cy.login(contaNovaSaldo.email, contaNovaSaldo.password);

        cy.xpath(transferencia["pagina-transferencia"].botao_transferencia).click();


        cy.xpath(transferencia["pagina-transferencia"].input_numeroConta)
          .click({ force: true })
          .type(contaNovaSemSaldo.conta);

        cy.xpath(transferencia["pagina-transferencia"].input_digito)
          .click({ force: true })
          .type(contaNovaSemSaldo.digito);

        cy.xpath(transferencia["pagina-transferencia"].input_valor)
          .click({ force: true })
          .type("100000");

        cy.xpath(transferencia["pagina-transferencia"].input_descricao)
          .click({ force: true })
          .type("Tentando transferir acima do saldo");

        cy.xpath(transferencia["pagina-transferencia"].btn_confirmar).click();


        cy.xpath(transferencia["pagina-transferencia"].modal_erro)
          .should("be.visible")
          .and("contain.text", "Você não tem saldo suficiente para essa transação");

        cy.xpath(transferencia["pagina-transferencia"].botao_fechar_modal).click();
      });
    });
  });
});
