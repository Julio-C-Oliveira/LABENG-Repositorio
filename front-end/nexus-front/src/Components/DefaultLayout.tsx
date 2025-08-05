import { useState, type CSSProperties, } from "react";

import { 
  Outlet, 
  NavLink, 
  useNavigate,
} from "react-router";

import './Fonts.css';
import './GlobalStyle.css';
import styles from './DefaultLayout.module.css';

import { 
  CloudArrowUpIcon,
  UserCircleGearIcon,
  FileCodeIcon,
  InfoIcon,
  SignOutIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";

import logo from '/logo-nexus/nexus-logo.svg';
import profileImg from '/imgs/user-img.png';

export function DefaultLayout(){
  const navigate = useNavigate();

  /*-------------------------------*/
  const [showUserOptions, setShowUserOptions] = useState<boolean>(false);
  const [showPaletteColor, setShowPaletteColor] = useState<boolean>(false);

  const userAuth = localStorage.getItem('user_auth') ? true : false;

  const paletteColorData: {text: string, color: string}[] = [
    {
      text: 'Azul',
      color: 'var(--color-main-2)',
    },
    {
      text: 'Laranja',
      color: '#f5aa42',
    },
    {
      text: 'Roxo',
      color: '#a134eb',
    },
  ];

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
          {userAuth && (
            <>
              <button
                className={styles.send_project_bttn} 
                type="button"
                onClick={() => navigate('/inicio/enviar-projeto')}
              >
                <CloudArrowUpIcon/>
                <span>Enviar projeto</span>
              </button>
              <button
                className={styles.profileBttn} 
                type="button"
                onClick={() => setShowUserOptions(!showUserOptions)}
              >
                <img src={profileImg} alt="Imagem de perfil do usuário"/>
              </button>
            </>
          )}
          {!userAuth && (
            <>
              <button 
                className={styles.sign_in_bttn}
                type="button"
                onClick={() => navigate('/login')}
              >
                Fazer login
              </button>
              <button 
                className={styles.sign_up_bttn}
                type="button"
                onClick={() => {
                  localStorage.setItem('form_sign_up', JSON.stringify(true));
                  navigate('/login');
                }}
              >
                Criar conta
              </button>
            </>
          )}
        </div>

        {showUserOptions && (
          <ul className={styles.userOptions}>
            <li>
              <button className={styles.bttn} type="button">
                <UserCircleGearIcon/>
                Configurações da conta
              </button>
            </li>
            <li>
              <button className={styles.bttn} type="button">
                <FileCodeIcon/>
                Meus projetos
              </button>
            </li>
            <li>
              <button className={styles.bttn} type="button">
                <InfoIcon/>
                Suporte
              </button>
            </li>
            <li>
              <button 
                className={styles.bttn} 
                type="button"
                onClick={() => setShowPaletteColor(true)}
              >
                <div className={styles.palette_color_bttn}></div>
                Paleta de cor
              </button>
            </li>
            <hr className={styles.line}/>
            <li>
              <button 
                className={`${styles.bttn} ${styles.signout_bttn}`} 
                type="button"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                <SignOutIcon/>
                Sair
              </button>
            </li>

            {showPaletteColor && (
              <div className={styles.palette_color_wrapper}>
                <button
                  className={styles.palette_color_wrapper_close_bttn} 
                  type="button"
                  onClick={() => setShowPaletteColor(false)}
                >
                  <ArrowLeftIcon/>
                  Voltar
                </button>
                <div className={styles.palette_color_options}>
                  {paletteColorData.map((data, i) => (
                    <button
                      className={styles.palette_color_option}
                      style={{'--color-preview': data.color} as CSSProperties}
                      type="button"
                      key={`p-c-option-${i}`}
                    >
                      <div className={styles.palette_color_preview}></div>
                      {data.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </ul>
        )}
      </header>
      <section className={styles.main}>
        <Outlet/>
      </section>
      {showUserOptions && (
        <div className={styles.lock_screen} onClick={() => {
          setShowUserOptions(false);
          setShowPaletteColor(false);
        }}></div>
      )}
    </div>
  );
};