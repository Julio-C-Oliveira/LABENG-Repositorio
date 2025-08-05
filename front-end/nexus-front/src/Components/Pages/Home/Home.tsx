import { useState } from 'react';
import { useNavigate, } from 'react-router';

import styles from './Home.module.css';

import {
  CodeIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react';

export function Home(){
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const categoriesArr = [
    {
      name: "TC's",
    },
    {
      name: 'Dissertações',
    },
    {
      name: 'Teses',
    },
    {
      name: 'Graduação',
    },
    {
      name: 'Áreas de pesquisa',
    },
    {
      name: 'Desenvolvimento tecnológico',
    },
  ];

  async function handleSearch(text: string){
    console.log(text);
    navigate('/inicio/resultados');
  };

  return(
    <div className={styles.container}>
      <h1 className={styles.title}>
        Procure por projetos desenvolvidos na <br /> <span>Computação da UFPA</span>
      </h1>
      <div className={styles.search_input}>
        <MagnifyingGlassIcon/>
        <input 
          type="text" 
          placeholder='Digite o nome ou tema relacionado ao projeto'
          onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
        />
      </div>
      <nav className={styles.nav}>
        <h2 className={styles.nav_title}>Navegue por categorias de projetos</h2>
        <ul>
          {categoriesArr.map((data, i) => (
            <li key={`categorie-${i}`}>
              <button 
                type="button"
                onClick={() => handleSearch(data.name)}
              >
                <div className={styles.icon}>
                  <CodeIcon/>
                </div>
                <span>{data.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};