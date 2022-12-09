import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Shop from './shop';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Shop />
    </NavigationContainer>
  );
};

export default AppNavigator;