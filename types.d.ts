/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

type BottomTabParamList = {
  Prices: undefined;
  Home: undefined;
};

type PriceStackParamList = {
  PriceScreen: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
};

interface ICryptoAssets {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
