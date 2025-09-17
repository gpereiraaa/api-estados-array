/**************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Gustavo Pereira
 * Versão: 1.0
 **************************************************************************************************************************************/

// Import do arquivo estados e cidades 
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Gustavo Pereira'}

// Retorna a lista de estados 
const getAllEstados = function() {
    // Padrão do JSON que será o retorno da função
    let message = {status: true, statuscode: 200, development: 'Gustavo Pereira', uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })

    // Adiciona um novo elemento no JSON
    message.quantidade = message.uf.length

    // Apaga um elemento existente no JSON
    //delete message.status

    if (message.uf.length > 0) 
        return message // Resultado verdadeiro da API 200
     else
        return MESSAGE_ERROR // Resultado Falso da API 500
    
}

// Retorna dados do estado filtrando pela sigla
const getEstadoBySigla = function(uf){
    let message = {status: true, statuscode: 200, development: 'Gustavo Pereira', uf: [], descricao: [],capital: [], regiao: [] }

    dados.listaDeEstados.estados.forEach(item => {
        if (item.sigla === uf) {
            message.uf.push(item.sigla)
            message.descricao.push(item.nome)
            message.capital.push(item.capital)
            message.regiao.push(item.regiao)
        }
    })

    if(uf === message.uf)
        return message
    else
        return MESSAGE_ERROR

}

// Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(uf){
    let message = {status: true, statuscode: 200, development: 'Gustavo Pereira', uf: [], descricao: [],capital: [] }

    dados.listaDeEstados.estados.forEach(item => {
        if (item.sigla === uf) {
            message.uf.push(item.sigla)
            message.descricao.push(item.nome)
            message.capital.push(item.capital)
        }
    })

    if(uf === message.uf)
        return message
    else
        return MESSAGE_ERROR

}

// Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){
    let message = {status: true, statuscode: 200, development: 'Gustavo Pereira', regiao: '', estados: [] }

    dados.listaDeEstados.estados.forEach(item => {
        if (item.regiao === regiao) {
            message.regiao = item.regiao
            message.estados.uf.push(item.sigla)
            message.estados.descricao.push(item.nome)
            //message.estados.uf = item.sigla
            //message.estados.descricao = item.nome
        }
    })
    if(regiao === message.regiao)
        return message
    else
        MESSAGE_ERROR

}

// Retorna a lista de estados que formam a capital de um país filtrando pelo país
const getEstadoIsCapitalByCountry = function(pais){

}

// Retorna as cidades existente em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla) {

}

console.log(getEstadosByRegiao('Sudeste'))

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}