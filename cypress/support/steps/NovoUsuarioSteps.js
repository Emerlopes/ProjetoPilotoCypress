/* global Given, Then, When */

import GenericosSteps from '../pageObjects/GenericosSteps';
import NovoUsuarioPage from '../pageObjects/NovoUsuarioPage';
const nav = new GenericosSteps;
const page = new NovoUsuarioPage;

Given("acesso o site", () => {
    nav.acessarSite();
})

Given("acesso a Novo usuario", () => {
    page.clicarNovoUsuario();
})

When("informo os dados para cadastro {}, {} e {}", (nome, email, senha) => {
    page.digitarNome(nome);
    page.digitarEmail(email);
    page.digitarSenha(senha);
})

And("clico no botao cadastrar", () => {
    page.clicarCadastrar();
})

And("devo visualizar a mensagem {}", (msg) => {
    page.validarMensagem(msg);
})
