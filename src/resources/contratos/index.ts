import { QueryBase, QueryBody } from "../base";
import { Contrato, ContratoAttrs, ContratoResponse } from "./types";

const resourceName = "v1/cliente_contrato";


/**
 * Classe para gerenciar contratos.
 */
export class Contratos extends QueryBase {

    /**
     * Filtra contratos com base em um atributo.
     *
     * @param attr - O atributo e valor para busca.
     * @param oper - O operador para a busca. Pode ser: `>`, `<`, `=`, `like`.
     * @param page - A p gina dos resultados a ser retornada. Padr o: `1`.
     * @param sortAttr - O atributo para ordena o dos resultados. Padr o: `id_cliente`.
     * @param sortorder - A ordena o dos resultados. Pode ser: `desc`, `asc`. Padr o: `desc`.
     * @returns Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao valor especificado.
     *
     * @example
     * const contratos = await contratos.filtrarContratos({
     *     id_cliente: 1
     * }, '>', 1, 'id_contrato', 'asc');
     * // contratos = [{ id: 1, id_cliente: 1, ... }]
     */
    async filtrarContratos(
        attr: { 
            [K in ContratoAttrs]: string | number | boolean 
        },
        oper: '>' | '<' | '=' | 'like' = '=',  
        page: number = 1,  
        sortAttr: ContratoAttrs = 'id_cliente',  
        sortorder: 'desc' | 'asc' = 'desc'
    ): Promise<Contrato[]> {
    
        const key = Object.keys(attr)[0] as ContratoAttrs;
        const value = attr[key];
    
        const response = await this.request<{ registros: Contrato[] }>(resourceName, {
            qtype: `contrato.${key}`,
            query: value as string,
            oper: oper,
            page: page,
            sortname: `contrato.${sortAttr as string}`,
            sortorder: sortorder
        });
    
        return response.registros;
    }
    
    

    /**
     * Busca um contrato pelo seu id.
     *
     * @param id - O id do contrato a ser buscado.
     * @returns Uma promessa que resolve para um objeto `Contrato` correspondente ao id especificado.
     *
     * @example
     * const contratos = await contratos.buscarContratosPorId(123);
     * // contratos = [{ id: 123, id_cliente: 1, ... }]
     */
    async buscarContratosPorId(id: number): Promise<Contrato> {
        const query: QueryBody = {
            qtype: 'cliente_contrato.id',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'cliente_contrato.id',
            sortorder: 'asc',
        };
    
        const response = await this.request<ContratoResponse>('v1/cliente_contrato', query);
        return response.registros[0];
    }
    

    /**
     * Busca contratos por id de cliente.
     *
     * @param id - O id do cliente a ser buscado.
     * @returns Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao id especificado.
     *
     * @example
     * const contratos = await contratos.buscarContratosPorIdCliente(123);
     * // contratos = [{ id: 1, id_cliente: 123, ... }, ...]
     */
    async buscarContratosPorIdCliente(id: number): Promise<Contrato[]> {
        const query: QueryBody = {
            qtype: 'cliente_contrato.id_cliente',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'cliente_contrato.id',
            sortorder: 'asc'
        }

        const contratos = await this.request<ContratoResponse>(resourceName, query);

        if (contratos.registros.length === 0 || !contratos) {
            return [];
        };

        return contratos.registros;
    }
}