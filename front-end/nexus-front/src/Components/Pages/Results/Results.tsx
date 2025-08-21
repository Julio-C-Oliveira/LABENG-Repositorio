import { useState, type CSSProperties } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Results.module.css";

import { FunnelIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

import userImg from "/imgs/user-img.png";

import projectImg1 from "/imgs/project-image-1.png";
import projectImg2 from "/imgs/project-image-2.png";

export function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pega os resultados enviados via navigate()
  const results = location.state?.results || [];

  console.log("Resultados recebidos:", results);

  const [searchText, setSearchText] = useState("");

  async function handleProject(slug: string) {
    console.log("Results - Slug:", slug);
    navigate(`/inicio/projeto/${slug}`); // Aqui vai ser a parte de redirecionar pro projeto
  }

  async function handleSearch(text: string) {
    console.log("handleSearch chamada:", text);

    const trimmed = text.trim();
    if (trimmed.length < 3) {
      // Mostre mensagem amigável ao usuário
      alert("Digite pelo menos 3 caracteres para buscar.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/projects/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query: trimmed }),
        },
      );

      if (response.status === 422) {
        const errData = await response.json();
        console.warn("Erro de validação:", errData);
        alert("Digite pelo menos 3 caracteres."); // ou UI mais bonita
        return;
      }

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const results = await response.json();
      console.log(results);
      results.forEach((projeto: { title: string }) => {
        console.log(projeto.title);
      });

      console.log("Enviando para /inicio/resultados com:", results);
      navigate("/inicio/resultados", { state: { results } });
    } catch (error) {
      console.error("Erro na busca:", error);
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
              if (e.key === "Enter") {
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
        {results.data.length > 1 ? (
          results.map((result: any, i: number) => (
            <li key={`result-${i}`}>
              <button
                className={styles.card}
                type="button"
                onClick={() => handleProject(result.slug)} // Aqui é onde redireciona para página do projeto
              >
                <div
                  className={styles.card_image}
                  style={
                    {
                      backgroundImage: `url(${projectImg1})`,
                    } as CSSProperties
                  }
                ></div>
                <div className={styles.card_description}>
                  <span className={styles.card_title}>{result.title}</span>
                  <div className={styles.card_tags}>
                    {result.tags?.map((tag: string, j: number) => (
                      <span className={styles.tag} key={`tag-${i}-${j}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.card_autor}>
                  {/* Caso venha lista de autores */}
                  {result.authors?.map((author: string, k: number) => (
                    <img
                      src={author}
                      alt="Imagem de perfil do autor"
                      key={`author-${i}-${k}`}
                    />
                  ))}
                </div>
              </button>
            </li>
          ))
        ) : (
          <li key={`result-1`}>
            <button
              className={styles.card}
              type="button"
              onClick={() => handleProject(results.data[0].slug)} // Aqui é onde redireciona para página do projeto
            >
              <div
                className={styles.card_image}
                style={
                  {
                    backgroundImage: `url(${projectImg1})`,
                  } as CSSProperties
                }
              ></div>
              <div className={styles.card_description}>
                <span className={styles.card_title}>
                  {results.data[0].title}
                </span>
                <div className={styles.card_tags}>
                  {results.tags?.map((tag: string, j: number) => (
                    <span className={styles.tag} key={`tag-1-${j}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.card_autor}>
                {/* Caso venha lista de autores */}
                {results.data[0].authors?.map((author: string, k: number) => (
                  <img
                    src={author}
                    alt="Imagem de perfil do autor"
                    key={`author-${i}-${k}`}
                  />
                ))}
              </div>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
