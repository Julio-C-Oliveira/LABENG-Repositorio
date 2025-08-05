import { 
  useState, 
  type CSSProperties,
  useEffect,
} from 'react';
import { useNavigate, useLocation,} from 'react-router';

import { 
  Swiper, 
  SwiperSlide,
  type SwiperClass,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import styles from './Project.module.css';

import { 
  CodeIcon,
  FilePdfIcon,
  ArrowBendDownLeftIcon,
} from '@phosphor-icons/react';

//import authorImg from '/imgs/user-img.png';
import teacherImg from '/imgs/persona-img-2.png';
import githubLogo from '/imgs/github-icon.png';

import githubLogoBlack from '/imgs/icons/logo-github-black.png';
import emailIcon from '/imgs/icons/icon-email.png';
import lattesLogo from '/imgs/icons/logo-lattes.png';

import { useExampleData } from '../../Hooks/ExampleData/useExampleData';

import { 
  type ProjectProfile,
  type UserProfile,
} from '../../interfaces';

export function Project(){
  const navigate = useNavigate();
  const location = useLocation();

  const {ProjectsData,} = useExampleData();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  //----------------------------------------------------------------------

  const [data, setData] = useState<ProjectProfile>();
  const [currImgFullScreen, setCurrImgFullScreen] = useState<string>();
  const [profileModal, setProfileModal] = useState<{
    show: boolean,
    data: UserProfile | undefined,
  }>({
    show: false, 
    data: undefined,
  });


  function handleFullScreen(img_path: string){
    setCurrImgFullScreen(img_path);
  };

  function handleProfileModal(e: any){
    const modal_element = document.getElementById('profile_modal_wrapper_');
    if(e.target === modal_element){
      setProfileModal({show: false, data: undefined});
    };
  };
  
  useEffect(() => {
    const id_projeto = location.pathname.split('/')[3];

    async function requestAPI(){
      const req = ProjectsData.get(id_projeto);
      if(req){
        console.log(req);
        setData(req);
      };
    };
    requestAPI();
  }, []);

  return(
    <div className={styles.container} style={{'backgroundImage': `url(${data ? data.img_background : ''})`} as CSSProperties}>
      {data && (
        <>
          <div className={styles.gradient}></div>
          <section className={styles.project_section}>
            <div className={styles.wrapper}>
              <ul className={styles.tags}>
                {data.tags.map((tag, i) => {
                  return(<li key={`tag-${i}`}>{tag}</li>);
                })}
              </ul>
              <h1 className={styles.project_title}>{data.titulo}</h1>
              <p className={styles.project_description}>{data.descricao}</p>
              {data.url_video_youtube && (
                <div className={styles.project_highlight}>
                  <iframe  
                    src={`${data.url_video_youtube}`} // https://www.youtube.com/embed/01dn67QubYQ?si=p3Q9Gj3p0Sb_LIfY
                    title="YouTube video player" 
                    //frameborder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {data.imagens && (
                <div className={styles.gallery_images}>
                  {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                  </Swiper> */}
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    } as CSSProperties}
                    spaceBetween={5}
                    navigation={true}
                    grabCursor
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='swiper_1'
                  >
                    {data.imagens.map((img, i) => (
                      <SwiperSlide key={`p-img-1-${i}`}>
                        <img src={img} onClick={() => handleFullScreen(img)}/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={5}
                    slidesPerView={5.5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    grabCursor
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='swiper_2'
                  >
                    {data.imagens.map((img, i) => (
                      <SwiperSlide key={`p-img-2-${i}`}>
                        <img src={img}/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              <div className={styles.project_team}>
                <div className={styles.team_wrapper}>
                  <div className={styles.profile_img}>
                    {data.autor.map((data, i) => {
                      return(
                        <button 
                          type="button"
                          key={`autor-${i}`}
                          onClick={() => setProfileModal({show: true, data: data.perfil})}
                        >
                          <img src={data.img} alt={`Imagem do perfil de ${data.nome}`}/>
                        </button>
                      );
                    })}
                  </div>
                  <span>Autor</span>
                </div>
                {data.orientador && (
                  <div className={styles.team_wrapper}>
                    <div className={styles.profile_img}>
                      <button 
                        type="button"
                        onClick={() => setProfileModal({show: true, data: data.orientador?.perfil})}
                      >
                        <img src={teacherImg} alt="Imagem do perfil do orientador do projeto"/>
                      </button>
                    </div>
                    <span>Orientador</span>
                  </div>
                )}
              </div>
              <ul className={styles.project_details}>
                <li className={styles.row}>
                  <span className={styles.title}>Categoria</span>
                  <span className={styles.value}>{data.detalhes.categoria}</span>
                </li>
                <li className={styles.row}>
                  <span className={styles.title}>Situação</span>
                  <span 
                    className={`${styles.value} ${styles[data.detalhes.situacao.toLowerCase().replace(' ', '_')]}`}
                  >
                    {data.detalhes.situacao}
                  </span>
                </li>
                <li className={styles.row}>
                  <span className={styles.title}>Publicação</span>
                  <span className={styles.value}>{data.detalhes.data_publicacao}</span>
                </li>
                <li className={`${styles.row} ${styles.row_tags}`}>
                  <span className={styles.title}>Áreas relacionadas</span>
                  <ul className={styles.details_tags}>
                    {data.detalhes.areas_relacionadas.map((data, i) => {
                      return(
                        <li className={styles.tag} key={`a-r-${i}`}>{data}</li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
              <div className={styles.project_links}>
                {data.source_code && (
                  <a className={styles.codigo_fonte} href={data.source_code}>
                    <CodeIcon/> Código-fonte
                  </a>
                )}
                {data.github_code && (
                  <a className={styles.github} href={data.github_code}>
                    <img src={githubLogo} alt="Logo do Github"/>
                    GitHub
                  </a>
                )}
                {data.pdf_publicacao && (
                  <a className={styles.pdf_publicacao} href={data.pdf_publicacao}>
                    <FilePdfIcon/> PDF da publicação
                  </a>
                )}
              </div>
            </div>
          </section>
          {currImgFullScreen && (
            <div 
              className={styles.img_full_screen}
              onClick={() => setCurrImgFullScreen(undefined)}
            >
              <img src={currImgFullScreen} alt="Imagem do projeto em tela cheia"/>
            </div>
          )}

          {(profileModal.show && profileModal.data) && (
            <div 
              className={styles.profile_modal_wrapper} 
              id='profile_modal_wrapper_'
              onClick={(e) => handleProfileModal(e)}
            >
              <div className={styles.profile_modal}>
                <div className={styles.profile_wallpaper}></div>
                <figure className={styles.profile_modal_figure}>
                  <img
                    className={styles.profile_modal_img} 
                    src={profileModal.data.img} 
                    alt={`Imagem de ${profileModal.data.nome}`}
                  />
                </figure>
                <h4>{profileModal.data.nome}</h4>
                <span>{profileModal.data.categoria}</span>
                <p>{profileModal.data.bio}</p>
                <div className={styles.profile_contact}>
                  {profileModal.data.email && (
                    <button type="button">
                      <img src={emailIcon} alt="Icone do botão de copiar email"/>
                    </button>
                  )}
                  {profileModal.data.github && (
                    <a href={profileModal.data.github}>
                      <img src={githubLogoBlack} alt="Icone do link para o github"/>
                    </a>
                  )}
                  {profileModal.data.lattes && (
                    <a href={profileModal.data.lattes}>
                      <img src={lattesLogo} alt="Icone do link para a Plataforma Lattes"/>
                    </a>
                  )}
                </div>
                <button 
                  className={styles.profile_modal_close_bttn}
                  type="button"
                  onClick={() => setProfileModal({show: false, data: undefined})}
                >
                  Fechar janela
                </button>
              </div>
            </div>
          )}
        </>
      )}
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