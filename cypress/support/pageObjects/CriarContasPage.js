/// <reference types="Cypress" />
import GenericosPage from './GenericosPage';
import CriarContasElements from '../elements/CriarContasElements';
const gen = new GenericosPage;
const elemento = new CriarContasElements;


class CriarContasPage {


    // Digita o nome da conta
    digitarNome(nome) {
        gen.digitarCampoTexto(elemento.contaNome(), nome);
    }

    // Cria conta
    criarConta(nomeConta) {

        let valor = cy.get(elemento.alerta()).title();
        console.log("O que tem aqui? " + valor);

        nomeConta = nomeConta + " " + Math.round(Math.random() * 100);
        gen.clicarPorTexto("Contas");
        gen.clicarPorTexto("Adicionar");
        gen.digitarCampoTexto(elemento.contaNome(), nomeConta);
        gen.clicar(elemento.btnSalvar());
        gen.validarMsgTela("Conta adicionada com sucesso!");

        let nome = nomeConta;

    }

    // valida a conta criada
    validarContaListada(nomeConta) {
        cy.get('tbody').find('tr')
            .should('contain', nomeConta);
    }
}

export default CriarContasPage;