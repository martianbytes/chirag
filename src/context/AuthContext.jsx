
import axios from "axios";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router";



export const AuthContext = createContext(undefined);




export const AuthContextProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    const login = async(formData) => {
        const { data } = await axios.post('http://localhost:5000/api/v1/auth/login', formData);
        console.log(data)
        // console.log(data.data.user.name)
        setUser(data.data.user)
        console.log(user.name)
        setToken(data.data.token)
    }

    const logout = () => {
        setUser({});
        setToken("");
    }

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// user, token, login function, logout function