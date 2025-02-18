/*****************************************************************************************
 * Objetivo: Controller responsável pela integração entre o APP e a Model (Crud de dados)
 *  Validações, tratamento de dados, etc...
 * Data:     18.02.2025
 * Autor:    Ana Pires 
 * Versão:   1.0
*****************************************************************************************/

//função para inserir uma nova música
const inserirMusica = async function () {
    
    if(   musica.nome            == ''    ||  musica.nome            == null || musica.nome            == undefined || musica.nome.lenght            > 100        ||
          musica.duracao         == ''    ||  musica.duracao         == null || musica.duracao         == undefined || musica.duracao.lenght         > 5          ||
          musica.data_lancamento == ''    ||  musica.data_lancamento == null || musica.data_lancamento == undefined || musica.data_lancamento.lenght > 10         ||
                                                                                musica.letra           == undefined ||
                                                                                musica.link            == undefined || musica.link.lenght            > 200 

    )
    {
        return {}
    }

}

//função para atualizar uma  música
const atualizarMusica = async function () {
    
}

//função para excluir uma  música
const excluirMusica = async function () {
    
}

//função para retornar uma lista de músicas
const listarMusica = async function () {
    
}

//função para retornar uma música pelo ID
const bucarMusica = async function () {
    
}