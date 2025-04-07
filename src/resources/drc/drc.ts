// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BalancesAPI from './balances';
import { Balances } from './balances';
import * as InfoAPI from './info';
import { Info } from './info';

export class Drc extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

Drc.Balances = Balances;
Drc.Info = Info;

export declare namespace Drc {
  export { Balances as Balances };

  export { Info as Info };
}
