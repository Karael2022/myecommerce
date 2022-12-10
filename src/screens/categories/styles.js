import { COLORS } from '../../constants/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d4d8',
    },
    
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: COLORS.textLight,
    },
  
}); 