Funcionalidade: validar produtos Nextcode

    @validar_comprovante_de_residencia
    Cenário: validar via comprovante de residência
        Dado que acesso o site da Nextcode
        E insiro um token válido 
        E clico no botão enviar
        E seleicono o produto Comprovante de residência
        E anexo um comprovante de residência válido
        E insiro um CPF válido
        Quando clico no botão enviar
        Entao as informações do comprovante são validadas com sucesso