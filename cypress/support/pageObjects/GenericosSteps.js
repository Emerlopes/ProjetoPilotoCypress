/// <reference types="Cypress" />
const url = Cypress.config("baseUrl");

class GerericosSteps {
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

    //#####################################
    //             VALIDAÇÕES
    //#####################################

    validarTextoCampo(Esperado, elemento) {
        cy.get(elemento).should('have.value', Esperado)
    }

    validarTextoTela(Esperado, elemento) {
        cy.get(elemento).should('have.text', Esperado)
    }

}

export default GerericosSteps;