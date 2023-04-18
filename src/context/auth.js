import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";

export const AuthContext = createContext ({});


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    // useEffect(()=> {
    //     const userToken = localStorage.getItem("user_token");
    //     const userStorage = localStorage.getItem("user_db");    
    //     if(userToken && userStorage) {
    //         const hasUser = JSON.parse(userStorage)?.filter(
    //           (user) => user.email === JSON.parse(userToken).email 
    //         );
    //         if(hasUser) setUser(hasUser[0]);
    //     }
    // }, []);

    const signin = async (email, password) => {
        const response = await api.post('/tokens', {
            email,
            password
        })
        const { token } = response.data
        if(token){
            localStorage.setItem('ns_token', token);
            localStorage.setItem('ns_user', email);
            setUser({'email': email})
            
            return "Success"
        }else {
            const { errors } = response.data
            return errors[0];
        }
    };

    const signupAdmin = async (email, password) => {
        const user = {
            name: 'Test',
            email,
            password,
            admin: true
          }
        const token = localStorage.getItem('ns_token')
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const response = await api.post('/users', user)
        
        if (user.email && user.password) {
            return 'Success'
         } else {
            const { errors } = response.data
            return errors[0];
         }
    }
    const signup = async (email, password) => {
        const user = {
            name: 'Test',
            email,
            password,
            admin: false
          }
          const token = localStorage.getItem('ns_token')
          api.defaults.headers.common.authorization = `Bearer ${token}`
          const response = await api.post('/users', user)
          
          if (user.email && user.password) {
              return 'Success'
           } else {
              const { errors } = response.data
              return errors[0];
           }
    }
    

    const signout = () => {
        setUser(null);
        localStorage.removeItem("ns_token");
        localStorage.removeItem("ns_user");
    }

    return (
        <AuthContext.Provider
        value={{user, signed: !!user , signin, signup, signupAdmin, signout}}
        >
            {children}
        </AuthContext.Provider>
    );

};

