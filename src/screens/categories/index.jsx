import { Button, Text, View } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
import React from 'react';
import { styles } from './styles';

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button
        title="Go to Products"
        color={COLORS.primaryDark}
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default Categories;
