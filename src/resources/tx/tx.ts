// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PsbtAPI from './psbt';
import { Psbt } from './psbt';

export class Tx extends APIResource {
  psbt: PsbtAPI.Psbt = new PsbtAPI.Psbt(this._client);

  retrieve(hash: string, options?: Core.RequestOptions): Core.APIPromise<TxRetrieveResponse> {
    return this._client.get(`/tx/${hash}`, options);
  }

  /**
   * Build a transaction
   */
  build(body: TxBuildParams, options?: Core.RequestOptions): Core.APIPromise<TxBuildResponse> {
    return this._client.post('/tx/build', { body, ...options });
  }

  /**
   * Submit a transactions
   */
  push(body: TxPushParams, options?: Core.RequestOptions): Core.APIPromise<TxPushResponse> {
    return this._client.post('/tx/push', { body, ...options });
  }
}

export interface TxRetrieveResponse {
  blockhash: string;

  blocktime: number;

  confirmations: number;

  hash: string;

  hex: string;

  locktime: number;

  size: number;

  time: number;

  txid: string;

  version: number;

  vin: Array<TxRetrieveResponse.Vin>;

  vout: Array<TxRetrieveResponse.Vout>;
}

export namespace TxRetrieveResponse {
  export interface Vin {
    scriptSig: Vin.ScriptSig;

    sequence: number;

    txid: string;

    vout: number;

    coinbase?: string;
  }

  export namespace Vin {
    export interface ScriptSig {
      asm: string;

      hex: string;
    }
  }

  export interface Vout {
    n: number;

    scriptPubKey: Vout.ScriptPubKey;

    value: number;
  }

  export namespace Vout {
    export interface ScriptPubKey {
      asm: string;

      hex: string;

      type:
        | 'multisig'
        | 'nonstandard'
        | 'nulldata'
        | 'pubkey'
        | 'pubkeyhash'
        | 'scripthash'
        | 'witness_v0_keyhash';

      addresses?: Array<string> | unknown;

      reqSigs?: number;
    }
  }
}

export interface TxBuildResponse {
  psbtHex: string;

  feeRate?: number;

  fees?: number;
}

export interface TxPushResponse {
  txHash: string;
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
    satoshis: number | string;
  }

  export interface Fees {
    /**
     * Fee Rate in satoshis per byte
     */
    feeRate: number;

    fundingAddress: string;
  }
}

export interface TxPushParams {
  txHex: string;
}

Tx.Psbt = Psbt;

export declare namespace Tx {
  export {
    type TxRetrieveResponse as TxRetrieveResponse,
    type TxBuildResponse as TxBuildResponse,
    type TxPushResponse as TxPushResponse,
    type TxBuildParams as TxBuildParams,
    type TxPushParams as TxPushParams,
  };

  export { Psbt as Psbt };
}
