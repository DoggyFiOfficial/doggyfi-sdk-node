import DoggyfiSDK from 'doggyfi-sdk';
import { Psbt } from 'bitcoinjs-lib';

import { ECPairFactory } from 'ecpair';
import ecc from '@bitcoinerlab/secp256k1';
const ECPair = ECPairFactory(ecc);

const client = new DoggyfiSDK({ baseURL: process.env['API_BASE_URL'] });
const responsePromise = client.tx.build({
  inputs: [{ txid: '<tx hash here>', vout: 0 }], // replace with your tx hash and vout
  outputs: [{ address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM', satoshis: 0 }],
});
const rawResponse = await responsePromise.asResponse(); // ts-ignore

// Signing logic with bitcoinjs-lib
const psdt = Psbt.fromBase64(rawResponse.body.toString());
const keyPair = ECPair.fromWIF('<your wif here>');
psdt.signAllInputs(keyPair);
const signedTx = psdt.finalizeAllInputs();

// Broadcasting logic with bitcoinjs-lib
import { Network } from 'bitcoinjs-lib';
const network = Network.mainnet;
const txid = await client.tx.broadcast({
  txHex: signedTx.toHex(),
  network,
});
