[**IXC SDK v1.0.0**](../../../README.md)

***

[IXC SDK](../../../modules.md) / [resources/clientes](../README.md) / Clientes

# Class: Clientes

Defined in: [resources/clientes/index.ts:9](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/clientes/index.ts#L9)

Classe para gerenciar clientes

## Extends

- `QueryBase`

## Constructors

### new Clientes()

> **new Clientes**(`config`): [`Clientes`](Clientes.md)

Defined in: [resources/base.ts:48](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/base.ts#L48)

#### Parameters

##### config

`Config`

#### Returns

[`Clientes`](Clientes.md)

#### Inherited from

`QueryBase.constructor`

## Methods

### buscarClientesPorCpfCnpj()

> **buscarClientesPorCpfCnpj**(`cpfCnpj`): `Promise`\<`null` \| `Cliente`\>

Defined in: [resources/clientes/index.ts:61](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/clientes/index.ts#L61)

Busca clientes com base em um CPF/CNPJ.

#### Parameters

##### cpfCnpj

`string`

O CPF/CNPJ para busca.

#### Returns

`Promise`\<`null` \| `Cliente`\>

Uma promessa que resolve para um array de objetos `Cliente` que correspondem ao CPF/CNPJ especificado.

#### Example

```ts
const clientes = await clientes.buscarClientesPorCpfCnpj('12345678901');
// clientes = { id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }
```

***

### buscarClientesPorId()

> **buscarClientesPorId**(`id`): `Promise`\<`Cliente`\>

Defined in: [resources/clientes/index.ts:85](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/clientes/index.ts#L85)

Busca um cliente pelo seu id.

#### Parameters

##### id

`number`

O id do cliente a ser buscado.

#### Returns

`Promise`\<`Cliente`\>

Uma promessa que resolve para um objeto `Cliente` correspondente ao id especificado.

#### Example

```ts
const cliente = await clientes.buscarClientesPorId(1);
// cliente = { id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }
```

***

### filtrarClientes()

> **filtrarClientes**(`attr`, `oper`, `page`, `sortAttr`, `sortorder`): `Promise`\<`Cliente`[]\>

Defined in: [resources/clientes/index.ts:28](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/clientes/index.ts#L28)

Filtra clientes com base nos atributos fornecidos.

#### Parameters

##### attr

Um objeto onde as chaves são atributos de `Cliente` e os valores são os valores correspondentes para filtragem.

###### acesso_automatico_central

`string` \| `number` \| `boolean`

###### alerta

`string` \| `number` \| `boolean`

###### alterar_senha_primeiro_acesso

`string` \| `number` \| `boolean`

###### apartamento

`string` \| `number` \| `boolean`

###### ativo

`string` \| `number` \| `boolean`

###### ativo_serasa

`string` \| `number` \| `boolean`

###### atualizar_cadastro_galaxPay

`string` \| `number` \| `boolean`

###### bairro

`string` \| `number` \| `boolean`

###### bairro_cob

`string` \| `number` \| `boolean`

###### bloco

`string` \| `number` \| `boolean`

###### cadastrado_via_viabilidade

`string` \| `number` \| `boolean`

###### cep

`string` \| `number` \| `boolean`

###### cep_cob

`string` \| `number` \| `boolean`

###### cidade

`string` \| `number` \| `boolean`

###### cidade_cob

`string` \| `number` \| `boolean`

###### cidade_naturalidade

`string` \| `number` \| `boolean`

###### cif

`string` \| `number` \| `boolean`

###### cli_desconta_iss_retido_total

`string` \| `number` \| `boolean`

###### cnpj_cpf

`string` \| `number` \| `boolean`

###### cnpj_cpf_titular_conta

`string` \| `number` \| `boolean`

###### cob_envia_email

`string` \| `number` \| `boolean`

###### cob_envia_sms

`string` \| `number` \| `boolean`

###### codigo_operacao

`string` \| `number` \| `boolean`

###### cofins_retem

`string` \| `number` \| `boolean`

###### complemento

`string` \| `number` \| `boolean`

###### complemento_cob

`string` \| `number` \| `boolean`

###### cond_pagamento

`string` \| `number` \| `boolean`

###### contato

`string` \| `number` \| `boolean`

###### contribuinte_icms

`string` \| `number` \| `boolean`

###### convert_cliente_forn

`string` \| `number` \| `boolean`

###### cpf_conjuge

`string` \| `number` \| `boolean`

###### cpf_mae

`string` \| `number` \| `boolean`

###### cpf_pai

`string` \| `number` \| `boolean`

###### cpf_representante_1

`string` \| `number` \| `boolean`

###### cpf_representante_2

`string` \| `number` \| `boolean`

###### crm

`string` \| `number` \| `boolean`

###### crm_data_abortamos

`string` \| `number` \| `boolean`

###### crm_data_apresentando

`string` \| `number` \| `boolean`

###### crm_data_negociando

`string` \| `number` \| `boolean`

###### crm_data_novo

`string` \| `number` \| `boolean`

###### crm_data_perdemos

`string` \| `number` \| `boolean`

###### crm_data_sem_porta_disponivel

`string` \| `number` \| `boolean`

###### crm_data_sem_viabilidade

`string` \| `number` \| `boolean`

###### crm_data_sondagem

`string` \| `number` \| `boolean`

###### crm_data_vencemos

`string` \| `number` \| `boolean`

###### csll_retem

`string` \| `number` \| `boolean`

###### data_cadastro

`string` \| `number` \| `boolean`

###### data_nascimento

`string` \| `number` \| `boolean`

###### data_nascimento_conjuge

`string` \| `number` \| `boolean`

###### deb_agencia

`string` \| `number` \| `boolean`

###### deb_automatico

`string` \| `number` \| `boolean`

###### deb_conta

`string` \| `number` \| `boolean`

###### desconto_irrf_valor_inferior

`string` \| `number` \| `boolean`

###### dica_imposto_retido_cliente

`string` \| `number` \| `boolean`

###### email

`string` \| `number` \| `boolean`

###### emp_cargo

`string` \| `number` \| `boolean`

###### emp_cep

`string` \| `number` \| `boolean`

###### emp_cidade

`string` \| `number` \| `boolean`

###### emp_cnpj

`string` \| `number` \| `boolean`

###### emp_data_admissao

`string` \| `number` \| `boolean`

###### emp_empresa

`string` \| `number` \| `boolean`

###### emp_endereco

`string` \| `number` \| `boolean`

###### emp_fone

`string` \| `number` \| `boolean`

###### emp_remuneracao

`string` \| `number` \| `boolean`

###### endereco

`string` \| `number` \| `boolean`

###### endereco_cob

`string` \| `number` \| `boolean`

###### estado_civil

`string` \| `number` \| `boolean`

###### estado_nascimento

`string` \| `number` \| `boolean`

###### facebook

`string` \| `number` \| `boolean`

###### fantasia

`string` \| `number` \| `boolean`

###### filial_id

`string` \| `number` \| `boolean`

###### filtra_filial

`string` \| `number` \| `boolean`

###### fone

`string` \| `number` \| `boolean`

###### fone_conjuge

`string` \| `number` \| `boolean`

###### foto_cartao

`string` \| `number` \| `boolean`

###### grau_satisfacao

`string` \| `number` \| `boolean`

###### hotsite_acesso

`string` \| `number` \| `boolean`

###### hotsite_email

`string` \| `number` \| `boolean`

###### id

`string` \| `number` \| `boolean`

###### id_campanha

`string` \| `number` \| `boolean`

###### id_candato_tipo

`string` \| `number` \| `boolean`

###### id_concorrente

`string` \| `number` \| `boolean`

###### id_condominio

`string` \| `number` \| `boolean`

###### id_conta

`string` \| `number` \| `boolean`

###### id_operadora_celular

`string` \| `number` \| `boolean`

###### id_perfil

`string` \| `number` \| `boolean`

###### id_tipo_cliente

`string` \| `number` \| `boolean`

###### id_vendedor

`string` \| `number` \| `boolean`

###### identidade_mae

`string` \| `number` \| `boolean`

###### identidade_pai

`string` \| `number` \| `boolean`

###### identidade_representante_1

`string` \| `number` \| `boolean`

###### identidade_representante_2

`string` \| `number` \| `boolean`

###### idx

`string` \| `number` \| `boolean`

###### ie_identidade

`string` \| `number` \| `boolean`

###### im

`string` \| `number` \| `boolean`

###### indicado_por

`string` \| `number` \| `boolean`

###### inscricao_municipal

`string` \| `number` \| `boolean`

###### irrf_retem

`string` \| `number` \| `boolean`

###### iss_classificacao_padrao

`string` \| `number` \| `boolean`

###### isuf

`string` \| `number` \| `boolean`

###### latitude

`string` \| `number` \| `boolean`

###### longitude

`string` \| `number` \| `boolean`

###### moradia

`string` \| `number` \| `boolean`

###### nacionalidade

`string` \| `number` \| `boolean`

###### nascimento_mae

`string` \| `number` \| `boolean`

###### nascimento_pai

`string` \| `number` \| `boolean`

###### nome_conjuge

`string` \| `number` \| `boolean`

###### nome_contador

`string` \| `number` \| `boolean`

###### nome_mae

`string` \| `number` \| `boolean`

###### nome_pai

`string` \| `number` \| `boolean`

###### nome_representante_1

`string` \| `number` \| `boolean`

###### nome_representante_2

`string` \| `number` \| `boolean`

###### num_dias_cob

`string` \| `number` \| `boolean`

###### numero

`string` \| `number` \| `boolean`

###### numero_cob

`string` \| `number` \| `boolean`

###### obs

`string` \| `number` \| `boolean`

###### orgao_publico

`string` \| `number` \| `boolean`

###### pais

`string` \| `number` \| `boolean`

###### participa_cobranca

`string` \| `number` \| `boolean`

###### participa_pre_cobranca

`string` \| `number` \| `boolean`

###### pipe_id_organizacao

`string` \| `number` \| `boolean`

###### pis_retem

`string` \| `number` \| `boolean`

###### profissao

`string` \| `number` \| `boolean`

###### quantidade_dependentes

`string` \| `number` \| `boolean`

###### ramal

`string` \| `number` \| `boolean`

###### razao

`string` \| `number` \| `boolean`

###### ref_com_empresa1

`string` \| `number` \| `boolean`

###### ref_com_empresa2

`string` \| `number` \| `boolean`

###### ref_com_fone1

`string` \| `number` \| `boolean`

###### ref_com_fone2

`string` \| `number` \| `boolean`

###### ref_pes_fone1

`string` \| `number` \| `boolean`

###### ref_pes_fone2

`string` \| `number` \| `boolean`

###### ref_pes_nome1

`string` \| `number` \| `boolean`

###### ref_pes_nome2

`string` \| `number` \| `boolean`

###### referencia

`string` \| `number` \| `boolean`

###### referencia_cob

`string` \| `number` \| `boolean`

###### regime_fiscal_col

`string` \| `number` \| `boolean`

###### responsavel

`string` \| `number` \| `boolean`

###### rg_conjuge

`string` \| `number` \| `boolean`

###### rg_orgao_emissor

`string` \| `number` \| `boolean`

###### senha

`string` \| `number` \| `boolean`

###### senha_hotsite_md5

`string` \| `number` \| `boolean`

###### Sexo

`string` \| `number` \| `boolean`

###### skype

`string` \| `number` \| `boolean`

###### status_prospeccao

`string` \| `number` \| `boolean`

###### tabela_preco

`string` \| `number` \| `boolean`

###### telefone_celular

`string` \| `number` \| `boolean`

###### telefone_comercial

`string` \| `number` \| `boolean`

###### telefone_contador

`string` \| `number` \| `boolean`

###### tipo_assinante

`string` \| `number` \| `boolean`

###### tipo_cliente_scm

`string` \| `number` \| `boolean`

###### tipo_documento_identificacao

`string` \| `number` \| `boolean`

###### tipo_localidade

`string` \| `number` \| `boolean`

###### tipo_pessoa

`string` \| `number` \| `boolean`

###### tipo_pessoa_titular_conta

`string` \| `number` \| `boolean`

###### uf

`string` \| `number` \| `boolean`

###### uf_cob

`string` \| `number` \| `boolean`

###### ultima_atualizacao

`string` \| `number` \| `boolean`

###### website

`string` \| `number` \| `boolean`

###### whatsapp

`string` \| `number` \| `boolean`

##### oper

A operação para comparar o atributo com o valor. Pode ser '>', '<', '=', ou 'like'. O valor padrão é '='.

`">"` | `"<"` | `"="` | `"like"`

##### page

`number` = `1`

O número da página para paginação. O valor padrão é 1.

##### sortAttr

keyof `Cliente` = `'cnpj_cpf'`

O atributo de `Cliente` pelo qual os resultados serão ordenados. O valor padrão é 'cpf_cnpj'.

##### sortorder

A ordem de ordenação, pode ser 'desc' (decrescente) ou 'asc' (crescente). O valor padrão é 'desc'.

`"desc"` | `"asc"`

#### Returns

`Promise`\<`Cliente`[]\>

Uma promessa que resolve para um array de objetos `Cliente` que correspondem aos critérios de filtragem especificados.

#### Example

```ts
const clientes = await clientes.filtrarClientes({
    cpf_cnpj: '12345678901'
}, 'like', 1, 'nome', 'asc');
// clientes = [{ id: 1, nome: 'Fulano', cpf_cnpj: '12345678901', ... }, ...]
```

***

### request()

> `protected` **request**\<`T`\>(`endpoint`, `query`): `Promise`\<`T`\>

Defined in: [resources/base.ts:60](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/base.ts#L60)

Realiza uma requisição o POST para a API com base em um objeto de consulta.

#### Type Parameters

• **T**

#### Parameters

##### endpoint

`string`

O endpoint da API a ser consultado.

##### query

`QueryBody`

O objeto de consulta com os par metros para a requisição.

#### Returns

`Promise`\<`T`\>

Uma promessa que resolve para a resposta da API.

#### Inherited from

`QueryBase.request`
