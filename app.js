/************************************************************************************************ 
 * Objetivo: Criar uma API paa realizar uma integração com o banco de dados
 * Data:     11.02.2025
 * Autor:    Ana Pires 
 * Versão:   1.0
 * Observações:
 *** Para criar a API precisa instalar
 *     express        (npm install express --save)
 *     cors           (npm install cors --save )
 *     body-parser    ( npm install body-parser  --save)
 *** Para criar a conexão com banco de dados precisa instalar:
 *     prisma         (npm install prisma --save)
 *     @prisma/client (npm install @prisma/client --save)
************************************************************************************************/

const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');

//Cria um objeto para o body do tipo JSON
const bodyParserjson = bodyParser.json()

const app = express()

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-MethodsOPTIONS', 'GET, POST, PUT, DELETE, ');

    app.use(cors())

    next()
})

app.post('/v1/controle-musicas/musica', cors(), bodyParserjson, asyn function(request,response) )