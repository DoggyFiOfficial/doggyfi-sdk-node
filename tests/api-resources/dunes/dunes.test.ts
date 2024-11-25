// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource dunes', () => {
  test('send: only required params', async () => {
    const responsePromise = client.dunes.send({
      amount: '0.00000001',
      duneId: '5345732:9',
      from: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      to: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  }, 22000);

  test('send: required and optional params', async () => {
    const response = await client.dunes.send({
      amount: '0.00000001',
      duneId: '5345732:9',
      from: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      to: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      feeRate: 127328,
    });
  }, 22000);
});