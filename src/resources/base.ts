type QueryBody = {
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
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${this.apiKey}`,
            'ixcsoft': 'listar'
        };

        return await fetch(url, {
            headers,
            body: JSON.stringify(query),
            method: HttpMethods.POST
        }).then(response => {
            if (!response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
    }
}