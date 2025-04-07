// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tx', () => {
  test('retrieve', async () => {
    const responsePromise = client.tx.retrieve(
      '5376daac28dd658d46295e161cda557c1332b00466a98f786527b4aff604c15f',
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
      client.tx.retrieve('5376daac28dd658d46295e161cda557c1332b00466a98f786527b4aff604c15f', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DoggyfiSDK.NotFoundError);
  });

  test('build: only required params', async () => {
    const responsePromise = client.tx.build({
      inputs: [{ txid: '5376daac28dd658d46295e161cda557c1332b00466a98f786527b4aff604c15f', vout: 0 }],
      outputs: [{ address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU', satoshis: 100000000 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('build: required and optional params', async () => {
    const response = await client.tx.build({
      inputs: [{ txid: '5376daac28dd658d46295e161cda557c1332b00466a98f786527b4aff604c15f', vout: 0 }],
      outputs: [{ address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU', satoshis: 100000000 }],
      fees: { feeRate: 150000, fundingAddress: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU' },
    });
  });

  test('push: only required params', async () => {
    const responsePromise = client.tx.push({ txHex: '5d0bea8699190e14fcf8fe525bc09b00...' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('push: required and optional params', async () => {
    const response = await client.tx.push({ txHex: '5d0bea8699190e14fcf8fe525bc09b00...' });
  });
});
