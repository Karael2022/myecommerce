import { Button, Text, View } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
import React from 'react';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const {categoryId, name} = route.params;
  console.warn('categoryId', categoryId, 'title', title);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product"
        color={COLORS.primaryDark}
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
};
export default Products;