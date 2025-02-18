/*****************************************************************************
 * Objetivo: Arquivo responsável pela padronização de mensagens e status code
 * Data:     18.02.2025
 * Autor:    Ana Pires 
 * Versão:   1.0
 ****************************************************************************/

/*****************************STATUS CODE ERROS ****************************/
const ERROR_REQUIRED_FIELDS = {status: false, status_code: 400, message: "Existem campos de preenchimento obrigatórios ou quantidade de caracteres que não atendidos"}
const ERROR_INTERNAL_SERVER = {status: false, status_code:500,  message: "Devido a um erro interno no servidor, não foi possível processar a reqisição!!! "}
/*****************************STATUS CODE SUCESSO ****************************/
const SUCESS_CREATED_ITEM   = {status: true,  status_code: 201, message: "Item criado com sucesso!!!"}
module.exports = {
                  ERROR_REQUIRED_FIELDS,
                  SUCESS_CREATED_ITEM,
                  ERROR_INTERNAL_SERVER
                }