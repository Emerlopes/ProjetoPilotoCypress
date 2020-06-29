/* global Given, Then, When */

import NovoUsuarioPage from '../pageObjects/NovoUsuarioPage';
import LoginPage from '../pageObjects/LoginPage';
const page = new NovoUsuarioPage;
const pageLogin = new LoginPage;

When("informo os dados para login {} e {}", (email, senha) => {
    page.digitarEmail(email);
    page.digitarSenha(senha);
})

And("login realizado", function () {

    cy.fixture("autenticacao").as("login").then(() => {
        page.digitarEmail(this.login.email);
        page.digitarSenha(this.login.senha);
        pageLogin.clicarEntrar("Entrar")
    })

})