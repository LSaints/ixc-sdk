import { QueryBase, QueryBody } from "../base";
import { Cliente, ClienteAttrs, ClienteResponse } from "./types";

const resourceName = "v1/cliente";

/**
 * Classe para gerenciar clientes
 */
export class Clientes extends QueryBase {
    static buscarClientesPorCpfCnpj(arg0: string) {
        throw new Error('Method not implemented.');
    }

    /**
     * Filtra clientes com base nos atributos fornecidos.
     *
     * @param attr - Um objeto onde as chaves são atributos de `Cliente` e os valores são os valores correspondentes para filtragem.
     * @param oper - A operação para comparar o atributo com o valor. Pode ser '>', '<', '=', ou 'like'. O valor padrão é '='.
     * @param page - O número da página para paginação. O valor padrão é 1.
     * @param sortAttr - O atributo de `Cliente` pelo qual os resultados serão ordenados. O valor padrão é 'cpf_cnpj'.
     * @param sortorder - A ordem de ordenação, pode ser 'desc' (decrescente) ou 'asc' (crescente). O valor padrão é 'desc'.
     * @returns Uma promessa que resolve para um array de objetos `Cliente` que correspondem aos critérios de filtragem especificados.
     *
     * @example
     * const clientes = await clientes.filtrarClientes({
     *     cpf_cnpj: '12345678901'
     * }, 'like', 1, 'nome', 'asc');
     * // clientes = [{ id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }, ...]
     */

    async filtrarClientes(
        attr: { [K in ClienteAttrs]: string | number | boolean },
        oper: '>' | '<' | '=' | 'like' = '=',  
        page: number = 1,  
        sortAttr: ClienteAttrs = 'cnpj_cpf',  
        sortorder: 'desc' | 'asc' = 'desc'
    ): Promise<Cliente[]> {
    
        const key = Object.keys(attr)[0] as ClienteAttrs;
        const value = attr[key];
    
        const response = await this.request<{ registros: Cliente[] }>(resourceName, {
            qtype: `cliente.${key}`,
            query: value as string,
            oper: oper,
            page: page,
            sortname: `cliente.${sortAttr}`,
            sortorder: sortorder,
        });
    
        // Retornar apenas os registros
        return response.registros;
    }
    

    /**
     * Busca clientes com base em um CPF/CNPJ.
     *
     * @param cpfCnpj - O CPF/CNPJ para busca.
     * @returns Uma promessa que resolve para um array de objetos `Cliente` que correspondem ao CPF/CNPJ especificado.
     *
     * @example
     * const clientes = await clientes.buscarClientesPorCpfCnpj('12345678901');
     * // clientes = { id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }
     */
    async buscarClientesPorCpfCnpj(cpfCnpj: string): Promise<Cliente | null> {
        const query: QueryBody = {
            qtype: 'cliente.cnpj_cpf',
            query: cpfCnpj,
            oper: '=',
            page: 1,
            sortname: 'cliente.cnpj_cpf',
            sortorder: 'asc'
        }

        const response = await this.request<ClienteResponse>(resourceName, query);
        return response.registros[0]
    }

    /**
     * Busca um cliente pelo seu id.
     *
     * @param id - O id do cliente a ser buscado.
     * @returns Uma promessa que resolve para um objeto `Cliente` correspondente ao id especificado.
     *
     * @example
     * const cliente = await clientes.buscarClientesPorId(1);
     * // cliente = { id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }
     */
    async buscarClientesPorId(id: number): Promise<Cliente> {
        const query: QueryBody = {
            qtype: 'cliente.id',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'cliente.id',
            sortorder: 'asc'
        }

        const cliente = await this.request<ClienteResponse>(resourceName, query);
        return cliente.registros[0]
    }
}
