import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { House, ShoppingBag, User } from 'phosphor-react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.card}>
          <House size={28} color="#2563eb" weight="fill" />
          <Text style={styles.cardTitle}>Welcome Back</Text>
          <Text style={styles.cardText}>
            You are successfully logged in. Explore the app using tabs below.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <ShoppingBag size={24} color="#10b981" />
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>

          <View style={styles.statCard}>
            <User size={24} color="#6366f1" />
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#111827',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    color: '#111827',
  },
  cardText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
});

export default HomeScreen;
