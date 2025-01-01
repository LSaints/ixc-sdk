import { Clientes } from "./resources/clientes";
import { Contratos } from "./resources/contratos";

/**
 * Classe principal para interação com a API IXC.
 * 
 * Esta classe fornece acesso a diferentes recursos, como `Clientes` e `Contratos`,
 * configurados através de um token de autenticação e uma URL base.
 */
export class Ixc {
    /** Recurso para gerenciar clientes. */
    clientes: Clientes;

    /** Recurso para gerenciar contratos. */
    contratos: Contratos;

    /**
     * Inicializa a classe `Ixc` com as configurações fornecidas.
     * 
     * @param config Configurações da API.
     * @param config.token Token de autenticação para a API.
     * @param config.baseUrl URL base para acessar a API.
     */
    constructor(config: { token: string; baseUrl: string }) {
        this.clientes = new Clientes(config);
        this.contratos = new Contratos(config);
    }
}
