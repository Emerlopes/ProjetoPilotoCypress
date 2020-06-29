/// <reference types="Cypress" />
import GenericosPage from '../pageObjects/GenericosPage';
import CriarMovimentacaoElements from '../elements/CriarMovimentacaoElements';
const nav = new GenericosPage;
const elemento = new CriarMovimentacaoElements;

class CriarMovimentacaoPage {

    // Digita a data de movimentação
    digitarDataMovimentacao(datMovimentacao) {
        cy.digitarCampoTexto(elemento.inputDataMovimentacao(), datMovimentacao);
    }

    // Digita a data do pagamento
    digitarDataPagamento(datPagamento) {
        cy.digitarCampoTexto(elemento.inputDataPagamento(), datPagamento);
    }

    // Digita a descrição
    digitarDescricao(descricao) {
        cy.digitarCampoTexto(elemento.inputDescricao(), descricao);
    }

    // Digita o interessado
    digitarInteressado(interessado) {
        cy.digitarCampoTexto(elemento.inputInteressado(), interessado);
    }

    // Digita o valor
    digitarValor(valor) {
        cy.digitarCampoTexto(elemento.inputValor(), valor);
    }

    // Seleciona a conta
    selecionarConta(conta) {
        cy.selecionarValorLista(elemento.selectConta(), conta)
    }

    // Seleciona a situação
    selecionarSituacao(situacao) {
        switch (situacao) {
            case "Pago":
                cy.selecionarValorRadion(elemento.radionSituacaoPago());
                break;
            case "Pendente":
                cy.selecionarValorRadion(elemento.radionSituacaoPendente());
                break;
            default:
        }
        nav.print();
    }
}

export default CriarMovimentacaoPage;