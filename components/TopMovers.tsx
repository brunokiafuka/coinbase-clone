import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import CommonStyles from '../constants/CommonStyles';
import { useGatewayContext } from '../context/GatewayContext';
import { formatCurrency } from '../utils/stringFormatter';
import ChangePercent from './ChangePercent';
import CoinIcon from './CoinIcon';
import { Text } from './Themed';
import TitleText from './TitleText';

const TopMovers = () => {
  const { assets } = useGatewayContext();
  const [topMovers, setTopMovers] = React.useState(assets);

  React.useEffect(() => {
    return setTopMovers(assets);
  }, [assets]);

  const renderItem: ListRenderItem<ICryptoAssets> = React.useCallback(
    ({ item }) => {
      const { symbol, changePercent24Hr, priceUsd } = item;
      return (
        <View style={styles.listItem}>
          <CoinIcon symbol={symbol} />
          <View style={styles.coinWrapper}>
            <Text style={CommonStyles.flexOneRow}>{symbol}</Text>
            <Text>{formatCurrency(priceUsd)}</Text>
          </View>

          <ChangePercent rate={changePercent24Hr} />
        </View>
      );
    },
    [topMovers]
  );

  return (
    <View style={styles.container}>
      <TitleText title="Top Movers" />

      <FlatList<ICryptoAssets>
        contentContainerStyle={styles.watchlistContainer}
        data={topMovers?.slice(0, 5).reverse() ?? []}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => `${index}`}
        extraData={assets}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 15 },
  watchlistContainer: {
    padding: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
  },
  listItem: {
    padding: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DBE0E4',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  coinWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
});

export default TopMovers;
