import { AxiosError } from "axios";
import Cookie from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import styles from "./Login.module.css";
import ilustracao1 from "/ilustracoes/nexus-ilustracao-letra-n.svg";
import brasaoUFPA from "/imgs/brasao-ufpa-personalizado.png";
import logo from "/logo-nexus/nexus-logo-white.svg";

//import logo from '/logo-nexus/nexus-logo.svg';
import { api } from "../../../services/api";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignUpForm";
import logotipo from "/logo-nexus/nexus-logotipo.svg";

export function Login() {
    const navigate = useNavigate();

    const [changeForm, setChangeForm] = useState<boolean>(true);
    const [validationErrors, setValidationErrors] = useState({});

    const handleLogin = React.useCallback(async (mail: string, password: string) => {
        try {
            const response = await api.post("/auth/login/", {
                email: mail,
                password: password,
            });

            const token = response?.data?.token;
            Cookie.set("token", token, { expires: 7 }); // Store token in cookies for 7 days

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
            }).then(() => {
                navigate("/inicio");
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Login Failed",
                        text: "Invalid email or password. Please try again.",
                    });
                } else {
                    const responseData = error.response!.data;
                    const responseMessage = responseData?.message || "An error occurred during login.";
                    setValidationErrors(responseMessage);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: (responseMessage as string) || "Registration failed.",
                    });
                }
            }
        }
    }, []);

    const handleSignUp = React.useCallback(async (name: string, username: string, mail: string, password: string, password_confirmation: string) => {
        try {
            const response = await api.post("/auth/signup/", {
                name: name,
                username: username,
                email: mail,
                password: password,
                password_confirmation: password_confirmation,
            });

            const token = response?.data?.token;
            Cookie.set("token", token, { expires: 7 }); // Store token in cookies
            Swal.fire({
                icon: "success",
                title: "Account Created",
                text: "Your account has been created successfully!",
            }).then(() => {
                navigate("/inicio");
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                const responseData = error.response!.data;
                const responseMessage = responseData?.message || "An error occurred during registration.";
                setValidationErrors(responseData);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: (responseMessage as string) || "Registration failed.",
                });
            }
        }
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.illustration_wrapper}>
                <img className={styles.logo} src={logo} alt="Logo da plataforma" />
                <span className={styles.title}>
                    Encontre todos os projetos desenvolvidos <br /> na FACOMP,{" "}
                    <b>incluindo os seus!</b>
                </span>
                <a className={styles.link_ufpa} href="https://ufpa.br/" target="_blank">
                    <img
                        src={brasaoUFPA}
                        alt="Brasão da UFPA. Link para o site oficial da universidade"
                    />
                </a>
                <img
                    className={styles.ilustracao1}
                    src={ilustracao1}
                    alt="Ilustração"
                />
                <img
                    className={styles.ilustracao2}
                    src={ilustracao1}
                    alt="Ilustração"
                />
            </section>
            <section className={styles.form_wrapper}>
                <hr />
                <div className={styles.form}>
                    <img
                        className={styles.form_logo}
                        src={logotipo}
                        alt="Logo da plataforma"
                    />
                    {changeForm && (
                        <LoginForm handleSubmit={handleLogin} />
                    )}
                    {!changeForm && (
                        <SignupForm handleSubmit={handleSignUp} />
                    )}
                </div>
                <div className={styles.change_form}>
                    <span>
                        {changeForm ? "Ainda não possui conta?" : "Já possui uma conta?"}
                    </span>
                    <button type="button" onClick={() => setChangeForm(!changeForm)}>
                        {changeForm ? "Crie agora de forma fácil" : "Faça o seu login"}
                    </button>
                </div>
            </section>
        </div>
    );
}
