// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
  data: Array<UnspentRetrieveResponse.Data>;

  last_updated: UnspentRetrieveResponse.LastUpdated;

  next_cursor: string;
}

export namespace UnspentRetrieveResponse {
  export interface Data {
    address: string;

    confirmations: number;

    dunes: Array<Data.Dune>;

    height: number;

    inscriptions: Array<Data.Inscription>;

    satoshis: string;

    script_pubkey: string;

    txid: string;

    vout: number;
  }

  export namespace Data {
    export interface Dune {
      amount: string;

      dune_id: string;
    }

    export interface Inscription {
      inscription_id: string;

      offset: number;
    }
  }

  export interface LastUpdated {
    block_hash: string;

    block_height: number;
  }
}

export interface UnspentRetrieveParams {
  count?: number;

  cursor?: string;

  exclude_metaprotocols?: boolean;

  filter_dust?: boolean;

  filter_dust_threshold?: number;

  from?: number;

  order?: 'asc' | 'desc';

  to?: number;
}

export declare namespace Unspents {
  export {
    type UnspentRetrieveResponse as UnspentRetrieveResponse,
    type UnspentRetrieveParams as UnspentRetrieveParams,
  };
}
