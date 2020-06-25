Feature: Novo usuario

    Background: Acessar o site seu barriga
        Given acesso o site

    @CadastrarUsuario
    Scenario Outline: Verificar cadastro de novo usuario
        Given acesso a Novo usuario
        When informo os dados para cadastro <nome>, <email> e <senha>
        And clico em "Cadastrar"
        Then devo visualizar a mensagem <msg>

        Examples:
            | nome    | email              | senha | msg                            |
            | Geraldo | aprender10@tst.com | 123   | Endereço de email já utilizado |