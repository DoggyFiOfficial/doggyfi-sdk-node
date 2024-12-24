import DoggyfiSDK from 'doggyfi-sdk';
import ECPairFactory from 'ecpair';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);
const client = new DoggyfiSDK({ baseURL: 'https://api.doggyfi.xyz/' });
const PHRASE = 'YOUR SEED PHRASE HERE';
const yourAddressAccount = 0; // assumes you are using m/44'/3'/0'/0/0, if you are using a different derivation path, you will need to change this.

async function main() {
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
    premine: '0',
    turbo: true,
  });

  const txhex = response.psbtHex;

  // makes wif on dogecoin network
  const walletWif = await DoggyfiSDK.makeWif(PHRASE, yourAddressAccount);

  // sign tx
  // NOTE FALSE BECAUSE IT IS A HEX NOT A BASE64
  const signedTx = await DoggyfiSDK.signerTXAndSign(ECPair, txhex, walletWif, false);
  // push tx
  // I have commented this out in the example, if you actually intend to push, uncomment this.
  // const pushedTx = await APIclient.tx.push(signedTx);
  // console.log(pushedTx);
}
