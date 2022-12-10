import { Button, Text, View } from 'react-native';

import React from 'react';
import { colors } from '../../constants/themes/colores';
import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product"
        color={colors.primaryDark}
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
};
export default Products;