/* global Given, Then, When */

import NovoUsuarioPage from '../pageObjects/NovoUsuarioPage';
const page = new NovoUsuarioPage;

When("informo os dados para login {} e {}", (email, senha) => {
    page.digitarEmail(email);
    page.digitarSenha(senha);
})