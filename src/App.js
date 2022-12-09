import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Categories, Product, Products } from './screens';

import { useFonts } from 'expo-font';

export default function App() {
const [loaded] = useFonts ({
  'OpenSans-Regular':require('../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold':require('../assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans-Italic':require('../assets/fonts/OpenSans-Italic.ttf'),
});

if (!loaded) {
  return (
    <View style = {styles.container}>
      <ActivityIndicator color= '#c6e377'size='large' />
      
    </View>
)}


 return <Categories />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
