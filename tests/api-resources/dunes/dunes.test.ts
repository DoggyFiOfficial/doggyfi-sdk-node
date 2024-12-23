// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource dunes', () => {
  test('mint: only required params', async () => {
    const responsePromise = client.dunes.mint({
      id: '5430745:36',
      address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      amount: 69,
      receiver: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('mint: required and optional params', async () => {
    const response = await client.dunes.mint({
      id: '5430745:36',
      address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      amount: 69,
      receiver: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
    });
  });

  test('open: only required params', async () => {
    const responsePromise = client.dunes.open({
      address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      symbol: 'D',
      ticker: 'THISISADUNENAME',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('open: required and optional params', async () => {
    const response = await client.dunes.open({
      address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      symbol: 'D',
      ticker: 'THISISADUNENAME',
      cap: '21000000',
      divisibility: 8,
      heightEnd: 10000000,
      heightStart: 5000000,
      limit: '1000',
      offsetEnd: 10000000,
      offsetStart: 0,
      openMint: true,
      premine: 'premine',
      turbo: true,
    });
  });

  test('send: only required params', async () => {
    const responsePromise = client.dunes.send({
      amount: 'amount',
      duneId: '5430336:17',
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
  });

  test('send: required and optional params', async () => {
    const response = await client.dunes.send({
      amount: 'amount',
      duneId: '5430336:17',
      from: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      to: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
      feeRate: 127328,
    });
  });
});
