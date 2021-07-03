import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../components/Themed';

interface IComponentProps {
  label: string;
}

const Button = ({ label }: IComponentProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B46E4',
    marginHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 8,
  },
  label: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Button;
