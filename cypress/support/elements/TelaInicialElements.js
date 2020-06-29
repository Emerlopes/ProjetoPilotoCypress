class TelaInicialElements {
    // Elemento menu Home
    menuHome = () => { return '.active > a' };

    // Elemento menu Contas
    menuContas = () => { return '.dropdown-toggle' };

    // Elemento menu Criar Movimentação
    menuMovimentacao = () => { return ':nth-child(3) > a' };

    // Elemento menu Resumo mensal
    menuResumo = () => { return ':nth-child(4) > a' };

    // Elemento menu Sair
    menuSair = () => { return ':nth-child(5) > a' };
}

export default TelaInicialElements;