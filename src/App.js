import { Categories, Product, Products } from './screens';

import { useFonts } from 'expo-font';

export default function App() {
const [loaded] = useFonts ({
  'OpenSans-Regular':require('../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold':require('../assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans-Italic':require('../assets/fonts/OpensSans-Italic.ttf'),
});
 return <Categories />;
}
