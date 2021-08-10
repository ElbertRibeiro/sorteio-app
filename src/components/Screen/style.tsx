import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
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
        marginTop: 50,
        marginBottom: 50
    },
    boxButton: {
        width: 200,
        marginTop: 20
    },
    number: {
        fontSize: 50,
        color: '#fff'
    },
    lineInput: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10
    },
    inputFocus: {
        borderWidth: 1,
        borderColor: '#1f4f66',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    },  
    inputNormal: {
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    }
});
