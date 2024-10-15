// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InfoAPI from './info';

export class Info extends APIResource {
  /**
   * Get DRC by address
   */
  retrieve(ticker: string, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get(`/drc/info/${ticker}`, options);
  }
}

export interface InfoRetrieveResponse {
  deployInscription: string;

  /**
   * Number of holders of the DRC20
   */
  holders: number;

  mintedSupply: string;

  terms: InfoRetrieveResponse.Terms;

  ticker: string;
}

export namespace InfoRetrieveResponse {
  export interface Terms {
    dec: number;

    limit: string;

    max: string;
  }
}

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}
