/* global Given, Then, When */

import NovoUsuarioPage from '../pageObjects/NovoUsuarioPage';
const page = new NovoUsuarioPage;

Given("acesso a Novo usuario", () => {
    page.clicarNovoUsuario();
})

When("informo os dados para cadastro {}, {} e {}", (nome, email, senha) => {
    page.digitarNome(nome);
    page.digitarEmail(email);
    page.digitarSenha(senha);
})