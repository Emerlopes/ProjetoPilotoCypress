/// <reference types="Cypress" />
const url = Cypress.config("baseUrl");

class GenericosPage {



    // Pausa a execução do código em um ponto determinado
    interromper() {
        cy.pause();
    }

    // Recarregar a página
    recarregarPagina() {
        cy.reload();
    }

    // Evidenciar a tela
    print(msg) {
        cy.screenshot(msg);
    }

    //          AÇÕES DO NAVEGADOR

    // Recupera o elemento e clica
    clicar(elemento) {
        cy.get(elemento).should('exist').click();
    }

    // Recuper o elemento por nome e clica
    clicarPorTexto(texto) {
        cy.contains(texto.replace(/"/g, '')).click();
    }

    //             VALIDAÇÕES

    validarTextoCampo(Esperado, elemento) {
        cy.get(elemento).should('have.value', Esperado)
    }

    validarTextoTela(Esperado, elemento) {
        cy.get(elemento).should('have.text', Esperado)
    }

    validarMsgTela(msg) {
        cy.contains(msg).should('have.text', msg)
    }

}

export default GenericosPage;