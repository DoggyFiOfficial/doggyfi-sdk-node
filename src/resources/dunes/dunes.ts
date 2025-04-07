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

  mint(body: DuneMintParams, options?: Core.RequestOptions): Core.APIPromise<DuneMintResponse> {
    return this._client.post('/dunes/mint', { body, ...options });
  }

  open(body: DuneOpenParams, options?: Core.RequestOptions): Core.APIPromise<DuneOpenResponse> {
    return this._client.post('/dunes/open', { body, ...options });
  }

  send(body: DuneSendParams, options?: Core.RequestOptions): Core.APIPromise<DuneSendResponse> {
    return this._client.post('/dunes/send', { body, ...options });
  }
}

export interface DuneMintResponse {
  feeRate: number;

  fees: number;

  psbtHex: string;
}

export interface DuneOpenResponse {
  feeRate: number;

  fees: number;

  psbtHex: string;
}

export interface DuneSendResponse {
  feeRate: number;

  fees: number;

  psbtHex: string;
}

export interface DuneMintParams {
  /**
   * Dune id
   */
  id: string;

  address: string;

  amount: number;

  /**
   * Receiver address
   */
  receiver: string;
}

export interface DuneOpenParams {
  address: string;

  /**
   * The maximum number of dunes that can be minted.
   */
  cap: string | unknown;

  /**
   * The number of decimal places that the dune can be divided into
   */
  divisibility: number | string;

  /**
   * The block height at which the dune will stop minting.
   */
  heightEnd: number | string | unknown;

  /**
   * The block height at which the dune will start minting.
   */
  heightStart: number | string | unknown;

  /**
   * The maximum number of dunes that can be minted per transaction.
   */
  limit: number | string | unknown;

  /**
   * The offset at which the dune will stop minting.
   */
  offsetEnd: number | string | unknown;

  /**
   * The offset at which the dune will start minting.
   */
  offsetStart: number | string | unknown;

  /**
   * The amount of doge to send to the dune when it is created.
   */
  premine: string | unknown;

  /**
   * An ASCII string of length 1 to represent the dune.
   */
  symbol: string;

  /**
   * What should the dune be called?
   */
  ticker: string;

  /**
   * Whether or not the dune is open to mint.
   */
  openMint?: boolean;

  /**
   * Whether or not the dune is turbo.
   */
  turbo?: boolean;
}

export interface DuneSendParams {
  amount: number | string;

  /**
   * Dune id
   */
  duneId: string;

  from: string;

  to: string;

  /**
   * Fee Rate in Sat/Byte
   */
  feeRate?: number;
}

Dunes.Balances = Balances;
Dunes.Info = Info;
Dunes.Utxos = Utxos;

export declare namespace Dunes {
  export {
    type DuneMintResponse as DuneMintResponse,
    type DuneOpenResponse as DuneOpenResponse,
    type DuneSendResponse as DuneSendResponse,
    type DuneMintParams as DuneMintParams,
    type DuneOpenParams as DuneOpenParams,
    type DuneSendParams as DuneSendParams,
  };

  export { Balances as Balances, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };

  export {
    Utxos as Utxos,
    type UtxoRetrieveResponse as UtxoRetrieveResponse,
    type UtxoRetrieveParams as UtxoRetrieveParams,
  };
}
