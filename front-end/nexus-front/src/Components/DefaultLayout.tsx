import { NavLink, Outlet } from "react-router";

import styles from "./DefaultLayout.module.css";
import "./Fonts.css";
import "./GlobalStyle.css";

import { CloudArrowUpIcon } from "@phosphor-icons/react";

import { useAuth } from "../Contexts/AuthContext";
import profileImg from "/imgs/user-img.png";
import logo from "/logo-nexus/nexus-logo.svg";

export function DefaultLayout() {
    const { isAuthenticated } = useAuth();

    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <NavLink className={styles.logo} to={"/"}>
                <img src={logo} alt="Logo da plataforma" />
            </NavLink>
            <div className={styles.header_wrapper}>
                {isAuthenticated && (
                    <>
                        <NavLink to={"/enviarProjeto"}>
                            <button className={styles.send_project_bttn} type="button">
                            <CloudArrowUpIcon />
                            <span>Enviar projeto</span>
                            </button>
                        </NavLink>
                        <button className={styles.profileBttn} type="button">
                            <img src={profileImg} alt="Imagem de perfil do usuário" />
                        </button>
                    </>
                )}

                {!isAuthenticated && (
                    <NavLink to={"/login"}>
                        <button className={styles.loginBttn} type="button">
                            Login
                        </button>
                    </NavLink>
                )}
            </div>
        </header>
        <section className={styles.main}>
            <Outlet />
        </section>
        </div>
    );
}
