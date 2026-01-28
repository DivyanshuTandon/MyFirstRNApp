import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const ProductListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🛒 Products</Text>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard title={item.title} price={item.price} />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#38bdf8',
    padding: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
});

export default ProductListScreen;
