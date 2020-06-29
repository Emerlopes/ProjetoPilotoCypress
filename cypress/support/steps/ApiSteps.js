/* global Given, Then, When */

import ApiPage from '../pageObjects/ApiPage';
const page = new ApiPage;

Given("testando a rota", () => {
    cy.fixture(arquivo).as("mov").then(() => {
        page.digitarDataMovimentacao(this.mov.data_movimentacao);
    })
})

Given("requisicao na rota", () => {
    page.realizarRequisicao();
})