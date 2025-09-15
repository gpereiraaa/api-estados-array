/**************************************************************************************************************************************
 * Objetivo: API responsavel em criar endPoints referente estados e cidades 
 * Data: 15/09/2025
 * Autor: Gustavo Pereira
 * Versão: 1.0
 * 
 * Observações: Instalar dependencias para criar a API 
 *      express     - npm install express --save       -- Instala as dependencias para criar uma API
 *      cors        - npm install cors --save          -- Instala as dependencias para configurar as permissões de uma API
 *      body-parser - npm install body-parser --save   -- Instala as dependencias para receber os tipos de dados via POST ou PUT
 * 
 *      Quando for baixar em outra maquina usar - npm i - Para baixar as dependencias do node_modules
 **************************************************************************************************************************************/

// Import das dependencias 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta 
//                      em execução local podemos definir uma porta livre
const  PORT = process.PORT || 8080

// Instacia na classe do express
const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

app.get('/v1/estados', function(request, response){

})