// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource drc', () => {
  test('sendExact', async () => {
    const responsePromise = client.drc.sendExact('D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM', 'dogi', 'amount');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendExact: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.drc.sendExact('D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM', 'dogi', 'amount', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DoggyfiSDK.NotFoundError);
  });
});
