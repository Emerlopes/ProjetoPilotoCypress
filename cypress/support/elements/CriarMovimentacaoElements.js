class CriarMovimentacaoElements {
    // Elemento Tipo de Movimentação
    selectTipoMovimentacao = () => { return '#tipo' };

    // Elemento Data da Movimentação
    inputDataMovimentacao = () => { return '#data_transacao' };

    // Elemento Data do Pagamento
    inputDataPagamento = () => { return '#data_pagamento' };

    // Elemento Descrição
    inputDescricao = () => { return '#descricao' };

    // Elemento Interessado
    inputInteressado = () => { return '#interessado' };

    // Elemento Valor
    inputValor = () => { return '#valor' };

    // Elemento Conta
    selectConta = () => { return '#conta' };

    // Elemento Situação pago
    radionSituacaoPago = () => { return '#status_pago' };

    // Elemento Situação Pendente
    radionSituacaoPendente = () => { return '#status_pendente' };

    // Elemento botão Salvar
    //radionSituacao = () => { return '.btn' };
}

export default CriarMovimentacaoElements;