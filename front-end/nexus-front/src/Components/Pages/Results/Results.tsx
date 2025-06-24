import { useState, type CSSProperties, } from 'react';
import { useNavigate } from 'react-router';

import styles from './Results.module.css';

import { 
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react';

import userImg from '/imgs/user-img.png';

import projectImg1 from '/imgs/project-image-1.png';
import projectImg2 from '/imgs/project-image-2.png';

export function Results(){
  const navigate = useNavigate();

  const [resultsArr, _] = useState<{
    img: string,
    title: string,
    tags: string[],
    authors: string[],
  }[]>([
    {
      img: projectImg1,
      title: 'Nome completo do projeto 1',
      tags: [
        'Palavra-chave 1', 
        'Palavra-chave 2', 
        'Palavra-chave 3'
      ],
      authors: [userImg],
    },
    {
      img: projectImg2,
      title: 'Nome completo do projeto 2',
      tags: [
        'Palavra-chave 1', 
        'Palavra-chave 2', 
        'Palavra-chave 3',
        'Palavra-chave 4',
      ],
      authors: [userImg, userImg, userImg],
    },
  ]);

  async function handleProject(){
    navigate('/inicio/projeto');
  };

  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={styles.filter_bttn} 
          type="button"
        >
          <FunnelIcon/> Filtros
        </button>
        <div className={styles.search_input}>
          <MagnifyingGlassIcon/>
          <input type="text" placeholder='Digite o nome ou tema relacionado ao projeto' />
        </div>
      </div>
      <h4 className={styles.results_text}>
        2 resultados encontrados para “Projeto”
      </h4>
      <ul className={styles.results_table}>
        {resultsArr.map((result, i) => (
          <li>
            <button
              className={styles.card} 
              type="button"
              onClick={() => handleProject()}
            >
              <div className={styles.card_image} style={{'backgroundImage': `url(${result.img})`} as CSSProperties}></div>
              <div className={styles.card_description}>
                <span className={styles.card_title}>{result.title}</span>
                <div className={styles.card_tags}>
                  {result.tags.map((tag, j) => (
                    <span className={styles.tag} key={`tag-${i}-${j}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.card_autor}>
                {result.authors.map((author, k) => (
                  <img 
                    src={author} 
                    alt="Imagem de perfil do autor ou autores"
                    key={`author-${i}-${k}`}
                  />
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};