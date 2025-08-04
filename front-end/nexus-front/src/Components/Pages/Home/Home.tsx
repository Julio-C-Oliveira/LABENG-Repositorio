<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> user/mario
import { useNavigate, } from 'react-router';

import styles from './Home.module.css';

import { 
  MagnifyingGlassIcon,
  CodeIcon,
} from '@phosphor-icons/react';

export function Home(){
<<<<<<< HEAD
  const [searchText, setSearchText] = useState('');
=======
>>>>>>> user/mario
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

<<<<<<< HEAD
  async function handleSearch(text: string) {
    console.log('handleSearch chamada:', text);

    const trimmed = text.trim();
    if (trimmed.length < 3) {
      // Mostre mensagem amigável ao usuário
      alert('Digite pelo menos 3 caracteres para buscar.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/projects/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ query: trimmed }),
      });

      if (response.status === 422) {
        const errData = await response.json();
        console.warn('Erro de validação:', errData);
        alert('Digite pelo menos 3 caracteres.'); // ou UI mais bonita
        return;
      }

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const results = await response.json();
      
      results.forEach((projeto: { title: string }) => {
        console.log(projeto.title);
      });

      console.log('Enviando para /inicio/resultados com:', results);
      navigate('/inicio/resultados', { state: { results } });


    } catch (error) {
      console.error('Erro na busca:', error);
    }
  }


return (
=======
  async function handleSearch(text: string){
    console.log(text);
    navigate('/inicio/resultados');
  };

  return(
>>>>>>> user/mario
    <div className={styles.container}>
      <h1 className={styles.title}>
        Procure por projetos desenvolvidos na <br /> <span>Computação da UFPA</span>
      </h1>
      <div className={styles.search_input}>
<<<<<<< HEAD
        <MagnifyingGlassIcon />
        <input
          type="text"
          placeholder="Digite o nome ou tema relacionado ao projeto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchText);
            }
          }}
=======
        <MagnifyingGlassIcon/>
        <input 
          type="text" 
          placeholder='Digite o nome ou tema relacionado ao projeto'
          onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
>>>>>>> user/mario
        />
      </div>
      <nav className={styles.nav}>
        <h2 className={styles.nav_title}>Navegue por categorias de projetos</h2>
<<<<<<< HEAD
          <ul>
            {categoriesArr.map((cat) => (
              <li key={cat.name}>
                <button
                  type="button"
                  onClick={() => handleSearch(cat.name)}
                >
                  <div className={styles.icon}>
                    <CodeIcon />
                  </div>
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  )
=======
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
>>>>>>> user/mario
};