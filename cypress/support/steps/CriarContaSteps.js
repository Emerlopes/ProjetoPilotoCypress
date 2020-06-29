/* global Given, Then, When */

import GenericosPage from '../pageObjects/GenericosPage';
import TelaInicialElements from '../elements/TelaInicialElements';
import CriarContasPage from '../pageObjects/CriarContasPage';
const page = new CriarContasPage;
const gen = new GenericosPage;
const elemento = new TelaInicialElements;

When("informo o {} para criar a conta", (nomeConta) => {
    page.digitarNome(nomeConta);
})

And("conta criada com o nome {}", (nomeConta) => {
    page.criarConta(nomeConta);
})

Then("devo visualizar a conta criada {}", (nomeConta) => {
    page.validarContaListada(nomeConta);
})