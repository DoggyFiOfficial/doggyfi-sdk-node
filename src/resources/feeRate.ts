// same fee rate math as doggyfi's snap as of v0.1.6...
/**
 * Get the fee for a transactions.
 * @param psbt -- bitcoinjs-lib psbt.
 * @param feePerByte -- koinu/byte.
 * @returns -- fee in koinu.
 */
export function getTxFee(inputsCount: number, outputsCount: number, feePerByte?: number): number {
  const numInputs = inputsCount;
  const numOutputs = outputsCount + 3;
  const size = 10 + numInputs * 148 + numOutputs * 34;
  return size * Math.max(feePerByte || 100_000, 50_000);
}
