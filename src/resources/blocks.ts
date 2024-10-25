// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BlocksAPI from './blocks';

export class Blocks extends APIResource {
  /**
   * Get the current block height
   */
  count(options?: Core.RequestOptions): Core.APIPromise<BlockCountResponse> {
    return this._client.get('/blocks/count', options);
  }
}

/**
 * Current block height
 */
export type BlockCountResponse = number;

export namespace Blocks {
  export type BlockCountResponse = BlocksAPI.BlockCountResponse;
}
