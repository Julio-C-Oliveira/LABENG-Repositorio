import { useState, type CSSProperties, } from 'react';
import { useNavigate } from 'react-router';

import styles from './Results.module.css';

import { 
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react';

import { useExampleData, } from '../../Hooks/ExampleData/useExampleData';

import { type SearchResults, } from '../../interfaces';

export function Results(){
  const navigate = useNavigate();

  const {SearchResults,} = useExampleData();

  //-------------------------------------------------------------------------------------

  const [resultsArr, _] = useState<SearchResults[]>(SearchResults.get);

  async function handleProject(id: string){
    navigate(`/inicio/projeto/${id}`);
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
          <li key={`li-${i}`}>
            <button
              className={styles.card} 
              type="button"
              onClick={() => handleProject(result.id_projeto)}
            >
              <div className={styles.card_image} style={{'backgroundImage': `url(${result.img})`} as CSSProperties}></div>
              <div className={styles.card_description}>
                <span className={styles.card_title}>{result.titulo}</span>
                <div className={styles.card_tags}>
                  {result.tags.map((tag, j) => (
                    <span className={styles.tag} key={`tag-${i}-${j}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.card_autor}>
                {result.autor.map((autor, k) => (
                  <img 
                    src={autor.img} 
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