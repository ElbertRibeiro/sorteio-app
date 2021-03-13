import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    screen: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginVertical: 30,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    boxNumber: {
        borderColor: '#13b0c5',
        backgroundColor: '#13b0c5',
        borderWidth: 5,
        height: 150,
        width: 150,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    boxButton: {
        width: 200
    },
    number: {
        fontSize: 80,
        color: '#fff'
    }
});

export default style;