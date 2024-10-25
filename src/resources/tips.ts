// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TipsAPI from './tips';

export class Tips extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<TipRetrieveResponse> {
    return this._client.get('/tip', options);
  }
}

export interface TipRetrieveResponse {
  /**
   * Tip amount in shibes (100,000,000 = 1 Doge)
   */
  tip?: string;

  tipAddress?: string;
}

export namespace Tips {
  export type TipRetrieveResponse = TipsAPI.TipRetrieveResponse;
}
