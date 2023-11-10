import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require("../../assets/MDL_color.png")}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>A maior comunidade de RPG do Brasil</Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14003e',

    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#14003e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#8f8f8f',
        marginTop: 20,
        marginBottom: 20,
    },

    button: {
        position: 'absolute',
        backgroundColor: '#14003e',
        borderRadius: 50,
        paddingVertical: 10,
        width: '50%',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        alignContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})