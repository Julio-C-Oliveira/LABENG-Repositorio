import { useNavigate, } from 'react-router';

import styles from './Project.module.css';

import { 
  CodeIcon,
  FilePdfIcon,
  ArrowBendDownLeftIcon,
} from '@phosphor-icons/react';

import authorImg from '/imgs/user-img.png';
import teacherImg from '/imgs/persona-img-2.png';
import githubLogo from '/imgs/github-icon.png';

export function Project(){
  const navigate = useNavigate();

  return(
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <section className={styles.project_section}>
        <div className={styles.wrapper}>
          <ul className={styles.tags}>
            <li>Palavra-chave 1</li>
            <li>Palavra-chave 2</li>
            <li>Palavra-chave 3</li>
          </ul>
          <h1 className={styles.project_title}>Nome completo do projeto 1</h1>
          <p className={styles.project_description}>
            There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form, by injected humour, or randomised words which 
            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
            necessary, making this the first true generator on the Internet. It uses a dictionary 
            of over 200 Latin words, combined with a handful of model sentence structures, to generate 
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
          <div className={styles.project_highlight}>
            <iframe  
              src="https://www.youtube.com/embed/01dn67QubYQ?si=p3Q9Gj3p0Sb_LIfY" 
              title="YouTube video player" 
              //frameborder={0} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.project_team}>
            <div className={styles.team_wrapper}>
              <div className={styles.profile_img}>
                <button type="button">
                  <img src={authorImg} alt="Imagem do perfil do autor do projeto"/>
                </button>
              </div>
              <span>Autor</span>
            </div>
            <div className={styles.team_wrapper}>
              <div className={styles.profile_img}>
                <button type="button">
                  <img src={teacherImg} alt="Imagem do perfil do orientador do projeto"/>
                </button>
              </div>
              <span>Orientador</span>
            </div>
          </div>
          <ul className={styles.project_details}>
            <li className={styles.row}>
              <span className={styles.title}>Categoria</span>
              <span className={styles.value}>TCC</span>
            </li>
            <li className={styles.row}>
              <span className={styles.title}>Situação</span>
              <span className={`${styles.value} ${styles.finalizado}`}>Finalizado</span>
            </li>
            <li className={styles.row}>
              <span className={styles.title}>Publicação</span>
              <span className={styles.value}>15/06/2025</span>
            </li>
            <li className={`${styles.row} ${styles.row_tags}`}>
              <span className={styles.title}>Áreas relacionadas</span>
              <ul className={styles.details_tags}>
                <li className={styles.tag}>Redes</li>
                <li className={styles.tag}>Engenharia de Software</li>
                <li className={styles.tag}>Arquitetura</li>
                <li className={styles.tag}>IA</li>
                <li className={styles.tag}>Visão computacional</li>
              </ul>
            </li>
          </ul>
          <div className={styles.project_links}>
            <a className={styles.codigo_fonte} href="#">
              <CodeIcon/> Código-fonte
            </a>
            <a className={styles.github} href="#">
              <img src={githubLogo} alt="Logo do Github"/>
              GitHub
            </a>
            <a className={styles.pdf_publicacao} href="#">
              <FilePdfIcon/> PDF da publicação
            </a>
          </div>
        </div>
      </section>
      <button
        className={styles.back_bttn} 
        type="button"
        onClick={() => navigate('/inicio/resultados')}
      >
        <ArrowBendDownLeftIcon/>
        <span>Voltar</span>
      </button>
    </div>
  );
};