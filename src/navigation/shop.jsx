import { Categories, Product, Products } from '../screens';

import { COLORS } from '../constants/themes/colors';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#d3d4d8',
      },
      headerTintColor: COLORS.text,
      headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    }}>
      <Stack.Screen name="Categories" component={Categories} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;