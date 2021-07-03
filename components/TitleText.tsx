import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../components/Themed';

interface IComponentProps {
  title: string;
  paddingHorizontal?: number;
}

const TitleText = ({ title, paddingHorizontal = 25 }: IComponentProps) => {
  return <Text style={[styles.default, { paddingHorizontal }]}>{title}</Text>;
};

const styles = StyleSheet.create({
  default: { fontSize: 20, fontWeight: 'bold' },
});

export default TitleText;
