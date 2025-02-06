// helper function to derive address
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { ECPairFactory, ECPairInterface } from 'ecpair';
import { createSigner } from './signer';
import { mnemonicToSeed } from 'bip39';
import { BIP32Factory } from 'bip32';
const bip32 = BIP32Factory(ecc);

// "dogecoinNetwork" must be a properly-defined Network object for Dogecoin.
const dogecoinNetwork: bitcoin.Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: '', // Dogecoin does not officially use bech32 yet
  bip32: {
    public: 0x02facafd, // You may adjust if your wallet variation differs
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e, // 30 in decimal, Dogecoin 'D' addresses
  scriptHash: 0x16, // 22 in decimal, Dogecoin '9' addresses
  wif: 0x9e, // 158 in decimal
};

const ECPair = ECPairFactory(ecc);

export function getAddress(wif: string, _network: bitcoin.Network = dogecoinNetwork): string {
  const ecpairInt: ECPairInterface = createSigner(wif);
  const { address } = bitcoin.payments.p2pkh({
    pubkey: ecpairInt.publicKey,
    network: _network,
  });
  if (address) {
    return address;
  }
  throw Error('Failed to derive address!');
}

/**
 * Can derive a custom wif along a specific derivation path.
 * @param mnu: seed phrase mneumonic (either 12 or 24 words)
 * @param path: path to derive account (default is m/44'/3'/0'/0/0)
 */
export const makeWif = async (
  mnu: string,
  path: string = "m/44'/3'/0'/0/0",
  network: bitcoin.Network = dogecoinNetwork,
) => {
  // Convert mnemonic to seed
  const seed = await mnemonicToSeed(mnu);

  // Derive a master node from the seed for Dogecoin
  // Dogecoin's BIP44 coin type is 3
  const masterNode = bip32.fromSeed(seed);

  // Derive a child node using BIP-44 derivation path for Dogecoin
  const childNode = masterNode.derivePath(path);

  // Get the private key in WIF format for Dogecoin
  // Dogecoin uses different version bytes for WIF
  const wif = ECPair.fromPrivateKey(Buffer.from(childNode.privateKey!), { network }).toWIF();
  const address = bitcoin.payments.p2pkh({ pubkey: childNode.publicKey, network }).address;

  if (!address) throw new Error('No address found');

  return { path, address, privkey: wif };
};
