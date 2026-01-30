import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Cube, User } from 'phosphor-react-native';

import HomeScreen from '../screens/tabs/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

export type TabParamList = {
  Home: undefined;
  Products: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <House size={size} color={color} weight={focused ? 'fill' : 'regular'} />;
          }

          if (route.name === 'Products') {
            return <Cube size={size} color={color} weight={focused ? 'fill' : 'regular'} />;
          }

          if (route.name === 'Profile') {
            return <User size={size} color={color} weight={focused ? 'fill' : 'regular'} />;
          }

          return null;
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
