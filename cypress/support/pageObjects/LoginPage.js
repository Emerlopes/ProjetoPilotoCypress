/// <reference types="Cypress" />
import GenericosPage from './GenericosPage';
import NovoUsuarioElements from '../elements/NovoUsuarioElements';
const nav = new GenericosPage;
const elemento = new NovoUsuarioElements;
const url = Cypress.config("baseUrl1");

class LoginPage {

    // Clica no botão cadastrar
    clicarEntrar(botao) {
        nav.clicarPorTexto(botao)
        //nav.clicar(elemento.btnCadastrar());
    }
}

export default LoginPage;