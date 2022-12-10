import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Categories, Product, Products } from './screens';

import AppNavigator from './navigation';
import React from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts ({
    'NotoSerif-Regular':require('../assets/fonts/NotoSerif-Regular.ttf'),
    'NotoSerif-Bold':require('../assets/fonts/NotoSerif-Bold.ttf'),
    'NotoSerif-Italic':require('../assets/fonts/NotoSerif-Italic.ttf'),
    'OpenSans-Regular':require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold':require('../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Italic':require('../assets/fonts/OpenSans-Italic.ttf'),
  });

  if (!loaded) {
    return (
      <View style = {styles.container}>
        <ActivityIndicator color = '#30475e'size='large' />
      </View>
    );
  }
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});