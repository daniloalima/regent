import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Welcome from "../pages/welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/home";
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const userInfo = React.useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}