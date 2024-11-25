// helper function to make a WIF from a private key
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as ecc from 'tiny-secp256k1';

// Dogecoin network parameters
const dogecoinNetwork = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'dogecoin',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};

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
  const root = bip32.BIP32Factory(ecc).fromSeed(seed, dogecoinNetwork); // ts-ignore

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
