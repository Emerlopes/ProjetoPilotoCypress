/* global Given, Then, When */

import GenericosPage from '../pageObjects/GenericosPage';
const page = new GenericosPage;

Given("acesso o site", () => {
    page.acessarSite();
})

And("clico em {}", (texto) => {
    page.clicarPorTexto(texto);
})

And("devo visualizar a mensagem {}", (msg) => {
    page.validarMsgTela(msg)
})
