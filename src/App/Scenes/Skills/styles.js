import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Common/Constants/Colors';
const win = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        width: win.width,
        height: win.height,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    skill_holder_container: {
        backgroundColor: "#121212",
        height: '76%',
        width: '18%',
        borderRadius: 24,
        justifyContent: 'space-around'
    },

    inner_container: {
        height: '20%',
        width: '100%',
        backgroundColor: "#403F3F",
        borderRadius: 16,
        marginLeft: 100,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text_style: {
        fontWeight: "bold", 
        fontSize: 25, 
        color: "#fff" 
    },
    rating_style:{
        color: "#D0D0D0", 
        fontSize: 12
    }
});

export default styles
