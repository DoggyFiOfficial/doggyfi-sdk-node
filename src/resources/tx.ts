// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Tx extends APIResource {
  retrieve(hash: string, options?: Core.RequestOptions): Core.APIPromise<TxRetrieveResponse> {
    return this._client.get(`/tx/${hash}`, options);
  }

  build(body: TxBuildParams, options?: Core.RequestOptions): Core.APIPromise<TxBuildResponse> {
    return this._client.post('/tx/build', { body, ...options });
  }

  push(body: TxPushParams, options?: Core.RequestOptions): Core.APIPromise<TxPushResponse> {
    return this._client.post('/tx/push', {
      body,
      headers: { 'Content-Type': 'text/plain' },
      __binaryRequest: true,
    });
  }

  sendDoge(body: TxSendDogeParams, options?: Core.RequestOptions): Core.APIPromise<TxSendDogeResponse> {
    return this._client.post('/tx/send/doge', { body, ...options });
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

      addresses?: Array<string> | null;
    }
  }
}

export interface TxBuildResponse {
  /**
   * Base64 encoded PSBT
   */
  psbtBase64: string;

  /**
   * Fee rate in satoshis per byte
   */
  feeRate?: number;

  /**
   * Fees in doge
   */
  fees?: number;
}

export interface TxPushResponse {
  txid: string;
}

export interface TxSendDogeResponse {
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

export interface TxBuildParams {
  inputs: Array<TxBuildParams.Input>;

  outputs: Array<TxBuildParams.Output>;

  fees?: TxBuildParams.Fees;
}

export namespace TxBuildParams {
  export interface Input {
    /**
     * UTXO Transaction ID
     */
    txid: string;

    /**
     * UTXO Output Index
     */
    vout: number;
  }

  export interface Output {
    /**
     * Address to send to
     */
    address: string;

    /**
     * Amount to send in satoshis (1 doge is 100,000,000 satoshis)
     */
    satoshis: number;
  }

  export interface Fees {
    /**
     * Address to use fee funds from
     */
    fundingAddress: string;

    /**
     * Fee rate in satoshis per byte (optional)
     */
    feeRate?: number;
  }
}

export type TxPushParams = string;

export interface TxSendDogeParams {
  /**
   * Amount to send in doge.
   */
  amount: number;

  /**
   * The address to send from
   */
  from: string;

  /**
   * The address to send to
   */
  to: string;

  /**
   * Fee rate in satoshis per byte (optional)
   */
  feeRate?: number;
}

export declare namespace Tx {
  export {
    type TxRetrieveResponse as TxRetrieveResponse,
    type TxBuildResponse as TxBuildResponse,
    type TxPushResponse as TxPushResponse,
    type TxSendDogeResponse as TxSendDogeResponse,
    type TxBuildParams as TxBuildParams,
    type TxPushParams as TxPushParams,
    type TxSendDogeParams as TxSendDogeParams,
  };
}
