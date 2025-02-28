// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Balances extends APIResource {
  /**
   * Get Dunes by address
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get(`/dunes/balances/${address}`, options);
  }
}

export type BalanceRetrieveResponse = Record<string, string>;

export declare namespace Balances {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
