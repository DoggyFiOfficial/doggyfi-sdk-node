// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { BlockCountResponse, Blocks } from './resources/blocks';
import { FeeRate, FeeRateRetrieveResponse } from './resources/fee-rate';
import { TipRetrieveResponse, Tips } from './resources/tips';
import {
  Tx,
  TxBuildParams,
  TxBuildResponse,
  TxPushParams,
  TxPushResponse,
  TxRetrieveResponse,
  TxSendDogeParams,
  TxSendDogeResponse,
} from './resources/tx';
import { UnspentRetrieveParams, UnspentRetrieveResponse, Unspents } from './resources/unspents';
import { Drc } from './resources/drc/drc';
import { DuneSendParams, DuneSendResponse, Dunes } from './resources/dunes/dunes';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DOGGYFI_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Doggyfi SDK API.
 */
export class DoggyfiSDK extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Doggyfi SDK API.
   *
   * @param {string} [opts.baseURL=process.env['DOGGYFI_SDK_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('DOGGYFI_SDK_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://localhost:8080/test-api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  unspents: API.Unspents = new API.Unspents(this);
  tx: API.Tx = new API.Tx(this);
  drc: API.Drc = new API.Drc(this);
  dunes: API.Dunes = new API.Dunes(this);
  blocks: API.Blocks = new API.Blocks(this);
  feeRate: API.FeeRate = new API.FeeRate(this);
  tips: API.Tips = new API.Tips(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static DoggyfiSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DoggyfiSDKError = Errors.DoggyfiSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

DoggyfiSDK.Unspents = Unspents;
DoggyfiSDK.Tx = Tx;
DoggyfiSDK.Drc = Drc;
DoggyfiSDK.Dunes = Dunes;
DoggyfiSDK.Blocks = Blocks;
DoggyfiSDK.FeeRate = FeeRate;
DoggyfiSDK.Tips = Tips;
export declare namespace DoggyfiSDK {
  export type RequestOptions = Core.RequestOptions;

  export {
    Unspents as Unspents,
    type UnspentRetrieveResponse as UnspentRetrieveResponse,
    type UnspentRetrieveParams as UnspentRetrieveParams,
  };

  export {
    Tx as Tx,
    type TxRetrieveResponse as TxRetrieveResponse,
    type TxBuildResponse as TxBuildResponse,
    type TxPushResponse as TxPushResponse,
    type TxSendDogeResponse as TxSendDogeResponse,
    type TxBuildParams as TxBuildParams,
    type TxPushParams as TxPushParams,
    type TxSendDogeParams as TxSendDogeParams,
  };

  export { Drc as Drc };

  export { Dunes as Dunes, type DuneSendResponse as DuneSendResponse, type DuneSendParams as DuneSendParams };

  export { Blocks as Blocks, type BlockCountResponse as BlockCountResponse };

  export { FeeRate as FeeRate, type FeeRateRetrieveResponse as FeeRateRetrieveResponse };

  export { Tips as Tips, type TipRetrieveResponse as TipRetrieveResponse };
}

export { toFile, fileFromPath } from 'doggyfi-sdk/uploads';
export {
  DoggyfiSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from 'doggyfi-sdk/error';

export default DoggyfiSDK;
