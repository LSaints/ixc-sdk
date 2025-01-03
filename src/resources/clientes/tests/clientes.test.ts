import { QueryBase } from "../../base";
import { Clientes } from "..";
import { ClienteAttrs } from "../types";

jest.mock('../../base');

const instance = new Clientes({
    token: 'fake-token',
    baseUrl: 'https://fake-url.com',
});

const mockRequest = jest.spyOn(QueryBase.prototype, 'request').mockResolvedValue({
    registros: [{ id: 1, nome: 'Fulano', cpf_cnpj: '123.456.789-01' }],
});

describe('buscarClientePorCpfCnpj', () => {
    it('Deve gerar a query corretamente', async () => {
      const cpfCnpj = '123.456.789-01';
      await instance.buscarClientesPorCpfCnpj(cpfCnpj);
    
        expect(mockRequest).toHaveBeenCalledWith('v1/cliente', {
            qtype: 'cliente.cnpj_cpf',
            query: cpfCnpj,
            oper: '=',
            page: 1,
            sortname: 'cliente.cnpj_cpf',
            sortorder: 'asc',
        });      
    });

    it('Deve retornar o primeiro registro da resposta', async () => {
        const mockResponse = { registros: [{ id: 1, nome: 'Fulano', cpf_cnpj: '12345678901' }] };
        mockRequest.mockResolvedValueOnce(mockResponse);
        
        const result = await instance.buscarClientesPorCpfCnpj('123.456.789-01');

        expect(result).toEqual(mockResponse.registros[0]);
    });

    it('Deve retornar undefined se nenhum registro for encontrado', async () => {
        mockRequest.mockResolvedValueOnce({ registros: [] });
        const result = await instance.buscarClientesPorCpfCnpj('123.456.789-01');

        expect(result).toBeUndefined();
    });

    it('Deve retornar um erro se a requisição falhar', async () => {
        mockRequest.mockRejectedValueOnce(new Error('Falha ao realizar a requisição'));
        await expect(instance.buscarClientesPorCpfCnpj('12345678901')).rejects.toThrow('Falha ao realizar a requisição');
    });
});

describe('buscarClientePorId', () => {
    it('Deve gerar a query corretamente', async () => {
        const id = 1;
        await instance.buscarClientesPorId(id);
    
        expect(mockRequest).toHaveBeenCalledWith('v1/cliente', {
            qtype: 'cliente.id',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'cliente.id',
            sortorder: 'asc',
        });      
    });

    it('Deve retornar o primeiro registro da resposta', async () => {
        const mockResponse = { registros: [{ id: 1, nome: 'Fulano', cpf_cnpj: '123.456.789-01' }] };
        mockRequest.mockResolvedValueOnce(mockResponse);
        
        const result = await instance.buscarClientesPorId(1);
        expect(result).toEqual(mockResponse.registros[0]);
    });

    it('Deve retornar undefined se nenhum registro for encontrado', async () => {
        mockRequest.mockResolvedValueOnce({ registros: [] });
        const result = await instance.buscarClientesPorId(1);
        expect(result).toBeUndefined();
    });

    it('Deve retornar um erro se a requisição falhar', async () => {
        mockRequest.mockRejectedValueOnce(new Error('Falha ao realizar a requisição'));
        await expect(instance.buscarClientesPorId(1)).rejects.toThrow('Falha ao realizar a requisição');
    });
});


describe('filtrarClientes', () => {
    it('Deve retornar um array de clientes', async () => {
        const mockResponse = {
            registros: [{ id: 1, nome: 'Fulano', cpf_cnpj: '123.456.789-01' }],
        };
    
        mockRequest.mockResolvedValueOnce(mockResponse);
    
        const result = await instance.filtrarClientes(
            { cnpj_cpf: '123.456.789-01' } as { [K in ClienteAttrs]: string | number | boolean },
            '=',
            1,
            'cnpj_cpf',
            'asc'
        );

        expect(result).toEqual(mockResponse.registros);
    });
});
