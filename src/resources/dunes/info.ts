// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Info extends APIResource {
  retrieve(duneId: string, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get(`/dunes/info/${duneId}`, options);
  }
}

export interface InfoRetrieveResponse {
  id: string;

  circulating_supply: string;

  divisibility: number;

  etching_cenotaph: boolean;

  etching_height: number;

  etching_tx: string;

  max_supply: string | unknown;

  mints: number;

  name: string;

  spaced_name: string;

  symbol: string;

  terms: InfoRetrieveResponse.Terms;

  unique_holders: number;
}

export namespace InfoRetrieveResponse {
  export interface Terms {
    amount_per_mint: string | unknown;

    end_height: string | unknown;

    end_offset: string | unknown;

    mint_txs_cap: string | unknown;

    start_height: string | unknown;

    start_offset: string | unknown;
  }
}

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}
