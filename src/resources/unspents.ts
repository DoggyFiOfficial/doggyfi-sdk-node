// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as UnspentsAPI from './unspents';

export class Unspents extends APIResource {
  retrieve(
    address: string,
    query?: UnspentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnspentRetrieveResponse>;
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<UnspentRetrieveResponse>;
  retrieve(
    address: string,
    query: UnspentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnspentRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(address, {}, query);
    }
    return this._client.get(`/unspents/${address}`, { query, ...options });
  }
}

export interface UnspentRetrieveResponse {
  nextCursor: string | null;

  unspents: Array<UnspentRetrieveResponse.Unspent>;
}

export namespace UnspentRetrieveResponse {
  export interface Unspent {
    address: string;

    confirmations: number;

    dunes: Array<Unspent.Dune>;

    hash: string;

    inscriptions: Array<Unspent.Inscription>;

    scriptPubKey: string;

    /**
     * Value in satoshis. 1 Doge = 100,000,000
     */
    value: string;

    vout_index: number;
  }

  export namespace Unspent {
    export interface Dune {
      amount: string;

      dune_id: string;
    }

    export interface Inscription {
      inscription_id: string;

      offset: number;
    }
  }
}

export interface UnspentRetrieveParams {
  /**
   * Cursor for pagination
   */
  cursor?: string;

  /**
   * Ignore unspents with a value of 100,000
   */
  ignoreDust?: boolean | null;
}

export namespace Unspents {
  export import UnspentRetrieveResponse = UnspentsAPI.UnspentRetrieveResponse;
  export import UnspentRetrieveParams = UnspentsAPI.UnspentRetrieveParams;
}
