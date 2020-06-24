Feature: Novo usuario

    Background: Acessar o site seu barriga
        Given acesso o site

    @testCadastrarUsuario
    @teste
    Scenario Outline: Verificar cadastro de novo usuario
        Given acesso a Novo usuario
        When informo os dados para cadastro <nome>, <email> e <senha>
        And clico no botao cadastrar
        Then devo visualizar a mensagem <msg>

        Examples:
            | nome      | email             | senha | msg                           |
            | Geraldo   | aprender10@tst.com | 123   | Endereço de email já utilizado  |
            | Geraldo   | aprender12@tst.com | 123   | Usuário inserido com sucesso  |