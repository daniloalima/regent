import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

async function GoHome(username, password) {
    const {userInfo, login} = React.useContext(AuthContext);
    const navigation = useNavigation();
    await login(username, password);
    if (userInfo.access_token) {
        return true;
    }
    else {
        return false;
    }
}

export default function SignIn() {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {userInfo, login} = React.useContext(AuthContext);
    const navigation = useNavigation();

    const GoHome = async(user, password) => {
        user_data = await login(user, password);
        console.log(user_data);
        if (user_data.access_token) {
            navigation.navigate("Home");
        }
        else {
            alert('Erro: usuário ou senha estão incorretos.');
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Sign In</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>
                <Text style={styles.title}>Usuário</Text>
                <TextInput
                    value={user}
                    style={styles.input}
                    placeholder="Digite seu usuário..."
                    autoCorrect={false}
                    onChangeText={(user) => setUser(user)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Digite sua senha..."
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                <TouchableOpacity
                    onPress={() => GoHome(user, password)}
                    //onPress={ userInfo.access_token ? () => navigation.navigate("Home") : () => {login(user, password); userInfo.access_token ? navigation.navigate("Home") : null }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.textProblem}>Problemas para acessar? Procure algum adm no Whatsapp ou Discord</Text>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14003e',
    },
    containerHeader: {
        marginTop: '15%',
        marginBottom: '10%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
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
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        height: 60,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: '6%',
        marginBottom: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#14003e',
        borderRadius: 50,
        paddingVertical: 10,
        marginTop: '10%',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textProblem: {
        fontSize: 16,
        color: '#8f8f8f',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
});