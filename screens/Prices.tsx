import * as React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';

import { Text, View } from '../components/Themed';
import { useGatewayContext } from '../context/GatewayContext';
import CoinIcon from '../components/CoinIcon';
import { formatCurrency } from '../utils/stringFormatter';
import Colors from '../constants/Colors';
import CommonStyles from '../constants/CommonStyles';
import ChangePercent from '../components/ChangePercent';

export default function Prices() {
  const { assets, openExplorer } = useGatewayContext();

  return (
    <FlatList<ICryptoAssets>
      data={assets}
      style={styles.container}
      keyExtractor={({ id }, index) => `${id}-${index}`}
      renderItem={({ item }) => {
        const { name, symbol, priceUsd, changePercent24Hr, explorer } = item;
        return (
          <Pressable
            onPress={() => openExplorer(explorer)}
            style={styles.pressable}>
            <CoinIcon symbol={symbol} />
            <View style={CommonStyles.flexOneRow}>
              <Text>{name}</Text>
              <Text style={CommonStyles.darkText}>{symbol}</Text>
            </View>
            <View style={CommonStyles.flexEnd}>
              <Text>{formatCurrency(priceUsd)}</Text>
              <ChangePercent rate={changePercent24Hr} />
            </View>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
});
