// example of building a transaction and pushing it.
// NEVER USE THIS IN PRODUCTION, YOU SHOULD NEVER STORE A SEED PHRASE IN A REAL APP.
// YOU SHOULD SECURLY PASS THE SEED PHRASE FROM THE WALLET DIRECTLY.
import DoggyfiSDK from 'doggyfi-sdk'; // note this is meant to be run in an enviroment where you install doggyfi-sdk in node modules...

const APIclient = new DoggyfiSDK({ baseURL: 'https://api.doggyfi.xyz/' });
const PHRASE = '12 OR 24 WORD SEED PHRASE';
const accountPath = 1;

async function main() {
  const wif = await APIclient.wifGenerator(PHRASE, `m/44'/3'/0'/0/${accountPath}`); // get account on default path
  const address = APIclient.getAddress(wif.privkey);
  console.log('The address I got for you is', address);

  let unspents = await APIclient.unspents.retrieve(address);
  // make sure is not error type
  if ('error' in unspents) {
    throw new Error(JSON.stringify(unspents));
  }

  console.log(unspents.unspents);
  const totalValue = unspents.unspents.reduce((acc: number, curr: (typeof unspents.unspents)[0]) => {
    return acc + Number(curr.value);
  }, 0);

  console.log('Total Value:', totalValue);

  // fee rate based on inputs and outputs
  const feeRate = await APIclient.feeRate.retrieve();

  const txFee = APIclient.getTxFee(unspents.unspents.length, 2, feeRate.feeRate); // can also access with getTxFee

  if (txFee > totalValue) {
    throw new Error('Not enough funds to send tx');
  }

  // build params needed for buildTX
  const params: DoggyfiSDK.Tx.TxBuildParams = {
    inputs: unspents.unspents.map((unspent: (typeof unspents.unspents)[0]) => {
      return {
        txid: unspent.hash,
        vout: unspent.vout_index,
      };
    }),
    outputs: [
      {
        address: address,
        satoshis: Number(totalValue) - txFee,
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

  // sign tx (note our default tx builder for sending doge returns base64, so last arg is true)
  const signedTx = await APIclient.signer(tx.psbtBase64, wif.privkey, true);
  console.log('The signed tx is: ', signedTx);
  // push tx
  // I have commented this out in the example, if you actually intend to push, uncomment this.
  // const pushedTx = await APIclient.tx.push(signedTx);
  // console.log('The pushed hash is: ', pushedTx);
}

// @ts-ignore
await main();
