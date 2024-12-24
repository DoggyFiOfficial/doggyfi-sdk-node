import { ECPairAPI, ECPairInterface } from 'ecpair';
import * as bitcoin from 'bitcoinjs-lib';

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

// signer method for tx
/**
 * Create a signer from a given ECPair and walletWif.
 * @param ECPair -- An ECPair object that implements the ECPairAPI.
 * @param txHex -- base64 string that represents a transaction.
 * @param walletWif -- WIF string that represents a private key.
 * @returns
 */
export async function signerTXAndSign(
  ECPair: ECPairAPI,
  txString: string,
  walletWif: string,
  txStringIsBase64: boolean = true,
): Promise<String> {
  try {
    const signingWallet = createSigner(ECPair, walletWif);

    if ('error' in signingWallet) {
      throw Error(`Failed to create signer from WIF: ${signingWallet.error}`);
    }

    if (!txString || txString.length === 0) {
      throw Error(`Invalid transaction ${txString}`);
    }

    let psbt: bitcoin.Psbt;
    if (txStringIsBase64) {
      psbt = bitcoin.Psbt.fromBase64(txString, {
        network: dogecoinNetwork,
      });
    } else {
      psbt = bitcoin.Psbt.fromHex(txString, {
        network: dogecoinNetwork,
      });
    }

    const signedTxHex = psbt.signAllInputs(signingWallet);

    const finalizedTxHex = signedTxHex.finalizeAllInputs().extractTransaction(true).toHex();

    return finalizedTxHex;
  } catch (error: unknown) {
    throw Error(`Failed to sign transaction: ${error}`);
  }
}

/**
 * Create an ECPair from a WIF string using the ECPairFactory and tiny-secp256k1 on the dogecoin network.
 * @param ECPair
 * @param wifString
 * @returns
 */
function createSigner(ECPair: ECPairAPI, wifString: string): ECPairInterface {
  try {
    const keyPair = ECPair.fromWIF(wifString, dogecoinNetwork);
    return keyPair;
  } catch (error: unknown) {
    throw Error(`Failed to create signer from WIF: ${error}`);
  }
}
