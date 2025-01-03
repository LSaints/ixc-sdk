# **IXC SDK v0.1.2*

![IXC SDK](https://img.shields.io/badge/IXC--SDK-v1.0.0-blue.svg)  
![License](https://img.shields.io/badge/license-MIT-green.svg)  
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

## **Descrição**
O **IXC SDK** é uma biblioteca desenvolvida para facilitar a integração com a API do ERP IXC.  
Com uma interface simples e intuitiva, ele possibilita acessar e manipular os dados disponíveis nos endpoints REST da API, reduzindo a complexidade no desenvolvimento de integrações.

---

## **Sumário**

- [Instalação](#instalação)
- [Uso](#uso)
  - [Inicialização](#inicialização)
  - [Recursos Disponíveis](#recursos-disponíveis)
- [Módulos](#modulos)

---

## **Instalação**

Adicione o pacote ao seu projeto utilizando **npm**

```bash
npm install ixc-sdk
```

## **Uso**
### **Inicialização**

Antes de começar, configure o SDK com o token de autenticação e a baseUrl da API:
```TS
import { Ixc } from "ixc-sdk";

const ixc = new Ixc({
    token: "SEU_TOKEN_AQUI",
    baseUrl: "https://HOST/webservice/"
});
```

## **Recursos Disponíveis**

### Buscar Clientes por CNPJ/CPF

```TS
    const cliente = await api.clientes.buscarClientesPorCpfCnpj('111.111.111-11')
 ```

### Buscar Contratos por ID do cliente

```TS
    const contratos = await api.contratos.buscarContratosPorIdCliente('123')
 ```

## **Módulos**
- [resources/clientes](docs/resources/clientes/README.md)
- [resources/contratos](docs/resources/contratos/README.md)

