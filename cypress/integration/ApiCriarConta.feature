Feature: Criar conta via API

    @Api
    Scenario Outline: Verificar criação de de conta na api
        Given testando a rota
        Given requisicao na rota

        Examples:
            | msg                                   | json                              |
            | Movimentação adicionada com sucesso!  | criarMovimentacaoContas.json      |
            #| Movimentação adicionada com sucesso!  | criarMovimentacaoContas1.json     |
