import { Outlet, NavLink, } from "react-router";

import './Fonts.css';
import './GlobalStyle.css';
import styles from './DefaultLayout.module.css';

import { 
  CloudArrowUpIcon,
} from "@phosphor-icons/react";

import logo from '/logo-nexus/nexus-logo.svg';
import profileImg from '/imgs/user-img.png';

export function DefaultLayout(){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink
          className={styles.logo}
          to={'/inicio'}
        >
          <img src={logo} alt="Logo da plataforma"/>
        </NavLink>
        <div className={styles.header_wrapper}>
          <button
            className={styles.send_project_bttn} 
            type="button"
          >
            <CloudArrowUpIcon/>
            <span>Enviar projeto</span>
          </button>
          <button
            className={styles.profileBttn} 
            type="button"
          >
            <img src={profileImg} alt="Imagem de perfil do usuário"/>
          </button>
        </div>
      </header>
      <section className={styles.main}>
        <Outlet/>
      </section>
    </div>
  );
};