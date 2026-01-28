import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  price: string;
};

const ProductCard = ({ title, price }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#38bdf8',
  },
});

export default ProductCard;
