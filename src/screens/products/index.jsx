import { COLORS } from '../../constants/themes/colors';
import { FlatList } from 'react-native';
import { PRODUCTS } from '../../constants/data/index';
import { ProductItem } from '../../components';
import React from 'react';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, color } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

  console.warn('filteredProducts', filteredProducts);
  const onSelected = (item) => {
    navigation.navigate('Product', { title: item.title, productId: item.id });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={color} />
  );
  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Products;