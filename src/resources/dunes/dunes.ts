// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BalancesAPI from './balances';
import { BalanceRetrieveResponse, Balances } from './balances';
import * as InfoAPI from './info';
import { Info, InfoRetrieveResponse } from './info';
import * as UtxosAPI from './utxos';
import { UtxoRetrieveParams, UtxoRetrieveResponse, Utxos } from './utxos';

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

Dunes.Balances = Balances;
Dunes.Info = Info;
Dunes.Utxos = Utxos;

export declare namespace Dunes {
  export { type DuneSendResponse as DuneSendResponse, type DuneSendParams as DuneSendParams };

  export { Balances as Balances, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };

  export {
    Utxos as Utxos,
    type UtxoRetrieveResponse as UtxoRetrieveResponse,
    type UtxoRetrieveParams as UtxoRetrieveParams,
  };
}
