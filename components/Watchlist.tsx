import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { Text } from '../components/Themed';
import CommonStyles from '../constants/CommonStyles';
import { useGatewayContext } from '../context/GatewayContext';
import { formatCurrency } from '../utils/stringFormatter';
import ChangePercent from './ChangePercent';
import CoinIcon from './CoinIcon';
import TitleText from './TitleText';

const Watchlist = () => {
  const { assets } = useGatewayContext();
  const [watchList, setWatchlist] = React.useState(assets);

  React.useEffect(() => {
    return setWatchlist(assets);
  }, [assets]);

  const renderItem: ListRenderItem<ICryptoAssets> = React.useCallback(
    ({ item }) => {
      const { name, symbol, changePercent24Hr, priceUsd } = item;

      return (
        <View style={styles.listItem}>
          <CoinIcon symbol={symbol} />
          <View style={styles.coinWrapper}>
            <Text>{name}</Text>
            <Text style={CommonStyles.darkText}> {symbol}</Text>
          </View>
          <View style={CommonStyles.flexEnd}>
            <Text>{formatCurrency(priceUsd)}</Text>
            <ChangePercent rate={changePercent24Hr} />
          </View>
        </View>
      );
    },
    [watchList]
  );

  return (
    <View style={styles.container}>
      <TitleText title="Watchlist" paddingHorizontal={0} />

      <FlatList<ICryptoAssets>
        style={styles.watchlistContainer}
        data={watchList?.slice(0, 2) ?? []}
        renderItem={renderItem}
        keyExtractor={(_, index) => `${index}`}
        extraData={assets}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 15, paddingHorizontal: 25 },
  watchlistContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    borderColor: '#DBE0E4',
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  coinWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default Watchlist;
