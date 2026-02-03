import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';

import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isLoggedIn, isBootstrapping } = useAuth();

if (isBootstrapping) {
    // JS is resolving auth state
    // Native launch screen is already visible
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainTabs" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
