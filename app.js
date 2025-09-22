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

// Import do arquivo de funções 
const dados = require('./modulo/funcoes.js')

// Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta 
//                      em execução local podemos definir uma porta livre
const  PORT = process.PORT || 8080

// Instacia na classe do express
const app = express()

// Configurações do CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') // IP de origem 
    response.header('Access-Control-Allow-Methods', 'GET') // Metodos (Verbos) do protocolo HTTP

    app.use(cors())
    next() // Proximo 
})

// Request  --> Recebe os dados da API
// Response --> Envia os dados na API

// EndPoints

// Retorna a lista de estados 
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()

    response.status(estados.statuscode)
    response.json(estados)
})

// Retorna dados do estado filtrando pela sigla
app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getEstadoBySigla(sigla)

    response.status(estado.statuscode)
    response.json(estado)
})

// Retorna a capital do estado filtrando pela sigla
app.get('/v1/estado/capital/:uf', function(request, response){
    let sigla = request.params.uf
    let capital = dados.getCapitalBySigla(sigla)

    response.status(capital.statuscode)
    response.json(capital)
})

// Retorna a lista de estados filtrando pela região
app.get('/v1/estados/regiao/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estados = dados.getEstadosByRegiao(regiao)

    response.status(estados.statuscode)
    response.json(estados)
})

// Retorna a lista de estados que formam a capital de um país filtrando pelo país
app.get('/v1/capitais/:pais', function(request, response){
    let pais = request.params.pais
    let capitais = dados.getEstadoIsCapitalByCountry(pais)

    response.status(capitais.statuscode)
    response.json(capitais)
})

// Retorna as cidades existente em um estado, filtrando pela sigla
app.get('/v1/estado/cidade/:uf', function(request, response) {
    let sigla = request.params.uf
    let cidades = dados.getCidadesBySigla(sigla)

    response.status(cidades.statuscode)
    response.json(cidades)
})
/*
Exemplo de query e params:
Query -> para passar filtros
e Params para passar ID
app.get('/v1/regiao/:id', function(request, response){
    let regiaoEstados = request.query.regiao
    let sigla = request.query.uf
    let id = request.params.id

    console.log(id)
    console.log(regiaoEstados)
    console.log(sigla)
})*/

// Start da API
app.listen(PORT, function(){
    console.log('API aguardando requisições ...')
})