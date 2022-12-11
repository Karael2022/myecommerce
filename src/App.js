import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
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
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});