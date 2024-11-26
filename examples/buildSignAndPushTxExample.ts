// example of building a transaction and pushing it.
// NEVER USE THIS IN PRODUCTION, YOU SHOULD NEVER STORE A SEED PHRASE IN A REAL APP.
// YOU SHOULD SECURLY PASS THE SEED PHRASE FROM THE WALLET DIRECTLY.
import ECPairFactory from 'ecpair';
import DoggyfiSDK from 'doggyfi-sdk';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);
const APIclient = new DoggyfiSDK({ baseURL: 'https://api.doggyfi.xyz/' });
const PHRASE = 'YOUR SEED PHRASE HERE';
const yourAddress = 'YOUR ADDRESS HERE';
const yourAddressAccount = 0; // assumes you are using m/44'/3'/0'/0/0, if you are using a different derivation path, you will need to change this.
const sendAddress = 'AN ADDRESS YOU WANT TO SEND TO';

async function main() {
  // get unspents (NOTE YOU MAY NEED TO PAGINATE, LOOK AT UNSPENTS.UNSPENTS.NEXT_CURSOR)
  let unspents = await APIclient.unspents.retrieve(yourAddress);
  // make sure is not error type
  if ('error' in unspents) {
    throw new Error(JSON.stringify(unspents));
  }

  // Obsviously you might want to filter differently than this...(purely for example purposes)
  if (unspents.unspents[0] === undefined) {
    throw new Error('No unspents found');
  }
  const filteredUnspents = [unspents.unspents[0]];
  const value = unspents.unspents[0].value;

  // fee rate based on inputs and outputs
  const feeRate = await APIclient.feeRate.retrieve();
  const txFee = DoggyfiSDK.getTxFee(filteredUnspents.length, 2, feeRate.feeRate);

  if (txFee > Number(value)) {
    throw new Error('Not enough funds to send tx');
  }

  // build params needed for buildTX
  const params: DoggyfiSDK.Tx.TxBuildParams = {
    inputs: filteredUnspents.map((unspent) => {
      return {
        txid: unspent.hash,
        vout: unspent.vout_index,
      };
    }),
    outputs: [
      {
        address: sendAddress,
        satoshis: 100_000,
      },
      {
        address: yourAddress,
        satoshis: Number(value) - txFee,
      },
    ],
  };

  // build tx
  const tx = await APIclient.tx.build({
    ...params,
  });

  // check if tx is error type
  if ('error' in tx) {
    throw Error(JSON.stringify(tx.error));
  }

  // makes wif on dogecoin network
  const walletWif = await DoggyfiSDK.makeWif(PHRASE, yourAddressAccount);

  // sign tx
  const signedTx = await DoggyfiSDK.signerTXAndSign(ECPair, tx.psbtHex, walletWif);
  console.log(signedTx);
  // push tx
  // I have commented this out in the example, if you actually intend to push, uncomment this.
  // const pushedTx = await APIclient.tx.push(signedTx);
  // console.log(pushedTx);
}

// @ts-ignore
await main();
