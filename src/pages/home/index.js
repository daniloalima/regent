import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    return (
        <View style={styles.containter}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={400}
                    animation="fadeInDown"
                    source={require("../../assets/MDL_color.png")}
                    style={{ width: '50%' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerHeader}>
                <Text style={styles.title}>Seja bem vindo, aventureiro.</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.message}>Que tipo de funcionalidade você quer ver aqui?</Text>
                <Text style={styles.items}>• Quero mesas, quero ver todas as mesas disponiveis!</Text>
                <Text style={styles.items}>• Quero gerenciar usuários, bloquear acesso do app, etc.</Text>
                <Text style={styles.items}>• Quero ver conteúdos maneiros de RPG apenas.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#14003e',
    },
    containerHeader: {
        flex: 1,
        backgroundColor: '#14003e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#14003e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 8,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: "10%",
        marginBottom: "10%",
    },
    items: {
        fontSize: 16,
        color: '#8f8f8f',
        marginTop: "10%",
        marginBottom: "10%",
    }
});