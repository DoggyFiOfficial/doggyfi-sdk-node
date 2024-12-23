// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Prices extends APIResource {
  /**
   * Get the price of a token
   */
  retrieve(token: string, options?: Core.RequestOptions): Core.APIPromise<PriceRetrieveResponse> {
    return this._client.get(`/prices/doggyfi-pool/${token}`, options);
  }
}

/**
 * Successful price response
 */
export type PriceRetrieveResponse = PriceRetrieveResponse.Price | PriceRetrieveResponse.Error;

export namespace PriceRetrieveResponse {
  /**
   * Successful price response
   */
  export interface Price {
    price: number;
  }

  /**
   * Error response when the pool is not found
   */
  export interface Error {
    error: string;
  }
}

export declare namespace Prices {
  export { type PriceRetrieveResponse as PriceRetrieveResponse };
}
