// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BalancesAPI from './balances';
import { BalanceRetrieveResponse, Balances } from './balances';
import * as InfoAPI from './info';
import { Info, InfoRetrieveResponse } from './info';

export class Drc extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  sendExact(
    address: string,
    ticker: string,
    amount: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DrcSendExactResponse> {
    return this._client.post(`/drc20/sendExactDRC20/${address}/${ticker}/${amount}`, options);
  }
}

export interface DrcSendExactResponse {
  /**
   * Transaction ID
   */
  txid: string;
}

Drc.Balances = Balances;
Drc.Info = Info;

export declare namespace Drc {
  export { type DrcSendExactResponse as DrcSendExactResponse };

  export { Balances as Balances, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };
}
