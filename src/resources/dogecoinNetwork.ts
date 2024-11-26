/* eslint:disable */
/**
 * Dogecoin network parameters
 */
export const dogecoinNetwork = {
  messagePrefix: '\x18Dogecoin Signed Message:\n',
  bech32: 'dog',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};
