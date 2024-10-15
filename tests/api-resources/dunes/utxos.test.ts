// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });
const duneId = process.env['TEST_DUNE_ID']
if (!duneId) {
  throw new Error("TEST_DUNE_ID COULD NOT BE READ FROM PROCESS.ENV")
}

describe('resource utxos', () => {
  test('retrieve', async () => {
    const responsePromise = client.dunes.utxos.retrieve(duneId);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.dunes.utxos.retrieve(duneId, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      DoggyfiSDK.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dunes.utxos.retrieve(duneId, { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DoggyfiSDK.NotFoundError);
  });
});
