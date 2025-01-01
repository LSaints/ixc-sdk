/**
 * Configurações para autenticação e URL base da API.
 */
type Config = {
    token: string,
    baseUrl: string,
};

/**
 * Estrutura de resposta da API.
 * 
 * @template T - Tipo dos registros retornados.
 */
export declare type ResponseBody<T> = {
    page: string,
    total: number,
    registros: T[],
}

/**
 * Estrutura de consulta para requisições à API.
 */
export declare type QueryBody = {
    qtype: string,
    query: string,
    oper: '>' | '<' | '=' | 'like',
    page: number,
    rp?: number,
    sortname: string,
    sortorder: 'desc' | 'asc',
}

/**
 * Classe base para realizar requisições à API.
 * 
 * Essa classe abstrata prov  uma forma de realizar requisi es HTTP POST para a API do ERP IXC.
 * 
 * @example
 * const clientes = new Clientes({ token: "1234567890", baseUrl: "https://HOST/webservice/" });
 * const response = await clientes.filtrarClientes({ nome: "Fulano" });
 * 
 * @param config - token de autenticação e URL base da API.
 */
export abstract class QueryBase {
    private apiKey: string;
    private baseUrl: string;
    
    constructor(config: Config) {
        this.apiKey = config.token;
        this.baseUrl = config.baseUrl;
    }

    /**
     * Realiza uma requisição o POST para a API com base em um objeto de consulta.
     * 
     * @param endpoint - O endpoint da API a ser consultado.
     * @param query - O objeto de consulta com os par metros para a requisição.
     * @returns Uma promessa que resolve para a resposta da API.
     */
    protected async request<T>(endpoint: string, query: QueryBody): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const token = `Basic ${btoa(this.apiKey).toString()}`
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token,
            'ixcsoft': 'listar'
        };

        return await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(query),
        }).then(response => response.json());
    }
}

