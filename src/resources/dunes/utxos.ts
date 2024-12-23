// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Utxos extends APIResource {
  retrieve(
    duneId: string,
    query?: UtxoRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UtxoRetrieveResponse>;
  retrieve(duneId: string, options?: Core.RequestOptions): Core.APIPromise<UtxoRetrieveResponse>;
  retrieve(
    duneId: string,
    query: UtxoRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UtxoRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(duneId, {}, query);
    }
    return this._client.get(`/dunes/utxos/${duneId}`, { query, ...options });
  }
}

export interface UtxoRetrieveResponse {
  nextCursor: string | null;

  unspents: Array<UtxoRetrieveResponse.Unspent>;
}

export namespace UtxoRetrieveResponse {
  export interface Unspent {
    address: string | null;

    confirmations: number;

    dune_amount: string;

    height: number;

    satoshis: string;

    script_pubkey: string;

    txid: string;

    vout: number;
  }
}

export interface UtxoRetrieveParams {
  /**
   * Cursor for pagination
   */
  cursor?: string;
}

export declare namespace Utxos {
  export { type UtxoRetrieveResponse as UtxoRetrieveResponse, type UtxoRetrieveParams as UtxoRetrieveParams };
}
