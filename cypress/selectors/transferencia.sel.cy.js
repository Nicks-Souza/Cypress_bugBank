module.exports = {
  "pagina-transferencia": {
    botao_transferencia: "//a[@id='btn-TRANSFERÊNCIA']",
    input_numeroConta: "//input[@name='accountNumber']",
    input_digito: "//input[@name='digit']",
    input_valor: "//input[@name='transferValue']",
    input_descricao: "//input[@name='description']",
    btn_confirmar: "//button[@type='submit']",
    modal_sucesso: "//p[contains(text(),'Transferencia realizada com sucesso')]",
    modal_erro: "//p[contains(text(),'Conta inválida ou inexistente') or contains(text(),'Você não tem saldo suficiente para essa transação')]",
    botao_fechar_modal: "//a[contains(text(),'Fechar')]",
    botao_sair: "//a[@id='btnExit']",
  },
}
