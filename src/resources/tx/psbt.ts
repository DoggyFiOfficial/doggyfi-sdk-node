// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Psbt extends APIResource {
  decode(body: PsbtDecodeParams, options?: Core.RequestOptions): Core.APIPromise<PsbtDecodeResponse> {
    return this._client.post('/tx/psbt/decode', { body, ...options });
  }
}

export interface PsbtDecodeResponse {
  /**
   * Psbt Base64 decoded
   */
  decodedPSBT: PsbtDecodeResponse.DecodedPsbt;

  /**
   * Fee rate in satoshis per byte
   */
  feeRate: number;

  /**
   * Fees in doge
   */
  fees: number;
}

export namespace PsbtDecodeResponse {
  /**
   * Psbt Base64 decoded
   */
  export interface DecodedPsbt {
    inputs: Array<DecodedPsbt.Input>;

    outputs: Array<DecodedPsbt.Output>;
  }

  export namespace DecodedPsbt {
    export interface Input {
      hash: string;

      index: number;

      sequence?: number;
    }

    export interface Output {
      script: string;

      value: number;

      address?: string;
    }
  }
}

export interface PsbtDecodeParams {
  /**
   * Psbt Base64 to decode
   */
  psbtBase64: string;
}

export declare namespace Psbt {
  export { type PsbtDecodeResponse as PsbtDecodeResponse, type PsbtDecodeParams as PsbtDecodeParams };
}
