import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        width: 65,
        height: 65,
    },
    rightContainer: {
        justifyContent: 'space-around',
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: '300',
    },
    artist: {
        color: 'lightgrey',
        fontSize: 14,
    },
})

export default styles;