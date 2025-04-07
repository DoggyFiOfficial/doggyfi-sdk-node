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

  max_supply: string;

  mints: number;

  name: string;

  spaced_name: string;

  symbol: string;

  terms: InfoRetrieveResponse.Terms;

  unique_holders: number;
}

export namespace InfoRetrieveResponse {
  export interface Terms {
    amount_per_mint: string;

    end_height: string;

    end_offset: string;

    mint_txs_cap: string;

    start_height: string;

    start_offset: string;
  }
}

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}
