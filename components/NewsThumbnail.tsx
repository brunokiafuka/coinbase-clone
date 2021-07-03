import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

interface IComponentProps {
  uri: string;
}

const NewsThumbnail = ({ uri }: IComponentProps) => {
  return (
    <Image
      source={{
        uri,
      }}
      style={styles.image}
    />
  );
};

export default NewsThumbnail;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    backgroundColor: Colors.darkText,
    borderRadius: 8,
    marginLeft: 10,
  },
});
