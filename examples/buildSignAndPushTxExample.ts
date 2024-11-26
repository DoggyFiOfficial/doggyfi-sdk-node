// example of building a transaction and pushing it.
// NEVER USE THIS IN PRODUCTION, YOU SHOULD NEVER STORE A SEED PHRASE IN A REAL APP.
// YOU SHOULD SECURLY PASS THE SEED PHRASE FROM THE WALLET DIRECTLY.
import ECPairFactory from 'ecpair';
import DoggyfiSDK from 'doggyfi-sdk';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);
const APIclient = new DoggyfiSDK({ baseURL: 'https://api.doggyfi.xyz/' });
const PHRASE = 'YOUR SEED PHRASE HERE';
const yourAddress = 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM';
const yourAddressAccount = 0; // assumes you are using m/44'/3'/0'/0/0, if you are using a different derivation path, you will need to change this.
const sendAddress = 'D83XzHiEEjHYfozYUH8D8jP6ef6G9Bw6HM';

/**
* Generate a wif (private key) from a mnemonic phrase and account number for dogecoin.
By default, this is on m/44'/3'/0'/0/0, but can be changed by passing in a derivation path.
If account number is provided but derivation path is not, will default to m/44'/3'/0'/0/accountNumber.
If derivation path is provided, will use first 4 numbers from path, and `account` number at end.
* @param mnemonicPhrase -- 12 or 24 word seed phrase
* @param account -- Account number > 0
* @returns -- A private key in WIF format for the given account on the Dogecoin network.
*/
export async function makeWif(
  mnemonicPhrase: string,
  account: number = 0,
  derivationPath: number[] | null = null,
) {
  // derivation path must be an array of 4 non-negative integers
  if (derivationPath && derivationPath.length !== 4) {
    throw new Error('Invalid derivation path');
  }

  // if account number is < 0 return error
  if (account < 0) {
    throw new Error(`Invalid account number ${account}`);
  }

  // if account cointains decimals throw error
  if (account % 1 !== 0) {
    throw new Error(`Invalid account number ${account}`);
  }

  // if number of words is not 12 or 24 throw error
  if (mnemonicPhrase.split(' ').length !== 12 && mnemonicPhrase.split(' ').length !== 24) {
    throw new Error('Invalid mnemonic phrase');
  }

  // if length of any word is < 4 throw error
  if (mnemonicPhrase.split(' ').some((word) => word.length < 4)) {
    throw new Error('Invalid mnemonic phrase');
  }

  // Generate a seed from the mnemonic
  const seed = await bip39.mnemonicToSeed(mnemonicPhrase);

  // Create an HD node from the seed using Dogecoin network parameters
  const root = bip32.BIP32Factory(ecc).fromSeed(seed, DoggyfiSDK.dogecoinNetwork);

  // Derive the child key using Dogecoin's BIP44 path
  let path = '';
  if (derivationPath) {
    path = derivationPath.join('/');
  } else {
    path = `m/44'/3'/0'/0/${account}`;
  }
  const child = root.derivePath(path);

  // Get the Wallet Import Format (WIF) private key
  const wif = child.toWIF();

  return wif;
}

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
    outputs: [
      {
        address: sendAddress,
        satoshis: 100_000,
      },
    ],
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
