// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Blocks extends APIResource {
  /**
   * Get the current block height
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/blocks/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * Current block height
 */
export type BlockCountResponse = string;

export declare namespace Blocks {
  export { type BlockCountResponse as BlockCountResponse };
}
