import React, { useState } from "react";
import styles from "./Login.module.css";
import ilustracao1 from "/ilustracoes/nexus-ilustracao-letra-n.svg";
import brasaoUFPA from "/imgs/brasao-ufpa-personalizado.png";
import logo from "/logo-nexus/nexus-logo-white.svg";

//import logo from '/logo-nexus/nexus-logo.svg';
import { useAuth } from "../../../Contexts/AuthContext";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignUpForm";
import logotipo from "/logo-nexus/nexus-logotipo.svg";

export function Login() {
  const { login, signup } = useAuth();

  const [changeForm, setChangeForm] = useState<boolean>(true);
    const handleLogin = React.useCallback((mail: string, password: string) => {
        login(mail, password);
    }, [login]);

    const handleSignUp = React.useCallback((name: string, username: string, mail: string, password: string, password_confirmation: string,) => {
        signup({
            name: name,
            username: username,
            email: mail,
            password: password,
            password_confirmation: password_confirmation
        });
    },[]);

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
          {changeForm && <LoginForm handleSubmit={handleLogin} />}
          {!changeForm && <SignupForm handleSubmit={handleSignUp} />}
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
