// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TxAPI from './tx';

export class Tx extends APIResource {
  retrieve(hash: string, options?: Core.RequestOptions): Core.APIPromise<TxRetrieveResponse> {
    return this._client.get(`/tx/${hash}`, options);
  }

  push(
    body?: TxPushParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TxPushResponse> {
    return this._client.post('/tx/push', {
      ...options,
      headers: { 'Content-Type': 'text/plain', ...options?.headers },
    });
  }
}

export interface TxRetrieveResponse {
  hex: string;

  size: number;

  txid: string;

  vin: Array<TxRetrieveResponse.Vin>;

  vout: Array<TxRetrieveResponse.Vout>;

  vsize: number;

  blockhash?: string;

  blocktime?: number;

  confirmations?: number;

  time?: number;
}

export namespace TxRetrieveResponse {
  export interface Vin {
    scriptSig: Vin.ScriptSig;

    sequence: number;

    txid: string;

    vout: number;
  }

  export namespace Vin {
    export interface ScriptSig {
      asm: string;

      hex: string;
    }
  }

  export interface Vout {
    /**
     * Output index
     */
    n: number;

    scriptPubKey: Vout.ScriptPubKey;

    /**
     * Value is in Dogecoin.
     */
    value: number;
  }

  export namespace Vout {
    export interface ScriptPubKey {
      asm: string;

      hex: string;

      type: string;

      addresses?: Array<string>;
    }
  }
}

export interface TxPushResponse {
  txid: string;
}

export interface TxPushParams {}

export namespace Tx {
  export import TxRetrieveResponse = TxAPI.TxRetrieveResponse;
  export import TxPushResponse = TxAPI.TxPushResponse;
  export import TxPushParams = TxAPI.TxPushParams;
}
