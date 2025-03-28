// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Info extends APIResource {
  /**
   * Get Dunes info
   */
  retrieve(duneId: string, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get(`/dunes/info/${duneId}`, options);
  }
}

export interface InfoRetrieveResponse {
  id: string;

  circulating_supply: string;

  divisibility: number | null;

  etching_cenotaph: boolean;

  etching_height: number;

  etching_tx: string;

  max_supply: string | null;

  mints: number;

  name: string;

  spaced_name: string;

  symbol: string | null;

  terms: InfoRetrieveResponse.Terms;

  unique_holders: number;
}

export namespace InfoRetrieveResponse {
  export interface Terms {
    amount_per_mint: string | null;

    end_height: string | null;

    end_offset: string | null;

    mint_txs_cap: string | null;

    start_height: string | null;

    start_offset: string | null;
  }
}

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}
