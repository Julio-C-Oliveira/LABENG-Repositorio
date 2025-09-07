import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { api } from '../../services/api';

interface IUser {
    id: number;
    name: string;
    email: string;
}

interface SignupData {
        name: string,
        username: string,
        email: string,
        password: string,
        password_confirmation: string
    }

export interface IAuthContext
{
    user: IUser | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => React.useContext(AuthContext);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const navigate = useNavigate();

    const [user, setUser] = React.useState<IUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

    const login = React.useCallback(async (email: string, password: string) => {
        try {
            const response = await api.post<{ token: string, user: IUser }>('/auth/login', { email, password });

            if (response.status === 200) {
                const { user, token } = response.data;

                Cookies.set('auth_token', token, { expires: 7 });
                setUser(user);
                setIsAuthenticated(true);
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: "Welcome back!",
                }).then(() => {
                    navigate("/");
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Invalid username or password.",
            });
        }
    }, []);

    const logout = React.useCallback(async () => {
        Cookies.remove('auth_token');
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    const signup = React.useCallback(async (data: SignupData) => {
        try {
            const response = await api.post<{ user: IUser, token: string }>('/auth/signup', data);
            if (response.status === 201) {
                setUser(response.data.user);
                setIsAuthenticated(true);
                Cookies.set('auth_token', response.data.token, { expires: 7 });

                Swal.fire({
                    icon: "success",
                    title: "Signup Successful",
                    text: "Welcome aboard!",
                }).then(() => {
                    navigate("/");
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Signup Failed",
                text: "An error occurred during signup.",
            });
        }
    }, []);

    const getMe = React.useCallback(async () => {
        const response = await api.get<IUser>('/auth/me');
        if (response.status === 200) {
            setUser(response.data);
            setIsAuthenticated(true);
        }
    }, []);

    api.interceptors.request.use((config) => {
        const token = Cookies.get('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    useEffect(() => {
        getMe();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            signup
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
