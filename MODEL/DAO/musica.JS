/************************************************************************************************ 
 * Objetivo: Criar o CRUD de dados na tabela de música no Banco de dados.
 * Data:     11.02.2025
 * Autor:    Ana Pires 
 * Versão:   1.0
************************************************************************************************/

//Import da bivlioteca do prisma cliente para realizar as ações no BD
const { PrismaClient } = require ('@prisma/client')

//Função para inserir uma nova música
const insertMusica = async function(musica){
    //Instância da classe do prisma Client
    const  prisma = new PrismaClient()

        let sql = `insert into tbl_musica ( nome,
                                            duracao, 
                                            data_lancamento, 
                                            letra, 
                                            link)
                            values (${musica.nome},
                                    ${musica.duracao},
                                    ${musica.data_lancamento},
                                    ${musica.letra},
                                    ${musica.link}
                            )`


 //Tem que colocar o async se não o AWAIT não funciona. / 
 // 
 // Executa o script SQL no banco de dados e guarda o resultado (true or false).
    let result = await prisma.$executeRawnUnsafe(sql)

 if(result)
    return true
else 
return false
}

//Função para atualizar uma música existente
const updateMusica = async function(){

}

//Função para excluir uma música existente
const deleteMusica = async function () {
    
}

//Função para retornar todas as músicas do BD
const selectAllMusica = async function () {
    
}

//Função para buscar uma música pelo ID
const selectByIdMusica = async function(){

}

module.exports ={
    insertMusica,
    updateMusica,
    deleteMusica,
    selectAllMusica,
    selectByIdMusica
}