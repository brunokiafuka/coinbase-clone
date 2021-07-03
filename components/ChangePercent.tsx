import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface IComponentProps {
  rate: string;
}

const ChangePercent = ({ rate }: IComponentProps) => {
  return (
    <Text
      style={{
        color: Number(rate) > 0 ? 'green' : '#e31414',
      }}>
      {`${Number(rate).toFixed(2)}%`}
    </Text>
  );
};

export default ChangePercent;

const styles = StyleSheet.create({});
