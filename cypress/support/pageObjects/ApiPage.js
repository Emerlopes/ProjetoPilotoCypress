/// <reference types="Cypress" />

class ApiPage {

    // Set a url
    definirRota() {

    }

    // Faz a requisição
    realizarRequisicao() {
        cy.request({
            method: 'GET',
            url: "http://www.viacep.com.br/ws/01001000/json/",
        }).then(res => console.log(res));
    }
}



export default ApiPage;