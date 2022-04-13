export const fetchAsset = jest.fn(() => {
  return Promise.resolve({
    changePercent24Hr: '2',
    explorer: '',
    id: '1',
    marketCapUsd: '4543000000000',
    maxSupply: '1000000000000000',
    name: 'Ethereum',
    priceUsd: '4543',
    rank: '1',
    supply: '100352536253',
    symbol: 'ETH',
    volumeUsd24Hr: '5325235',
    vwap24Hr: '23523623',
  });
});
