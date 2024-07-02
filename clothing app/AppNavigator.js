import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="ProductList"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ProductList') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Checkout') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false, title: 'Checkout' }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
