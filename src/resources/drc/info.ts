// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}
