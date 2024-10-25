// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BalancesAPI from './balances';
import * as InfoAPI from './info';
import * as UtxosAPI from './utxos';

export class Dunes extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  utxos: UtxosAPI.Utxos = new UtxosAPI.Utxos(this._client);
}

export namespace Dunes {
  export import Balances = BalancesAPI.Balances;
  export type BalanceRetrieveResponse = BalancesAPI.BalanceRetrieveResponse;
  export import Info = InfoAPI.Info;
  export type InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import Utxos = UtxosAPI.Utxos;
  export type UtxoRetrieveResponse = UtxosAPI.UtxoRetrieveResponse;
  export type UtxoRetrieveParams = UtxosAPI.UtxoRetrieveParams;
}
