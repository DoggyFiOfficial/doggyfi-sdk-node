// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FeeRate extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<FeeRateRetrieveResponse> {
    return this._client.get('/feeRate', options);
  }
}

export interface FeeRateRetrieveResponse {
  feeRate: number;
}

export declare namespace FeeRate {
  export { type FeeRateRetrieveResponse as FeeRateRetrieveResponse };
}
