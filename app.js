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



const app = express()

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-MethodsOPTIONS', 'GET, POST, PUT, DELETE, ');

    app.use(cors())

    next()
})

app.post('/v1/controle-musicas/musica', cors(), async (req, res) => {
    const musica = req.body;
    const result = await musicaController.inserirMusica(musica);
    res.status(result.status_code).json(result);
});

// Rota para atualizar uma música existente
app.put('/v1/musicas/:id', async (req, res) => {
    const id = req.params.id;
    const musica = req.body;
    const result = await musicaController.atualizarMusica(id, musica);
    res.status(result.status_code).json(result);
});

// Rota para excluir uma música
app.delete('/v1/musicas/:id', async (req, res) => {
    const id = req.params.id;
    const result = await musicaController.excluirMusica(id);
    res.status(result.status_code).json(result);
});

// Rota para listar todas as músicas
app.get('/v1/musicas', async (req, res) => {
    const result = await musicaController.listarMusica();
    res.json(result);
});

// Rota para buscar uma música pelo ID
app.get('/v1/musicas/:id', async (req, res) => {
    const id = req.params.id;
    const result = await musicaController.buscarMusica(id);
    res.status(result.status_code).json(result);
});
