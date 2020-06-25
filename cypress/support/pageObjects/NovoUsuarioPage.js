/// <reference types="Cypress" />
import GenericosSteps from '../pageObjects/GenericosSteps';
import NovoUsuarioElements from '../elements/NovoUsuarioElements';
const nav = new GenericosSteps;
const elemento = new NovoUsuarioElements;
const url = Cypress.config("baseUrl1");

class NovoUsuarioPage {

    // Clica no link Novo Usuário
    clicarNovoUsuario() {
        nav.clicar(elemento.linkNovoUsuario());
    }

    // Preenche o nome
    digitarNome(nome) {
        nav.digitarCampoTexto(elemento.inputNome(), nome);
    }

    // Preenche o email
    digitarEmail(email) {
        nav.digitarCampoTexto(elemento.inputEmail(), email);
    }

    // Preenche a senha
    digitarSenha(senha) {
        nav.digitarCampoTexto(elemento.inputSenha(), senha);
    }

    // Clica no botão cadastrar
    clicarCadastrar(botao) {
        nav.clicarPorTexto(botao)
        //nav.clicar(elemento.btnCadastrar());
    }

    // Valida mensagem
    validarMensagem(msg) {
        nav.validarTextoTela(msg, elemento.alerta());
        nav.print("Mensagem")
    }

}

export default NovoUsuarioPage;