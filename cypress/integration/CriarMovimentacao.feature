Feature: Criar movimentacao

    Background: Acessar o site seu barriga
        Given acesso o site
        And login realizado

    @CriarMovimento
    Scenario Outline: Verificar criação de movimento
        Given clico em "Criar Movimentação"
        And informo a massa de teste no formato <json>
        When informo os dados para criar uma movimentacao
        And clico em "Salvar"
        Then devo visualizar a mensagem <msg>

        Examples:
            | msg                                   | json                              |
            | Movimentação adicionada com sucesso!  | criarMovimentacaoContas.json      |
            | Movimentação adicionada com sucesso!  | criarMovimentacaoContas.json      |
            | Movimentação adicionada com sucesso!  | criarMovimentacaoContas.json      |
            | Movimentação adicionada com sucesso!  | criarMovimentacaoContas1.json     |
            | Movimentação adicionada sem sucesso!  | criarMovimentacaoContas1.json     |
