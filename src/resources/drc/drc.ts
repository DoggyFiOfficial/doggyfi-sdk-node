// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BalancesAPI from './balances';
import * as InfoAPI from './info';

export class Drc extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

export namespace Drc {
  export import Balances = BalancesAPI.Balances;
  export import BalanceRetrieveResponse = BalancesAPI.BalanceRetrieveResponse;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}
