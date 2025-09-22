/**************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Gustavo Pereira
 * Versão: 1.0
 **************************************************************************************************************************************/

// Import do arquivo estados e cidades 
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = { status: false, statuscode: 500, development: 'Gustavo Pereira' }

// Retorna a lista de estados 
const getAllEstados = function () {
    // Padrão do JSON que será o retorno da função
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', uf: [] }

    dados.listaDeEstados.estados.forEach(function (item) {
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
const getEstadoBySigla = function (sigla) {
    let siglaUF = String(sigla).toUpperCase()
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', uf: '', descricao: '', capital: '', regiao: '' }

    dados.listaDeEstados.estados.forEach(estado => {
        if (estado.sigla.toUpperCase() === siglaUF) {
            message.uf = estado.sigla
            message.descricao = estado.nome
            message.capital = estado.capital
            message.regiao = estado.regiao
        }
    })

    if (message.uf.length > 0)
        return message
    else
        return MESSAGE_ERROR

}

// Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function (sigla) {
    let siglaUF = String(sigla).toUpperCase()
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', uf: '', descricao: '', capital: '' }

    dados.listaDeEstados.estados.forEach(estado => {
        if (estado.sigla.toUpperCase() === siglaUF) {
            message.uf = estado.sigla
            message.descricao = estado.nome
            message.capital = estado.capital
        }
    })

    if (message.uf.length > 0)
        return message
    else
        return MESSAGE_ERROR

}

// Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function (regiao) {
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', regiao: '', estados: [] }
    let regiaoMaiuscula = String(regiao).toUpperCase()

    dados.listaDeEstados.estados.forEach(estado => {
        if (estado.regiao.toUpperCase() === regiaoMaiuscula) {
            message.regiao = estado.regiao
            let estadosRegiao = {
                'uf': estado.nome,
                'descricao': estado.nome
            }
            message.estados.push(estadosRegiao)
        }
    })

    if (message.regiao.length > 0)
        return message
    else
        return MESSAGE_ERROR

}

// Retorna a lista de estados que formam a capital de um país filtrando pelo país
const getEstadoIsCapitalByCountry = function (pais) {
    let paisMaiusculo = String(pais).toUpperCase()
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', capitais: [] }

    if (dados.listaDeEstados.pais.toUpperCase() === paisMaiusculo) {
        dados.listaDeEstados.estados.forEach(item => {
            if (item.capital_pais) {
                let estadosCapital = {
                    'capital_atual': item.capital_pais.capital,
                    'uf': item.sigla,
                    'descricao': item.nome,
                    'capital': item.capital,
                    'regiao': item.regiao,
                    'capital_pais_ano_inicio': item.capital_pais.ano_inicio,
                    'capital_pais_ano_termino': item.capital_pais.ano_fim
                }

                message.capitais.push(estadosCapital)
            }
        }
        )
    }

    if (message.capitais.length > 0) {
        return message
    } else
        return MESSAGE_ERROR
}

// Retorna as cidades existente em um estado, filtrando pela sigla
const getCidadesBySigla = function (sigla) {
    let siglaMaiuscula = String(sigla).toUpperCase()
    let message = { status: true, statuscode: 200, development: 'Gustavo Pereira', uf: '', descricao: '', quantidade_cidades: '', cidades: [] }

    dados.listaDeEstados.estados.forEach(item => {
        if (item.sigla.toUpperCase() === siglaMaiuscula) {
            message.uf = item.sigla
            message.descricao = item.nome

            item.cidades.forEach(cidade => {
                message.cidades.push(cidade.nome)
            })
        }
    })
    message.quantidade_cidades = message.cidades.length

    if (message.cidades.length > 0) {
        return message
    } else
        return MESSAGE_ERROR
}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getEstadoIsCapitalByCountry,
    getCidadesBySigla
}