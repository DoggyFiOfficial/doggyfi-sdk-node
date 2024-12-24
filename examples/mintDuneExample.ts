import DoggyfiSDK from 'doggyfi-sdk';
import ECPairFactory from 'ecpair';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);
const client = new DoggyfiSDK({ baseURL: 'https://api.doggyfi.xyz/' });
const PHRASE = 'YOUR SEED PHRASE HERE';
const yourAddressAccount = 0; // assumes you are using m/44'/3'/0'/0/0, if you are using a different derivation path, you will need to change this.

async function main() {
  const responsePromise = client.dunes.mint({
    id: '5430745:36',
    address: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
    amount: 69,
    receiver: 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM',
  });

  const dataAndResponse = await responsePromise.withResponse();

  const txhex = dataAndResponse.data.psbtHex;

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
