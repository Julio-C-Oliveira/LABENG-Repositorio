import { useNavigate } from 'react-router';
import { useState } from 'react';

import styles from './Login.module.css';

import { 
  AtIcon,
  PasswordIcon,
  EyeIcon,
  UserIcon,
} from '@phosphor-icons/react';

import googleIcon from '/imgs/google-icon.png';
import brasaoUFPA from '/imgs/brasao-ufpa-personalizado.png';
import logo from '/logo-nexus/nexus-logo-white.svg';
import ilustracao1 from '/ilustracoes/nexus-ilustracao-letra-n.svg';

//import logo from '/logo-nexus/nexus-logo.svg';
import logotipo from '/logo-nexus/nexus-logotipo.svg';

export function Login(){
  const navigate = useNavigate();

  const [changeForm, setChangeForm] = useState<boolean>(true);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  return(
    <div className={styles.container}>
      <section className={styles.illustration_wrapper}>
        <img
          className={styles.logo}
          src={logo} 
          alt="Logo da plataforma"
        />
        <span className={styles.title}>
          Encontre todos os projetos desenvolvidos <br /> na FACOMP, <b>incluindo os seus!</b>
        </span>
        <a className={styles.link_ufpa} href="https://ufpa.br/" target='_blank'>
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
        <hr/>
        <form className={styles.form}>
          <img 
            className={styles.form_logo} 
            src={logotipo} 
            alt="Logo da plataforma"
          />
          {changeForm && (
            <>
              <div className={styles.input}>
                <input type="text" placeholder='Email da conta' required/>
                <AtIcon/>
              </div>
              <div className={styles.input}>
                <input type="password" placeholder='Senha' required/>
                <PasswordIcon/>
                <button type="button">
                  <EyeIcon/>
                </button>
              </div>
            </> 
          )}
          {!changeForm && (
            <>
              <div className={styles.input}>
                <input type="text" placeholder='Nome de usuário' required/>
                <UserIcon/>
              </div>
              <div className={styles.input}>
                <input type="text" placeholder='Email institucional' required/>
                <AtIcon/>
              </div>
              <div className={styles.input}>
                <input type="password" placeholder='Senha' required/>
                <PasswordIcon/>
                <button type="button">
                  <EyeIcon/>
                </button>
              </div>
              <div className={styles.input}>
                <input type="password" placeholder='Confirmar senha' required/>
                <PasswordIcon/>
                <button type="button">
                  <EyeIcon/>
                </button>
              </div>

              <div className={styles.agree_terms}>
                <button
                  className={`${styles.agree_bttn} ${acceptedTerms ? styles.active : ''}`} 
                  type="button"
                  onClick={() => setAcceptedTerms(!acceptedTerms)}
                ></button>
                <span className={styles.agree_text}>
                  Ao criar sua conta, você concorda com nossos <button type="button">termos de uso</button> e <button type="button">política de privacidade</button>
                </span>
              </div>
            </>
          )}
          <hr className={styles.line}/>
          {changeForm && (
            <>
              <button
                className={styles.login_social} 
                type="button"
              >
                <img src={googleIcon} alt="Ícone do Google"/>
                Login com Google
              </button>
              <button
                className={styles.sign_in_bttn} 
                type="button"
                onClick={() => navigate('/inicio')}
              >
                Fazer login
              </button>
            </>
          )}
          {!changeForm && (
            <button
              className={`${styles.create_account_bttn} ${acceptedTerms ? styles.active : ''}`} 
              type="button"
              disabled={!acceptedTerms}
              onClick={() => navigate('/inicio')}
            >
              Criar conta
            </button>
          )}
        </form>
        <div className={styles.change_form}>
          <span>
            {changeForm ? 'Ainda não possui conta?' : 'Já possui uma conta?'}
          </span>
          <button type="button" onClick={() => setChangeForm(!changeForm)}>
            {changeForm ? 'Crie agora de forma fácil' : 'Faça o seu login'}
          </button>
        </div>
      </section>
    </div>
  );
};