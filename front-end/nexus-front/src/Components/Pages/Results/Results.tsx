import { useState, type CSSProperties, } from 'react';
<<<<<<< HEAD
import { useNavigate, useLocation } from "react-router-dom";

=======
import { useNavigate } from 'react-router';
>>>>>>> user/mario

import styles from './Results.module.css';

import { 
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react';

import userImg from '/imgs/user-img.png';

import projectImg1 from '/imgs/project-image-1.png';
import projectImg2 from '/imgs/project-image-2.png';

<<<<<<< HEAD
export function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pega os resultados enviados via navigate()
  const results = location.state?.results || [];

  console.log('Resultados recebidos:', results);

  const [searchText, setSearchText] = useState('');

  async function handleProject() {
    navigate('/inicio/projeto'); // Aqui vai ser a parte de redirecionar pro projeto
  }

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.filter_bttn} type="button">
          <FunnelIcon /> Filtros
        </button>
        <div className={styles.search_input}>
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
        />
        </div>
      </div>

      <h4 className={styles.results_text}>
        {results.length} resultados encontrados
      </h4>

      <ul className={styles.results_table}>
        {results.map((result: any, i: number) => (
          <li key={`result-${i}`}>
            <button
              className={styles.card}
              type="button"
              onClick={() => handleProject()}
            >
              <div
                className={styles.card_image}
                style={{ backgroundImage: `url(${projectImg1})` } as CSSProperties}
              ></div>
              <div className={styles.card_description}>
                <span className={styles.card_title}>{result.title}</span>
                <div className={styles.card_tags}>
                  {result.tags?.map((tag: string, j: number) => (
=======
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
>>>>>>> user/mario
                    <span className={styles.tag} key={`tag-${i}-${j}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.card_autor}>
<<<<<<< HEAD
                {/* Caso venha lista de autores */}
                {result.authors?.map((author: string, k: number) => (
                  <img
                    src={author}
                    alt="Imagem de perfil do autor"
=======
                {result.authors.map((author, k) => (
                  <img 
                    src={author} 
                    alt="Imagem de perfil do autor ou autores"
>>>>>>> user/mario
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