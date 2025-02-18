/*****************************************************************************************
 * Objetivo: Controller responsável pela integração entre o APP e a Model (Crud de dados)
 *  Validações, tratamento de dados, etc...
 * Data:     18.02.2025
 * Autor:    Ana Pires 
 * Versão:   1.0
*****************************************************************************************/

//Import do arquivo de mensagens e status code
const message = require('../../modulo/config.js')
const musicaDAO = require('../../model/DAO/musica.js')

//função para inserir uma nova música
const inserirMusica = async function () {
    
    if(   musica.nome            == ''    ||  musica.nome            == null || musica.nome            == undefined || musica.nome.lenght            > 100        ||
          musica.duracao         == ''    ||  musica.duracao         == null || musica.duracao         == undefined || musica.duracao.lenght         > 5          ||
          musica.data_lancamento == ''    ||  musica.data_lancamento == null || musica.data_lancamento == undefined || musica.data_lancamento.lenght > 10         ||
                                                                                musica.letra           == undefined ||
                                                                                musica.link            == undefined || musica.link.lenght            > 200 

    )
    {
        return message.ERROR_REQUIRED_FIELDS //Status code 400
    }else{
        //encaminhando os dados da musica para o DAO realizar o insert no BD
        let resultMusica = await musicaDAO.insertMusica(musica) 

        if(resultMusica)
            return message.SUCESS_CREATED_ITEM //Status code 201
        else
        return message.ERROR_INTERNAL_SERVER  //Status code 500
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
const buscarMusica = async function () {
    
}

module.exports = {
    inserirMusica,
    atualizarMusica,
    excluirMusica,
    listarMusica,
    buscarMusica
}