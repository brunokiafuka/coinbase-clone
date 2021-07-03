import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

interface IComponentProps {
  symbol: string;
}

const CoinIcon = ({ symbol }: IComponentProps) => {
  return (
    <Image
      source={{
        uri: `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/30`,
      }}
      style={styles.image}
    />
  );
};

export default CoinIcon;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    backgroundColor: Colors.darkText,
    borderRadius: 15,
  },
});
