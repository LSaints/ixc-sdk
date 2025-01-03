import { QueryBase } from "../../base";
import { Contratos } from "..";
import { ContratoAttrs } from "../types";

jest.mock('../../base');

const instance = new Contratos({
    token: 'fake-token',
    baseUrl: 'https://fake-url.com',
});

const mockRequest = jest
  .spyOn(QueryBase.prototype, 'request')
  .mockResolvedValue({ registros: [{ id: 1, id_cliente: 1 }] });


describe('buscarContratosPorIdCliente', () => {
    it('Deve gerar a query corretamente', async () => {
      const id = 1;
      await instance.buscarContratosPorIdCliente(id);
    
      expect(mockRequest).toHaveBeenCalledWith('v1/cliente_contrato', {
          qtype: 'cliente_contrato.id_cliente',
          query: id.toString(),
          oper: '=',
          page: 1,
          sortname: 'cliente_contrato.id',
          sortorder: 'asc',
      });      
    });

    it('Deve retornar um array vazio se nenhum contrato for encontrado', async () => {
        const mockResponse = { registros: [] };
        mockRequest.mockResolvedValueOnce(mockResponse);
        
        const result = await instance.buscarContratosPorIdCliente(1);
        expect(result).toEqual([]);
    });

    it('Deve retornar um array de contratos', async () => {
        const mockResponse = { registros: [{ id: 1, id_cliente: 1 }] };
        mockRequest.mockResolvedValueOnce(mockResponse);
        
        const result = await instance.buscarContratosPorIdCliente(1);
        expect(result).toEqual(mockResponse.registros);
    });

    it('Deve retornar um erro se a requisição falhar', async () => {
        mockRequest.mockRejectedValueOnce(new Error('Falha ao realizar a requisição'));
        await expect(instance.buscarContratosPorIdCliente(1)).rejects.toThrow('Falha ao realizar a requisição');
    });
})

describe('buscarContratoPorId', () => {
    it('Deve gerar a query corretamente', async () => {
        const id = 1;
        await instance.buscarContratosPorId(id);
    
        expect(mockRequest).toHaveBeenCalledWith('v1/cliente_contrato', {
            qtype: 'cliente_contrato.id',
            query: id.toString(),
            oper: '=',
            page: 1,
            sortname: 'cliente_contrato.id',
            sortorder: 'asc',
        });      
    });

    it('Deve retornar o primeiro registro da resposta', async () => {
        const mockResponse = { registros: [{ id: 1, id_cliente: 1 }] };
        mockRequest.mockResolvedValueOnce(mockResponse);
        
        const result = await instance.buscarContratosPorId(1);
        expect(result).toEqual(mockResponse.registros[0]);
    });

    it('Deve retornar undefined se nenhum registro for encontrado', async () => {
        mockRequest.mockResolvedValueOnce({ registros: [] });
        const result = await instance.buscarContratosPorId(1);
        expect(result).toBeUndefined();
    });

    it('Deve retornar um erro se a requisição falhar', async () => {
        mockRequest.mockRejectedValueOnce(new Error('Falha ao realizar a requisição'));
        await expect(instance.buscarContratosPorId(1)).rejects.toThrow('Falha ao realizar a requisição');
    });
});

describe('filtrarContratos', () => {
    it('Deve retornar um array de contratos', async () => {
        const mockResponse = {
            registros: [{ id: 1, id_cliente: 1 }],
        };
    
        mockRequest.mockResolvedValueOnce(mockResponse);
    
        const result = await instance.filtrarContratos(
            { id_cliente: 1 } as { [K in ContratoAttrs]: string | number | boolean },
            '=',
            1,
            'id_cliente',
            'asc'
        );
    
        expect(result).toEqual(mockResponse.registros);
    });
});
