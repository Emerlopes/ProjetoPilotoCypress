class NovoUsuarioElements {

        // Clica no link novo usuario
        linkNovoUsuario = () => { return ':nth-child(2) > a' };

        // Campo de texto nome
        inputNome = () => { return '#nome' };

        // Campo de texto email
        inputEmail = () => { return '#email' };

        // Campo de texto senha
        inputSenha = () => { return '#senha' };

        // Botão cadastrar
        btnCadastrar = () => { return '.btn' };

        // Mensagem
        alerta = () => { return '.alert' };

}

export default NovoUsuarioElements;