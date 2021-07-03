import * as React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  ListRenderItem,
} from 'react-native';
import Button from '../components/Button';

import { Text } from '../components/Themed';
import TopMovers from '../components/TopMovers';
import Watchlist from '../components/Watchlist';
import LottieView from 'lottie-react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import NewsThumbnail from '../components/NewsThumbnail';
import CommonStyles from '../constants/CommonStyles';
import { useGatewayContext } from '../context/GatewayContext';
import { apiKey, baseUrl, endpoint, queryOptions } from '../constants/Config';

dayjs.extend(relativeTime);

export default function Home() {
  const { openExplorer } = useGatewayContext();
  const [news, setNews] = React.useState<INews[]>([]);

  const getNews = async () => {
    const { sortBy, limit, search } = queryOptions;

    const response = await fetch(
      `${baseUrl}/${endpoint}?q=${search}&pageSize=${limit}&sortBy=${sortBy}&apiKey=${apiKey}`
    );
    const { articles } = await response.json();
    setNews(articles as INews[]);
  };

  React.useEffect(() => {
    getNews();
  }, []);

  const renderItem: ListRenderItem<INews> = React.useCallback(
    ({ item }) => {
      const { title, source, publishedAt, url, urlToImage } = item;
      return (
        <Pressable
          onPress={() => openExplorer(url)}
          style={styles.newsContainer}>
          <View style={CommonStyles.flexOne}>
            <Text style={CommonStyles.darkText}>
              {`${source.name} • ${dayjs(publishedAt).fromNow()}`}
            </Text>
            <Text style={styles.newsTitle}>{title}</Text>
          </View>
          <NewsThumbnail uri={urlToImage} />
        </Pressable>
      );
    },
    [news]
  );

  return (
    <FlatList<INews>
      data={news}
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
          <TitleText title="News" />
        </React.Fragment>
      }
      keyExtractor={(_, index) => `${index}`}
      renderItem={renderItem}
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
  newsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  newsTitle: { marginTop: 5, fontSize: 18 },
});
