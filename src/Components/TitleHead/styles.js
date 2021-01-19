import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Common/Constants/Colors';
const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: win.width
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        color: Colors.darkBlack,
    },
    subheader: {
        fontSize: 24,
        color: Colors.fontGrey,
    },
    align_right: {
        textAlign: 'right',
        marginRight: 20
    },
    align_left: {
        textAlign: 'left',
        marginLeft: 20
    }
});

export default styles
