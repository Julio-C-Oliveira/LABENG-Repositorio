import { useNavigate } from "react-router";
import { useState, type ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import styles from "./Login.module.css";
import { AtIcon, PasswordIcon, EyeIcon, UserIcon } from "@phosphor-icons/react";
import Swal from "sweetalert2";
import googleIcon from "/imgs/google-icon.png";
import brasaoUFPA from "/imgs/brasao-ufpa-personalizado.png";
import logo from "/logo-nexus/nexus-logo-white.svg";
import ilustracao1 from "/ilustracoes/nexus-ilustracao-letra-n.svg";
import logotipo from "/logo-nexus/nexus-logotipo.svg";

export function Login() {
  const navigate = useNavigate();

  const [changeForm, setChangeForm] = useState<boolean>(true);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const [formDataRegister, setFormDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (changeForm) {
      console.log(e.target.name);
      setFormDataLogin({
        ...formDataLogin,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormDataRegister({
        ...formDataRegister,
        [e.target!.name]: e.target!.value,
      });
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    if (changeForm) {
      try {
        e.preventDefault();
        console.log(formDataLogin);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/login/",
          formDataLogin,
        );

        const token = response.data.authorisation.token;

        localStorage.setItem("token", token);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        }).then(() => {
          navigate("/inicio");
        });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (error.response && error.response.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "Invalid email or password. Please try again.",
            });
          } else {
            const responseData = error.response!.data;
            setValidationErrors(responseData);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: (validationErrors as string) || "Registration failed.",
            });
          }
        }
      }
    } else {
      e.preventDefault();
      try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataRegister),
        });

        const responseData = await response.json();
        if (response.ok) {
          setValidationErrors("");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: responseData.message,
          }).then(() => {
            window.location.href = "/login";
          });
        } else {
          setValidationErrors(responseData);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: (validationErrors as string) || "Registration failed.",
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error || !(error instanceof Error))
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred during registration.",
          });
      }
      return;
    }
  };
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
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <img
            className={styles.form_logo}
            src={logotipo}
            alt="Logo da plataforma"
          />
          {changeForm && (
            <>
              <div className={styles.input}>
                <input
                  type="text"
                  placeholder="Email da conta"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <AtIcon />
              </div>
              <div className={styles.input}>
                <input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <PasswordIcon />
                <button type="button">
                  <EyeIcon />
                </button>
              </div>
            </>
          )}
          {!changeForm && (
            <>
              <div className={styles.input}>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Nome de usuário"
                  required
                />
                <UserIcon />
              </div>
              <div className={styles.input}>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Email institucional"
                  required
                />
                <AtIcon />
              </div>
              <div className={styles.input}>
                <input
                  type="password"
                  onChange={(e) => handleChange(e)}
                  placeholder="Senha"
                  required
                />
                <PasswordIcon />
                <button type="button">
                  <EyeIcon />
                </button>
              </div>
              <div className={styles.input}>
                <input
                  type="password"
                  onChange={(e) => handleChange(e)}
                  placeholder="Confirmar senha"
                  required
                />
                <PasswordIcon />
                <button type="button">
                  <EyeIcon />
                </button>
              </div>

              <div className={styles.agree_terms}>
                <button
                  className={`${styles.agree_bttn} ${acceptedTerms ? styles.active : ""}`}
                  type="button"
                  onClick={() => setAcceptedTerms(!acceptedTerms)}
                ></button>
                <span className={styles.agree_text}>
                  Ao criar sua conta, você concorda com nossos{" "}
                  <button type="button">termos de uso</button> e{" "}
                  <button type="button">política de privacidade</button>
                </span>
              </div>
            </>
          )}
          <hr className={styles.line} />
          {changeForm && (
            <>
              <button className={styles.login_social} type="button">
                <img src={googleIcon} alt="Ícone do Google" />
                Login com Google
              </button>
              <button className={styles.sign_in_bttn} type="submit">
                Fazer login
              </button>
            </>
          )}
          {!changeForm && (
            <button
              className={`${styles.create_account_bttn} ${acceptedTerms ? styles.active : ""}`}
              type="submit"
              disabled={!acceptedTerms}
              //onClick={(e) => handleSubmit(e)}
            >
              Criar conta
            </button>
          )}
        </form>
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
