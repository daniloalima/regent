import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userInfo, setUser_info] = useState({});

    const login = async (user, password) => {
        console.log(user, password)

        try {
            const response = await axios.post(`${BASE_URL}/authenticate_user?username=${user}&password=${password}`, {
                params: {

                },
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            });

            const userInfo = response.data;
            return userInfo;
        } catch (error) {
            alert('Erro na requisição de autenticação de usuário.');
        }
    }

    return (
        <AuthContext.Provider value={{userInfo, login}}>
            {children}
        </AuthContext.Provider>
    )
}