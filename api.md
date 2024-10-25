# Unspents

Types:

- <code><a href="./src/resources/unspents.ts">UnspentRetrieveResponse</a></code>

Methods:

- <code title="get /unspents/{address}">client.unspents.<a href="./src/resources/unspents.ts">retrieve</a>(address, { ...params }) -> UnspentRetrieveResponse</code>

# Tx

Types:

- <code><a href="./src/resources/tx.ts">TxRetrieveResponse</a></code>
- <code><a href="./src/resources/tx.ts">TxBuildResponse</a></code>
- <code><a href="./src/resources/tx.ts">TxPushResponse</a></code>
- <code><a href="./src/resources/tx.ts">TxSendDogeResponse</a></code>

Methods:

- <code title="get /tx/{hash}">client.tx.<a href="./src/resources/tx.ts">retrieve</a>(hash) -> TxRetrieveResponse</code>
- <code title="post /tx/build">client.tx.<a href="./src/resources/tx.ts">build</a>({ ...params }) -> TxBuildResponse</code>
- <code title="post /tx/push">client.tx.<a href="./src/resources/tx.ts">push</a>() -> TxPushResponse</code>
- <code title="post /tx/send/doge">client.tx.<a href="./src/resources/tx.ts">sendDoge</a>({ ...params }) -> TxSendDogeResponse</code>

# Drc

## Balances

Types:

- <code><a href="./src/resources/drc/balances.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /drc/balances/{address}">client.drc.balances.<a href="./src/resources/drc/balances.ts">retrieve</a>(address) -> BalanceRetrieveResponse</code>

## Info

Types:

- <code><a href="./src/resources/drc/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /drc/info/{ticker}">client.drc.info.<a href="./src/resources/drc/info.ts">retrieve</a>(ticker) -> InfoRetrieveResponse</code>

# Dunes

Types:

- <code><a href="./src/resources/dunes/dunes.ts">DuneSendResponse</a></code>

Methods:

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

Types:

- <code><a href="./src/resources/blocks.ts">BlockCountResponse</a></code>

Methods:

- <code title="get /blocks/count">client.blocks.<a href="./src/resources/blocks.ts">count</a>() -> BlockCountResponse</code>

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
