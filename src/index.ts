import { Clientes } from "./resources/clientes";
import { Contratos } from "./resources/contratos";

export class Ixc {
    clientes: Clientes;
    contratos: Contratos;

    constructor(config: { token: string, baseUrl: string }) {
        this.clientes = new Clientes(config);
        this.contratos = new Contratos(config);
    }
}