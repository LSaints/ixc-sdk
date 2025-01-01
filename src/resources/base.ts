type Config = {
    token: string,
    baseUrl: string,
};

export declare type ResponseBody<T> = {
    page: string,
    total: number,
    registros: T[],
}

export declare type QueryBody = {
    qtype: string,
    query: string,
    oper: '>' | '<' | '=' | 'like',
    page: number,
    rp?: number,
    sortname: string,
    sortorder: 'desc' | 'asc',
}

export abstract class QueryBase {
    private apiKey: string;
    private baseUrl: string;
    
    constructor(config: Config) {
        this.apiKey = config.token;
        this.baseUrl = config.baseUrl;
    }

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