/// <reference types="Cypress" />
const url = Cypress.config("baseUrl");

class GenericosPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url);
    }

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

    //#####################################
    //          AÇÕES DO NAVEGADOR
    //#####################################

    // Recuperar o elemento input texto
    digitarCampoTexto(elemento, texto) {
        cy.get(elemento).should('exist').focus().type(texto).should('have.value', texto);
    }

    // Recuperar o elemento e realiza um click
    clicar(elemento) {
        cy.get(elemento).should('exist').click();
    }

    // Recuperar o elemento por nome e clica
    clicarPorTexto(texto) {
        cy.contains(texto.replace(/"/g, '')).click();
    }

    //#####################################
    //             VALIDAÇÕES
    //#####################################

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