# 🧩 Plano de Teste – BugBank
**Squad 3 – Regressores Anônimos**

[![Cypress](https://img.shields.io/badge/Cypress-10.0.0-brightgreen)](https://www.cypress.io/)
[![License](https://img.shields.io/badge/License-Educational-blue)](LICENSE)

---

## 📘 Sobre o Projeto
O **Plano de Teste – BugBank** foi desenvolvido durante o **Bootcamp Atlântico Avanti**, no curso de **Quality Assurance (QA)**.  

O projeto tem como objetivo **planejar, executar e documentar testes manuais e automatizados** na aplicação **BugBank**, um sistema de internet banking educacional com falhas propositalmente inseridas para prática de QA.

Funcionalidades principais:
- Registro e login de usuários
- Transferências entre contas
- Gestão de saldo
- Fluxos funcionais, exploratórios e de integração

---

## 🎯 Objetivo
Assegurar a qualidade do sistema BugBank, garantindo:
- Testes de funcionalidades críticas
- Registro e documentação de bugs
- Identificação de melhorias

O ciclo completo de QA abrange:
- Planejamento de testes manuais e automatizados
- Execução de cenários
- Registro e análise de defeitos
- Métricas e relatórios

---

## ⚙️ Ferramentas Utilizadas
| Categoria | Ferramenta | Finalidade |
|------------|-------------|------------|
| Gerenciamento de Projeto | Jira / Google Sheets  | Planejamento e acompanhamento de testes |
| Automação de Testes | Cypress | Testes end-to-end (UI e fluxo funcional) |
| Controle de Versão | Git / GitHub | Versionamento de código e documentação |
| Comunicação |  Discord | Colaboração da equipe |

---

## 🧪 Casos de Teste Automatizados
| ID | Caso de Teste | Resultado Esperado |
|----|----------------|--------------------|
| **TC002** | Login com sucesso | Usuário autenticado e redirecionado ao dashboard |
| **TC003** | Login com credenciais inválidas | Exibir mensagem “Credenciais inválidas” |
| **TC006** | Registrar com senhas que não coincidem | Bloquear registro e exibir mensagem de erro |
| **TC007** | Criar conta sem saldo | Conta criada com saldo inicial R$ 0,00 |
| **TC008** | Criar conta com saldo | Conta criada com saldo inicial R$ 1.000,00 |
| **TC011** | Transferência com dados válidos | Transação concluída e saldo atualizado |
| **TC012** | Transferência com dados inválidos | Exibir mensagem “Conta inexistente” |
| **TC013** | Transferência com valor acima do saldo | Exibir mensagem “Saldo insuficiente” |

---

## 📊 Métricas de Teste
- **Total de casos testados:** 18  
- **Casos aprovados:** 13  
- **Casos com falha:** 3
- **Casos em desenvolvimento(plataforma não estava disponível):** 2
- **Cobertura de funcionalidades principais:** 100%  


---

## 👥 Squad 3 – Regressores Anônimos
- Alan Oliveira
- Cristiano de Aguiar Lima  
- Laura Costa  
- Luan Silva  
- Nicolas Ferreira  
  

---

## 🧾 Professor e Facilitadores
- **Professor:** Francisco Gutemberg  
- **Facilitadores:** William Filho e Niêdja Kaliene

---

## 🗓️ Data de Entrega
25 de outubro de 2025

---

## 📎 Licença
Uso **educacional e acadêmico**.  
© 2025 Atlântico Avanti | Bootcamp Quality Assurance
