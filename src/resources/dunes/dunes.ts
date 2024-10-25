// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DunesAPI from './dunes';
import * as BalancesAPI from './balances';
import * as InfoAPI from './info';
import * as UtxosAPI from './utxos';

export class Dunes extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  utxos: UtxosAPI.Utxos = new UtxosAPI.Utxos(this._client);

  send(body: DuneSendParams, options?: Core.RequestOptions): Core.APIPromise<DuneSendResponse> {
    return this._client.post('/dunes/send', { body, ...options });
  }
}

export interface DuneSendResponse {
  /**
   * Fee rate in satoshis per byte
   */
  feeRate: number;

  /**
   * Fees in doge
   */
  fees: number;

  /**
   * Psbt Hex to sign
   */
  psbtHex: string;
}

export interface DuneSendParams {
  /**
   * Amount to send
   */
  amount: string;

  /**
   * Dune ID
   */
  duneId: string;

  /**
   * Address to send from
   */
  from: string;

  /**
   * Address to send to
   */
  to: string;

  /**
   * Fee Rate in Sat/Byte (optional, not including will auto-calculate)
   */
  feeRate?: number;
}

export namespace Dunes {
  export import DuneSendResponse = DunesAPI.DuneSendResponse;
  export import DuneSendParams = DunesAPI.DuneSendParams;
  export import Balances = BalancesAPI.Balances;
  export import BalanceRetrieveResponse = BalancesAPI.BalanceRetrieveResponse;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import Utxos = UtxosAPI.Utxos;
  export import UtxoRetrieveResponse = UtxosAPI.UtxoRetrieveResponse;
  export import UtxoRetrieveParams = UtxosAPI.UtxoRetrieveParams;
}
