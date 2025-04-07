// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DoggyfiSDK from 'doggyfi-sdk';
import { Response } from 'node-fetch';

const client = new DoggyfiSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource dunes', () => {
  test('mint: only required params', async () => {
    const responsePromise = client.dunes.mint({
      id: '5430745:36',
      address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      amount: 0,
      receiver: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
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
      address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      amount: 0,
      receiver: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
    });
  });

  test('open: only required params', async () => {
    const responsePromise = client.dunes.open({
      address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      cap: '21000000',
      divisibility: 8,
      heightEnd: 50000,
      heightStart: 50000,
      limit: 0,
      offsetEnd: 50000,
      offsetStart: 50000,
      premine: 'string',
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
      address: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      cap: '21000000',
      divisibility: 8,
      heightEnd: 50000,
      heightStart: 50000,
      limit: 0,
      offsetEnd: 50000,
      offsetStart: 50000,
      premine: 'string',
      symbol: 'D',
      ticker: 'THISISADUNENAME',
      openMint: true,
      turbo: true,
    });
  });

  test('send: only required params', async () => {
    const responsePromise = client.dunes.send({
      amount: 0,
      duneId: '5430745:36',
      from: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      to: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
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
      amount: 0,
      duneId: '5430745:36',
      from: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      to: 'D8AXXiGEZeZnMKTKnC9AWB3YUU4jfMAmYU',
      feeRate: 121321,
    });
  });
});
