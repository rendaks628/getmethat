import axios from "axios";
import {useState, createContext, useEffect} from "react";


export const AuthContext = createContext();

const AuthState = ({children}) => {
    const authToken = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);
    const [isAuthentificated, setIsAuthentificated] = useState(false);
    useEffect(() => authToken && setIsAuthentificated(true), [authToken]);

    const signUp = async data => {
        if(data.password !== data.confirm_password) {
        setError("Passwords do not match");
        setTimeout(() => setError(null), 4000);
        return;
        }
        try {
            setLoading(true);
            const{
                data:{token}
            } = await axios.post(`${process.env.REACT_APP_GETMETHAT_API}/auth/signUp`, data);
            localStorage.setItem("token", token);
            setIsAuthentificated(true);
        } catch (error) {
            if(error.response) {
                setError(error.response.data.error);
                setTimeout(() => setError(null), 4000);
                setLoading(false);
            }
        }
    };

    const signIn = async data => {
        try {
            setLoading(true);
            const {
                data: {token}
            } = await axios.post(`${process.env.REACT_APP_GETMETHAT_API}/auth/signIn`, data);
            localStorage.setItem("token", token);
            setIsAuthentificated(true);
        } catch (error) {
            if(error.response) {
                setError(error.response.data.error);
                setTimeout(() => setError(null), 4000);
                setLoading(false);
            } else {
                setError(error.message);
                setTimeout(() => setError(null), 4000);
                setLoading(false);
            }
        }
    };

const signOut = () => {
    localStorage.removeItem("token")
    setIsAuthentificated(false);
};

return <AuthContext.Provider value={{ loading, isAuthentificated, error, setIsAuthentificated, signUp, signIn, signOut }}>
{children}
</AuthContext.Provider>;
};

export default AuthState;