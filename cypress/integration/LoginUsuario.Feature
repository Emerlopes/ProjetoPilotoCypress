Feature: Login usuario

    Background: Acessar o site seu barriga
        Given acesso o site

    @LoginUsuario
    Scenario Outline: Verificar acesso de usuario
        When informo os dados para login <email> e <senha>
        And clico no botao "entrar"
        Then devo visualizar a mensagem <msg>

        Examples:
            | nome    | email              | senha | msg                            |
            | Geraldo | aprender10@tst.com | 123   | Endereço de email já utilizado |