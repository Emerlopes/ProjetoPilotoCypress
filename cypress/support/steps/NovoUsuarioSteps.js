/* global Given, Then, When */

import NovoUsuarioPage from '../pageObjects/NovoUsuarioPage';
const page = new NovoUsuarioPage;

Given("acesso a Novo usuario", () => {
    page.clicarNovoUsuario();
})