// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tx', () => {
  test('retrieve', async () => {
    const responsePromise = client.tx.retrieve(
      '7850e20b7672ac45861160fff64b4a11f7980172c1d47e388b4b25b9f2f951be',
    );
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
    await expect(
      client.tx.retrieve('7850e20b7672ac45861160fff64b4a11f7980172c1d47e388b4b25b9f2f951be', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DoggyfiSDK.NotFoundError);
  });

  test('push', async () => {
    const responsePromise = client.tx.push();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('push: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tx.push({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      DoggyfiSDK.NotFoundError,
    );
  });
});