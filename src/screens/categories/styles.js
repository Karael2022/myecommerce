import { StyleSheet } from 'react-native';
import { colores } from '../../constants/themes/colores';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '3fbac2',
    },
    
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: colores.textLight,
    },
  
}); 