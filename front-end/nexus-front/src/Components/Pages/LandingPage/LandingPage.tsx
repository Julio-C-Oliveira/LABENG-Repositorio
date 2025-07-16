import { NavLink } from 'react-router';

import styles from './LandingPage.module.css';

import logo from '/logo-nexus/nexus-logo.svg';
import logotipo from '/logo-nexus/nexus-logotipo.svg';

export function LandingPage(){
  return(
    <div className={styles.container}>
      <img 
        className={styles.logo} 
        src={logo} 
        alt="Logo da plataforma"
      />
      <h1>Página em construção...</h1>
      <NavLink to={'/login'}>
        Acessar plataforma
      </NavLink>

      <img 
        className={styles.bg_img}
        src={logotipo} 
        alt="Logotipo da plataforma"
      />
    </div>
  );
};