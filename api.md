# Unspents

Types:

- <code><a href="./src/resources/unspents.ts">UnspentRetrieveResponse</a></code>

Methods:

- <code title="get /unspents/{address}">client.unspents.<a href="./src/resources/unspents.ts">retrieve</a>(address, { ...params }) -> UnspentRetrieveResponse</code>

# Tx

Types:

- <code><a href="./src/resources/tx/tx.ts">TxRetrieveResponse</a></code>
- <code><a href="./src/resources/tx/tx.ts">TxBuildResponse</a></code>
- <code><a href="./src/resources/tx/tx.ts">TxPushResponse</a></code>

Methods:

- <code title="get /tx/{hash}">client.tx.<a href="./src/resources/tx/tx.ts">retrieve</a>(hash) -> TxRetrieveResponse</code>
- <code title="post /tx/build">client.tx.<a href="./src/resources/tx/tx.ts">build</a>({ ...params }) -> TxBuildResponse</code>
- <code title="post /tx/push">client.tx.<a href="./src/resources/tx/tx.ts">push</a>({ ...params }) -> TxPushResponse</code>

## Psbt

# Drc

## Balances

## Info

# Dunes

Types:

- <code><a href="./src/resources/dunes/dunes.ts">DuneMintResponse</a></code>
- <code><a href="./src/resources/dunes/dunes.ts">DuneOpenResponse</a></code>
- <code><a href="./src/resources/dunes/dunes.ts">DuneSendResponse</a></code>

Methods:

- <code title="post /dunes/mint">client.dunes.<a href="./src/resources/dunes/dunes.ts">mint</a>({ ...params }) -> DuneMintResponse</code>
- <code title="post /dunes/open">client.dunes.<a href="./src/resources/dunes/dunes.ts">open</a>({ ...params }) -> DuneOpenResponse</code>
- <code title="post /dunes/send">client.dunes.<a href="./src/resources/dunes/dunes.ts">send</a>({ ...params }) -> DuneSendResponse</code>

## Balances

Types:

- <code><a href="./src/resources/dunes/balances.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /dunes/balances/{address}">client.dunes.balances.<a href="./src/resources/dunes/balances.ts">retrieve</a>(address) -> BalanceRetrieveResponse</code>

## Info

Types:

- <code><a href="./src/resources/dunes/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /dunes/info/{duneId}">client.dunes.info.<a href="./src/resources/dunes/info.ts">retrieve</a>(duneId) -> InfoRetrieveResponse</code>

## Utxos

Types:

- <code><a href="./src/resources/dunes/utxos.ts">UtxoRetrieveResponse</a></code>

Methods:

- <code title="get /dunes/utxos/{duneId}">client.dunes.utxos.<a href="./src/resources/dunes/utxos.ts">retrieve</a>(duneId, { ...params }) -> UtxoRetrieveResponse</code>

# Blocks

# FeeRate

Types:

- <code><a href="./src/resources/fee-rate.ts">FeeRateRetrieveResponse</a></code>

Methods:

- <code title="get /feeRate">client.feeRate.<a href="./src/resources/fee-rate.ts">retrieve</a>() -> FeeRateRetrieveResponse</code>

# Tips

Types:

- <code><a href="./src/resources/tips.ts">TipRetrieveResponse</a></code>

Methods:

- <code title="get /tip">client.tips.<a href="./src/resources/tips.ts">retrieve</a>() -> TipRetrieveResponse</code>

# Prices
