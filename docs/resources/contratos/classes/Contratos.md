[**IXC SDK v1.0.0**](../../../README.md)

***

[IXC SDK](../../../modules.md) / [resources/contratos](../README.md) / Contratos

# Class: Contratos

Defined in: [resources/contratos/index.ts:10](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/contratos/index.ts#L10)

Classe para gerenciar contratos.

## Extends

- `QueryBase`

## Constructors

### new Contratos()

> **new Contratos**(`config`): [`Contratos`](Contratos.md)

Defined in: [resources/base.ts:48](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/base.ts#L48)

#### Parameters

##### config

`Config`

#### Returns

[`Contratos`](Contratos.md)

#### Inherited from

`QueryBase.constructor`

## Methods

### buscarContratoPorIdContrato()

> **buscarContratoPorIdContrato**(`id`): `Promise`\<`Contrato` \| `Contrato`[]\>

Defined in: [resources/contratos/index.ts:117](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/contratos/index.ts#L117)

Busca contratos com base no id do contrato.

#### Parameters

##### id

`number`

O id do contrato a ser buscado.

#### Returns

`Promise`\<`Contrato` \| `Contrato`[]\>

Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao id do contrato especificado.

#### Example

```ts
const contratos = await contratos.buscarContratoPorIdContrato(123);
// contratos = [{ id: 1, id_contrato: 123, ... }]
```

***

### buscarContratosPorId()

> **buscarContratosPorId**(`id`): `Promise`\<`Contrato`[]\>

Defined in: [resources/contratos/index.ts:61](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/contratos/index.ts#L61)

Busca um contrato pelo seu id.

#### Parameters

##### id

`number`

O id do contrato a ser buscado.

#### Returns

`Promise`\<`Contrato`[]\>

Uma promessa que resolve para um objeto `Contrato` correspondente ao id especificado.

#### Example

```ts
const contratos = await contratos.buscarContratosPorId(123);
// contratos = [{ id: 123, id_cliente: 1, ... }]
```

***

### buscarContratosPorIdCliente()

> **buscarContratosPorIdCliente**(`id`): `Promise`\<`Contrato`[]\>

Defined in: [resources/contratos/index.ts:88](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/contratos/index.ts#L88)

Busca contratos por id de cliente.

#### Parameters

##### id

`number`

O id do cliente a ser buscado.

#### Returns

`Promise`\<`Contrato`[]\>

Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao id especificado.

#### Example

```ts
const contratos = await contratos.buscarContratosPorIdCliente(123);
// contratos = [{ id: 1, id_cliente: 123, ... }, ...]
```

***

### filtrarContratos()

> **filtrarContratos**(`attr`, `oper`, `page`, `sortAttr`, `sortorder`): `Promise`\<`Contrato`[]\>

Defined in: [resources/contratos/index.ts:28](https://github.com/LSaints/ixc-sdk/blob/bb8940b914805eb9421fed2d6e3bf3995678391a/src/resources/contratos/index.ts#L28)

Filtra contratos com base em um atributo.

#### Parameters

##### attr

O atributo e valor para busca.

###### alerta_contrato

`string` \| `number` \| `boolean`

###### apartamento

`string` \| `number` \| `boolean`

###### apartamento_novo

`string` \| `number` \| `boolean`

###### assinatura_digital

`string` \| `number` \| `boolean`

###### ativacao_numero_parcelas

`string` \| `number` \| `boolean`

###### ativacao_valor_parcela

`string` \| `number` \| `boolean`

###### ativacao_vencimentos

`string` \| `number` \| `boolean`

###### avalista_1

`string` \| `number` \| `boolean`

###### avalista_2

`string` \| `number` \| `boolean`

###### aviso_atraso

`string` \| `number` \| `boolean`

###### bairro

`string` \| `number` \| `boolean`

###### bairro_novo

`string` \| `number` \| `boolean`

###### base_geracao_tipo_doc

`string` \| `number` \| `boolean`

###### bloco

`string` \| `number` \| `boolean`

###### bloco_novo

`string` \| `number` \| `boolean`

###### bloqueio_automatico

`string` \| `number` \| `boolean`

###### btn_nf_ativacao

`string` \| `number` \| `boolean`

###### cc_previsao

`string` \| `number` \| `boolean`

###### cep

`string` \| `number` \| `boolean`

###### cep_novo

`string` \| `number` \| `boolean`

###### cidade

`string` \| `number` \| `boolean`

###### cidade_novo

`string` \| `number` \| `boolean`

###### com_entrada

`string` \| `number` \| `boolean`

###### comissao

`string` \| `number` \| `boolean`

###### complemento

`string` \| `number` \| `boolean`

###### complemento_novo

`string` \| `number` \| `boolean`

###### concorrente_mot_adicional

`string` \| `number` \| `boolean`

###### condominio_novo

`string` \| `number` \| `boolean`

###### contrato

`string` \| `number` \| `boolean`

###### contrato_suspenso

`string` \| `number` \| `boolean`

###### credit_card_recorrente_bandeira_cartao

`string` \| `number` \| `boolean`

###### credit_card_recorrente_token

`string` \| `number` \| `boolean`

###### data

`string` \| `number` \| `boolean`

###### data_acesso_desativado

`string` \| `number` \| `boolean`

###### data_assinatura

`string` \| `number` \| `boolean`

###### data_ativacao

`string` \| `number` \| `boolean`

###### data_cadastro_sistema

`string` \| `number` \| `boolean`

###### data_cancelamento

`string` \| `number` \| `boolean`

###### data_desistencia

`string` \| `number` \| `boolean`

###### data_expiracao

`string` \| `number` \| `boolean`

###### data_final_suspensao

`string` \| `number` \| `boolean`

###### data_inicial_suspensao

`string` \| `number` \| `boolean`

###### data_negativacao

`string` \| `number` \| `boolean`

###### data_renovacao

`string` \| `number` \| `boolean`

###### data_retomada_contrato

`string` \| `number` \| `boolean`

###### desbloqueio_confianca

`string` \| `number` \| `boolean`

###### desbloqueio_confianca_ativo

`string` \| `number` \| `boolean`

###### desconto_fidelidade

`string` \| `number` \| `boolean`

###### descricao_aux_plano_venda

`string` \| `number` \| `boolean`

###### dia_fixo_vencimento

`string` \| `number` \| `boolean`

###### dica_data_expiracao

`string` \| `number` \| `boolean`

###### dica_motivo_adicional_cliente_contrato

`string` \| `number` \| `boolean`

###### document_photo

`string` \| `number` \| `boolean`

###### dt_ult_ativacao

`string` \| `number` \| `boolean`

###### dt_ult_bloq_auto

`string` \| `number` \| `boolean`

###### dt_ult_bloq_manual

`string` \| `number` \| `boolean`

###### dt_ult_des_bloq_conf

`string` \| `number` \| `boolean`

###### dt_ult_desiste

`string` \| `number` \| `boolean`

###### dt_ult_finan_atraso

`string` \| `number` \| `boolean`

###### dt_ult_liberacao_susp_parc

`string` \| `number` \| `boolean`

###### dt_utl_negativacao

`string` \| `number` \| `boolean`

###### endereco

`string` \| `number` \| `boolean`

###### endereco_novo

`string` \| `number` \| `boolean`

###### endereco_padrao_alert

`string` \| `number` \| `boolean`

###### endereco_padrao_cliente

`string` \| `number` \| `boolean`

###### estrato_social_col

`string` \| `number` \| `boolean`

###### fidelidade

`string` \| `number` \| `boolean`

###### gerar_finan_assin_digital_contrato

`string` \| `number` \| `boolean`

###### id

`string` \| `number` \| `boolean`

###### id_carteira_cobranca

`string` \| `number` \| `boolean`

###### id_cliente

`string` \| `number` \| `boolean`

###### id_cond_pag_ativ

`string` \| `number` \| `boolean`

###### id_condominio

`string` \| `number` \| `boolean`

###### id_contrato_principal

`string` \| `number` \| `boolean`

###### id_filial

`string` \| `number` \| `boolean`

###### id_indexador_reajuste

`string` \| `number` \| `boolean`

###### id_instalador

`string` \| `number` \| `boolean`

###### id_modelo

`string` \| `number` \| `boolean`

###### id_motivo_negativacao

`string` \| `number` \| `boolean`

###### id_produto_ativ

`string` \| `number` \| `boolean`

###### id_responsavel

`string` \| `number` \| `boolean`

###### id_responsavel_cancelamento

`string` \| `number` \| `boolean`

###### id_responsavel_desistencia

`string` \| `number` \| `boolean`

###### id_responsavel_negativacao

`string` \| `number` \| `boolean`

###### id_tipo_contrato

`string` \| `number` \| `boolean`

###### id_tipo_doc_ativ

`string` \| `number` \| `boolean`

###### id_tipo_documento

`string` \| `number` \| `boolean`

###### id_vd_contrato

`string` \| `number` \| `boolean`

###### id_vendedor

`string` \| `number` \| `boolean`

###### id_vendedor_ativ

`string` \| `number` \| `boolean`

###### ids_contratos_recorrencia

`string` \| `number` \| `boolean`

###### imp_bkp

`string` \| `number` \| `boolean`

###### imp_carteira

`string` \| `number` \| `boolean`

###### imp_final

`string` \| `number` \| `boolean`

###### imp_importacao

`string` \| `number` \| `boolean`

###### imp_inicial

`string` \| `number` \| `boolean`

###### imp_motivo

`string` \| `number` \| `boolean`

###### imp_obs

`string` \| `number` \| `boolean`

###### imp_realizado

`string` \| `number` \| `boolean`

###### imp_rede

`string` \| `number` \| `boolean`

###### imp_status

`string` \| `number` \| `boolean`

###### imp_treinamento

`string` \| `number` \| `boolean`

###### indicacao_contrato_id

`string` \| `number` \| `boolean`

###### integracao_assinatura_digital

`string` \| `number` \| `boolean`

###### isentar_contrato

`string` \| `number` \| `boolean`

###### latitude

`string` \| `number` \| `boolean`

###### latitude_novo

`string` \| `number` \| `boolean`

###### liberacao_bloqueio_manual

`string` \| `number` \| `boolean`

###### liberacao_suspensao_parcial

`string` \| `number` \| `boolean`

###### longitude

`string` \| `number` \| `boolean`

###### longitude_novo

`string` \| `number` \| `boolean`

###### moeda

`string` \| `number` \| `boolean`

###### motivo_adicional

`string` \| `number` \| `boolean`

###### motivo_cancelamento

`string` \| `number` \| `boolean`

###### motivo_desistencia

`string` \| `number` \| `boolean`

###### motivo_inclusao

`string` \| `number` \| `boolean`

###### motivo_restri_auto_libera_parc

`string` \| `number` \| `boolean`

###### motivo_restricao_auto_desbloq

`string` \| `number` \| `boolean`

###### nao_avisar_ate

`string` \| `number` \| `boolean`

###### nao_bloquear_ate

`string` \| `number` \| `boolean`

###### nao_susp_parc_ate

`string` \| `number` \| `boolean`

###### nf_info_adicionais

`string` \| `number` \| `boolean`

###### num_parcelas_atraso

`string` \| `number` \| `boolean`

###### numero

`string` \| `number` \| `boolean`

###### numero_novo

`string` \| `number` \| `boolean`

###### obs

`string` \| `number` \| `boolean`

###### obs_cancelamento

`string` \| `number` \| `boolean`

###### obs_contrato

`string` \| `number` \| `boolean`

###### obs_desistencia

`string` \| `number` \| `boolean`

###### obs_negativacao

`string` \| `number` \| `boolean`

###### pago_ate_data

`string` \| `number` \| `boolean`

###### protocolo_negativacao

`string` \| `number` \| `boolean`

###### referencia

`string` \| `number` \| `boolean`

###### referencia_novo

`string` \| `number` \| `boolean`

###### renovacao_automatica

`string` \| `number` \| `boolean`

###### restricao_auto_desbloqueio

`string` \| `number` \| `boolean`

###### restricao_auto_libera_susp_parcial

`string` \| `number` \| `boolean`

###### selfie_photo

`string` \| `number` \| `boolean`

###### status

`string` \| `number` \| `boolean`

###### status_internet

`string` \| `number` \| `boolean`

###### status_velocidade

`string` \| `number` \| `boolean`

###### taxa_improdutiva

`string` \| `number` \| `boolean`

###### taxa_instalacao

`string` \| `number` \| `boolean`

###### testemunha_assinatura_digital

`string` \| `number` \| `boolean`

###### tipo

`string` \| `number` \| `boolean`

###### tipo_cobranca

`string` \| `number` \| `boolean`

###### tipo_condicao_pag

`string` \| `number` \| `boolean`

###### tipo_doc_opc

`string` \| `number` \| `boolean`

###### tipo_doc_opc2

`string` \| `number` \| `boolean`

###### tipo_doc_opc3

`string` \| `number` \| `boolean`

###### tipo_doc_opc4

`string` \| `number` \| `boolean`

###### tipo_localidade

`string` \| `number` \| `boolean`

###### tipo_produtos_plano

`string` \| `number` \| `boolean`

###### token_assinatura_digital

`string` \| `number` \| `boolean`

###### ultima_atualizacao

`string` \| `number` \| `boolean`

###### url_assinatura_digital

`string` \| `number` \| `boolean`

###### utilizando_auto_libera_susp_parc

`string` \| `number` \| `boolean`

###### venc_personalizado

`string` \| `number` \| `boolean`

##### oper

O operador para a busca. Pode ser: `>`, `<`, `=`, `like`.

`">"` | `"<"` | `"="` | `"like"`

##### page

`number` = `1`

A p gina dos resultados a ser retornada. Padr o: `1`.

##### sortAttr

keyof `Contrato` = `'id_cliente'`

O atributo para ordena o dos resultados. Padr o: `id_cliente`.

##### sortorder

A ordena o dos resultados. Pode ser: `desc`, `asc`. Padr o: `desc`.

`"desc"` | `"asc"`

#### Returns

`Promise`\<`Contrato`[]\>

Uma promessa que resolve para um array de objetos `Contrato` que correspondem ao valor especificado.

#### Example

```ts
const contratos = await contratos.filtrarContratos({
    id_cliente: 1
}, '>', 1, 'id_contrato', 'asc');
// contratos = [{ id: 1, id_cliente: 1, ... }]
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
