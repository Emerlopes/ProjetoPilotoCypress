Feature: Contas

    Background: Acessar o site seu barriga
        Given acesso o site

    @CriarContas
    Scenario Outline: Verificar criação de contas
        Given login realizado com os <dados>
        And clico em "Contas"
        And clico em "Adicionar"
        When informo o <nomeConta> para criar a conta
        And clico em "Salvar"
        Then devo visualizar a mensagem <msg>

        Examples:
            | dados                  | nomeConta  | msg                                |
            #| aprender10@tst.com;123 | Segmento 1 | Conta adicionada com sucesso!      |
            | aprender10@tst.com;123 | Segmento 1 | Já existe uma conta com esse nome! |


    @ListarContas
    Scenario Outline: Verificar listagem de contas
        Given login realizado com os <dados>
            And conta criada com o nome <nomeConta>
            And clico em "Contas"
        When clico em "Listar"
        Then devo visualizar a conta criada <nomeConta>

        Examples:
            | dados                  | nomeConta    |
            | aprender10@tst.com;123 | Conta número |