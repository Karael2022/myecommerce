import { COLORS } from '../../constants/themes/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { isAndroid } from '../../utils';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d4d8',
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 25,
        color: '#000000',
    },
    containerList: {
        flex: 1,
    },    
  
}); 