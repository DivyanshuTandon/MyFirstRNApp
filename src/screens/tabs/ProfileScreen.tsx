import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { UserCircle, Envelope, SignOut } from 'phosphor-react-native';
import { useAuth } from '../../hooks/useAuth';

const ProfileScreen = () => {
  const { logout, user } = useAuth();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <UserCircle size={96} color="#2563eb" weight="duotone" />

        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.role}>{user?.email}</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <SignOut size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f8fafc' },
  container: { flex: 1, alignItems: 'center', padding: 24 },
  name: { fontSize: 22, fontWeight: '700', marginTop: 12 },
  role: { fontSize: 14, color: '#6b7280', marginBottom: 24 },
  logoutButton: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#ef4444',
    padding: 12,
    borderRadius: 8,
  },
  logoutText: { color: '#fff', fontWeight: '600' },
});

export default ProfileScreen;
