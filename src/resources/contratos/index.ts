import { QueryBase } from "../base";
import { Contrato, ContratoAttrs } from "./types";

const resourceName = "v1/cliente_contrato";

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

        return await this.request<Contrato[]>(resourceName, {
            qtype: `contrato.${key}`,
            query: value as string,
            oper: oper,
            page: page,
            sortname: `contrato.${sortAttr as string}`,
            sortorder: sortorder
        });
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
    async buscarContratosPorId(id: number): Promise<Contrato[]> {
        const contratos = await this.request<Contrato[]>(resourceName, {
            qtype: 'contrato.id',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'contrato.id',
            sortorder: 'asc'
        });

        if (contratos.length === 0 || !contratos) {
            return [];
        };

        return contratos;
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
        const contratos = await this.request<Contrato[]>(resourceName, {
            qtype: 'contrato.id_cliente',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'contrato.id',
            sortorder: 'asc'
        })

        // Verifica se a resposta   nula ou vazia
        if (contratos.length === 0 || !contratos) {
            return [];
        };

        // Retorna o array de contratos
        return contratos;
    }

    /**
     * Busca contratos com base no id do contrato.
     *
     * @param id - O id do contrato a ser buscado.
     * @returns Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao id do contrato especificado.
     *
     * @example
     * const contratos = await contratos.buscarContratoPorIdContrato(123);
     * // contratos = [{ id: 1, id_contrato: 123, ... }]
     */
    async buscarContratoPorIdContrato(id: number): Promise<Contrato[] | Contrato> {
        const contrato = await this.request<Contrato[]>(resourceName, {
            qtype: 'contrato.id_contrato',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'contrato.id',
            sortorder: 'asc'
        });

        if (contrato.length === 0 || !contrato) {
            return [];
        };

        return contrato[0];
    }
}