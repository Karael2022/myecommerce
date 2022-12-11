import { Categories, Product, Products } from '../screens';

import { COLORS } from '../constants/themes/colors';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? COLORS.backgroundDark : COLORS.backgroundLight,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
        },
        presentation: 'card',
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
export default ShopNavigator;