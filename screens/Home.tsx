import * as React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import Button from '../components/Button';

import { Text } from '../components/Themed';
import TopMovers from '../components/TopMovers';
import Watchlist from '../components/Watchlist';
import LottieView from 'lottie-react-native';
import Colors from '../constants/Colors';

export default function Home() {
  return (
    <FlatList
      data={[]}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <React.Fragment>
          <View style={{ alignItems: 'center' }}>
            <LottieView
              autoPlay
              style={styles.lottieDimensions}
              source={require('../assets/animations/wallet.json')}
            />

            <View style={styles.heroContainer}>
              <Text style={styles.welcomeText}>Welcome to Coin clone!</Text>
              <Text style={styles.subTitle}>Make you investment today</Text>
            </View>
          </View>
          <Button label="Receive crypto" />

          <Watchlist />
          <TopMovers />
        </React.Fragment>
      }
      renderItem={null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  lottieDimensions: {
    width: 250,
    height: 250,
  },
  welcomeText: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  subTitle: { color: Colors.darkText, fontSize: 16 },
  heroContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
  },
});
