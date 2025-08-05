import { 
  useState,
  useRef,
  type CSSProperties, 
  useEffect, 
  type JSX, 
} from 'react';

import { useNavigate, } from 'react-router';

import styles from './SendProject.module.css';

import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  ThumbsUpIcon,
} from '@phosphor-icons/react';

import logo from '/logo-nexus/nexus-logo-white.svg';
import githubLogo from '/imgs/github-icon.png';
import gitlabLogo from '/imgs/gitlab-icon.png';

import githubLogoBlack from '/imgs/icons/logo-github-black.png';
import gitlabLogoColor from '/imgs/icons/gitlab-logo-color.png';

export function SendProject(){
  const navigate = useNavigate();

  const userAuth = localStorage.getItem('user_auth') ? true : false;

  const [step, setStep] = useState<number>(0);
  const [tipoProjeto, setTipoProjeto] = useState<string>('');
  const [tipoArmazenamento, setTipoArmazenamento] = useState<'none' | 'nexus' | 'github' | 'gitlab'>('none');
  const [fileInfo, setFileInfo] = useState<{
    name: string,
  }>();

  const formNexus = useRef<HTMLFormElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const githubInput = useRef<HTMLInputElement>(null);
  const gitlabInput = useRef<HTMLInputElement>(null); 

  const [showSendProjectBttn, setShowSendProjectBttn] = useState<boolean>(false);

  const tipoProjetoArr: {name: string}[] = [
    {name: 'TC'},
    {name: 'Dissertação'},
    {name: 'Tese'},
    {name: 'Graduação'},
    {name: 'Área de pesquisa'},
    {name: 'Desenvolvimento tecnológico'},
  ];

  const titleArr: {
    text: string | JSX.Element,
    progress_bar: string,
    progress: number,
  }[] = [
    {
      text: 'Escolha o tipo de projeto',
      progress_bar: 'Tipo de projeto',
      progress: 20,
    },
    {
      text: <>Preencha as informações necessárias sobre o projeto de <b>{tipoProjeto}</b></>,
      progress_bar: 'Informações',
      progress: 40,
    },
    {
      text: 'Escolha o tipo de armazenamento de código-fonte',
      progress_bar: 'Armazenamento',
      progress: 70,
    },
    {
      text: '',
      progress_bar: '',
      progress: 90,
    },
    {
      text: 'Parabéns! O projeto está publicado na plataforma.',
      progress_bar: '',
      progress: 100,
    },
  ];

  function getFileInfo(){
    if(fileInput.current?.files){
      //console.log(fileInput.current.files[0].name);
      setFileInfo({name: fileInput.current.files[0].name});
    };
  };

  function handleGithubInput(){
    if(githubInput.current){
      githubInput.current.value.length > 0 ? setShowSendProjectBttn(true) : setShowSendProjectBttn(false);
    };
  };

  function handleGitlabInput(){
    if(gitlabInput.current){
      gitlabInput.current.value.length > 0 ? setShowSendProjectBttn(true) : setShowSendProjectBttn(false);
    };
  };

  useEffect(() => {
    !userAuth && navigate('/inicio');
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.progress_bar}>
          <div className={styles.bar} style={{'--progress': `${titleArr[step].progress}%`} as CSSProperties}>
            {titleArr[step].progress_bar && (
              <span>{titleArr[step].progress_bar}<br /><b>.</b></span>
            )}
          </div>
        </div>
        <div className={styles.title}>
          {step !== 3 && <span className={styles.number}>{step == 4 ? step : step+1}.</span>}
          <h1 className={styles.text}>{titleArr[step].text}</h1>
        </div>
        {step == 0 && (
          <ul className={styles.tipo_projeto}>
            {tipoProjetoArr.map((data, i) => (
              <li key={`card-${i}`}>
                <button 
                  type="button"
                  onClick={() => {
                    setTipoProjeto(data.name);
                    step < 4 && setStep(prev => prev + 1);
                  }}
                >
                  <span className={styles.number}>{i+1}</span>
                  <span>{data.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {step == 1 && (
          <form className={styles.form_wrapper}>
            <div className={styles.input_wrapper}>
              <label 
                className={styles.input_label}
                htmlFor="input_title"
              >
                Título do projeto
              </label>
              <input type="text" id='input_title' placeholder='ex.: Plataforma de ensino remoto' required/>
            </div>
            <div className={styles.input_wrapper}>
              <label 
                className={styles.input_label}
                htmlFor="textarea_descricao"
              >
                Descrição
              </label>
              <textarea 
                id="textarea_descricao" 
                placeholder='Forneça um resumo e detalhes sobre o projeto'
                required
              ></textarea>
            </div>
            <div className={styles.input_wrapper}>
              <label 
                className={styles.input_label}
                htmlFor="input_video_apresentacao"
              >
                Vídeo de apresentação
              </label>
              <input type="text" id='input_video_apresentacao' placeholder='(OPCIONAL) ex.: https://www.youtube.com/watch?v=AbcDeFGHi9I'/>
            </div>
          </form>
        )}
        {step == 2 && (
          <div className={styles.tipo_armazenamento}>
            {tipoArmazenamento !== 'none' && (
              <div className={styles.tipo_armazenamento_header}>
                <button 
                  className={styles.tipo_armazenamento_return_bttn}
                  type="button"
                  onClick={() => {
                    setTipoArmazenamento('none');
                    fileInfo && setFileInfo(undefined);
                    showSendProjectBttn && setShowSendProjectBttn(false);
                  }}
                >
                  <ArrowLeftIcon/>
                  Voltar
                </button>
              </div>
            )}
            {tipoArmazenamento == 'none' && (
              <>
                <button 
                  className={styles.bttn1}
                  type="button"
                  onClick={() => setTipoArmazenamento('nexus')}
                >
                  <img src={logo} alt="Icone da plataforma"/>
                  Repositório institucional
                </button>
                <button 
                  className={styles.bttn2}
                  type="button"
                  onClick={() => setTipoArmazenamento('github')}
                >
                  <img src={githubLogo} alt="Icone do GitHub"/>
                  Link para o GitHub
                </button>
                <button 
                  className={styles.bttn3}
                  type="button"
                  onClick={() => setTipoArmazenamento('gitlab')}
                >
                  <img src={gitlabLogo} alt="Icone do GitLab"/>
                  Link para o GitLab
                </button>
              </>
            )}
            {tipoArmazenamento == 'nexus' && (
              <>
                {!fileInfo && (
                  <form
                    className={styles.tipo_armazenamento_form}
                    ref={formNexus}
                    encType='multipart/form-data'
                    onDragOver={() => formNexus.current && formNexus.current.classList.add(`${styles.active}`)}
                    onDragLeave={() => formNexus.current && formNexus.current.classList.remove(`${styles.active}`)}
                  >
                    <svg viewBox="0 0 56 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2.53616V31.9556L5.3261 7.60848C5.57972 6.84763 6.59421 5.83317 8.11596 5.83317H49.7102C49.7102 4.05786 48.1885 2.53616 46.6667 2.53616H25.3624C24.0942 1.01446 22.3189 0 20.7971 0H2.53624C1.01449 0 0 1.01446 0 2.53616Z" fill="#1D9CFE"/>
                      <path d="M0.507041 32.2106C0.253633 33.4787 1.52153 35.0004 3.04328 35.0004C1.77516 33.9859 1.52153 33.2251 1.77516 31.7034L6.59401 11.4141C7.10147 10.146 8.11596 8.87796 10.1447 8.87796H25.3622C27.645 8.87796 28.9131 9.89242 29.9274 11.4141H51.9926C53.261 7.86349 51.7393 6.3418 49.71 6.3418H8.11596C6.59401 6.3418 5.83335 7.35626 5.57951 8.62434L0.507041 32.2106Z" fill="#1D9CFE"/>
                      <path d="M25.8701 9.38379C27.1385 9.38379 28.9139 10.3982 29.4209 11.9199H53.2617C55.5444 11.92 56.5585 13.9487 55.544 15.9775L51.7403 31.1943C51.4868 33.2233 50.2183 34.999 48.6963 34.999H41.75V19.5762L47.1055 24.9316C47.5545 25.3802 48.2825 25.3801 48.7315 24.9316C49.1806 24.4825 49.1806 23.7538 48.7315 23.3047L41.4131 15.9863C40.964 15.5374 40.2352 15.5373 39.7862 15.9863L32.4678 23.3047C32.0191 23.7538 32.0189 24.4826 32.4678 24.9316C32.9167 25.3803 33.6447 25.3799 34.0938 24.9316L39.4492 19.5762V34.999H4.56546C3.04343 34.9988 1.77625 33.477 2.28323 31.4482L7.10159 11.4131C7.60892 9.89174 9.1306 9.384 9.89163 9.38379H25.8701Z" fill="#1D9CFE"/>
                    </svg>
                    <span className={styles.tipo_armazenamento_form_text}>
                      Selecionar ou arraste o arquivo .ZIP para esta área
                    </span>

                    <input 
                      className={styles.tipo_armazenamento_form_input}
                      type="file"
                      ref={fileInput}
                      onChange={getFileInfo}
                    />
                  </form>
                )}
                {fileInfo && (
                  <>
                    <div className={styles.tipo_armazenamento_info_file}>
                      <ThumbsUpIcon/>
                      <span className={styles.tipo_armazenamento_info_file_text}>
                        O arquivo <b>{fileInfo.name}</b> está pronto para envio!
                      </span>
                      <button 
                        className={styles.change_file_bttn}
                        type="button"
                        onClick={() => setFileInfo(undefined)}
                      >
                        Alterar arquivo
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
            {tipoArmazenamento == 'github' && (
              <div className={styles.tipo_armazenamento_wrapper_input}>
                <img
                  className={styles.tipo_armazenamento_input_icon}
                  src={githubLogoBlack} 
                  alt="Ícone do github"
                />
                <input
                  className={styles.tipo_armazenamento_input}
                  type="text" 
                  placeholder='https://github.com/nome-usuario/nome-repositorio'
                  ref={githubInput}
                  onChange={handleGithubInput}
                />
              </div>
            )}
            {tipoArmazenamento == 'gitlab' && (
              <div className={styles.tipo_armazenamento_wrapper_input}>
                <img
                  className={styles.tipo_armazenamento_input_icon}
                  src={gitlabLogoColor} 
                  alt="Ícone do gitlab"
                />
                <input
                  className={styles.tipo_armazenamento_input}
                  type="text" 
                  placeholder='https://gitlab.com/nome-usuario/nome-repositorio'
                  ref={gitlabInput}
                  onChange={handleGitlabInput}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {step !== 0 && (
        <button
          className={styles.back_bttn} 
          type="button"
          onClick={() => step > 0 && setStep(prev => prev - 1)}
        >
          <ArrowLeftIcon/>
          Voltar
        </button>
      )}
      {(step < 2 && step > 0) && (
        <button
          className={styles.next_bttn} 
          type="button"
          onClick={() => step < 2 && setStep(prev => prev + 1)}
        >
          <ArrowRightIcon/>
          Próximo
        </button>
      )}
      {(fileInfo || showSendProjectBttn) && (
        <button
          className={styles.send_project_bttn} 
          type="button"
          //onClick={() => step < 2 && setStep(prev => prev + 1)}
        >
          <ArrowRightIcon/>
          Enviar projeto
        </button>
      )}
    </div>
  );
};