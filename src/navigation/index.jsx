import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopNavigator from './shop';
import { styles } from '../screens/categories/styles';

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <ShopNavigator style={styles.container}/>
    </NavigationContainer>
  );
};

export default AppNavigator;