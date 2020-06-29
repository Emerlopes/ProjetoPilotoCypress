/// <reference types="Cypress" />
import GenericosPage from '../pageObjects/GenericosPage';
import NovoUsuarioElements from '../elements/NovoUsuarioElements';
const nav = new GenericosPage;
const elemento = new NovoUsuarioElements;
const url = Cypress.config("baseUrl1");

class NovoUsuarioPage {

    // Clica no link Novo Usuário
    clicarNovoUsuario() {
        cy.clicar(elemento.linkNovoUsuario());
    }

    // Preenche o nome
    digitarNome(nome) {
        cy.digitarCampoTexto(elemento.inputNome(), nome);
    }

    // Preenche o email
    digitarEmail(email) {
        cy.digitarCampoTexto(elemento.inputEmail(), email);
    }

    // Preenche a senha
    digitarSenha(senha) {
        cy.digitarCampoTexto(elemento.inputSenha(), senha);
    }

    // Clica no botão cadastrar
    clicarCadastrar(botao) {
        cy.clicarPorTexto(botao)
        //nav.clicar(elemento.btnCadastrar());
    }

    // Valida mensagem
    validarMensagem(msg) {
        cy.validarTextoTela(msg, elemento.alerta());
        cy.print("Mensagem")
    }

}

export default NovoUsuarioPage;