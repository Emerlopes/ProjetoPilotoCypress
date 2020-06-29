/* global Given, Then, When */

import CriarMovimentacaoPage from '../pageObjects/CriarMovimentacaoPage';
const page = new CriarMovimentacaoPage;

let arquivo;
And("informo a massa de teste no formato {}", function (json) {
    arquivo = json;
})

And("informo os dados para criar uma movimentacao, {}", function () {
    cy.fixture(arquivo).as("mov").then(() => {
        page.digitarDataMovimentacao(this.mov.data_movimentacao);
        page.digitarDataPagamento(this.mov.data_pagamento);
        page.digitarDescricao(this.mov.descricao);
        page.digitarInteressado(this.mov.interessado);
        page.digitarValor(this.mov.valor);
        page.selecionarConta(this.mov.conta);
        page.selecionarSituacao(this.mov.situacao);
    })
})