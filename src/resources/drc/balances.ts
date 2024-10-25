// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BalancesAPI from './balances';

export class Balances extends APIResource {
  /**
   * Get DRC by address
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get(`/drc/balances/${address}`, options);
  }
}

export type BalanceRetrieveResponse = Record<string, BalanceRetrieveResponse.item>;

export namespace BalanceRetrieveResponse {
  export interface item {
    available: string;

    total: string;
  }
}

export namespace Balances {
  export import BalanceRetrieveResponse = BalancesAPI.BalanceRetrieveResponse;
}
