import { useNavigate } from "react-router";
import { useState, type EventHandler } from "react";
import styles from "./SendProject.module.css";

import {
  CodeIcon,
  FilePdfIcon,
  ArrowBendDownLeftIcon,
} from "@phosphor-icons/react";

//import authorImg from "/imgs/user-img.png";
//import teacherImg from "/imgs/persona-img-2.png";
import githubLogo from "/imgs/github-icon.png";

export function SendProject() {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState<string>("");
  const [listKeyWords, setListKeyWords] = useState<Array<string>>([]);
  const addKeyWords = (e: any) => {
    e.preventDefault();
    setListKeyWords((prev) => [...prev, keyWord]);
    setKeyWord("");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.back_bttn}>
        <ArrowBendDownLeftIcon size={20} />
        Voltar
      </button>
      <div>
        <h1 className={styles.title}>Enviar Projeto</h1>

        <form className={styles.form}>
          {/* Nome */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do projeto"
              required
            />
          </div>

          {/* Descrição */}
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição*</label>
            <textarea
              id="description"
              name="description"
              placeholder="Descreva seu projeto..."
              rows="4"
              required
            />
          </div>

          {/* Palavras-chave */}
          <div className={styles.formGroup}>
            <label htmlFor="keywords">Palavras-chave*</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Separe as palavras-chave por vírgula"
              value={keyWord}
              onChange={(e: any) => setKeyWord(e.target.value)}
              required
            />
            <button type="button" onClick={(e) => addKeyWords(e)}>
              +
            </button>
            {listKeyWords}
          </div>

          {/* Autor */}
          <div className={styles.formGroup}>
            <label htmlFor="author">Autor*</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Nome do autor"
              required
            />
          </div>

          {/* Co-autores */}
          <div className={styles.formGroup}>
            <label htmlFor="coauthors">Co-autores</label>
            <input
              type="text"
              id="coauthors"
              name="coauthors"
              placeholder="Separe os nomes dos co-autores por vírgula"
            />
          </div>

          {/* Data da publicação */}
          <div className={styles.formGroup}>
            <label htmlFor="publicationDate">Data da publicação*</label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              required
            />
          </div>

          {/* Situação (dropdown) */}
          <div className={styles.formGroup}>
            <label htmlFor="status">Situação*</label>
            <select id="status" name="status" required>
              <option value="">Selecione...</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluido">Concluído</option>
            </select>
          </div>

          {/* Áreas relacionadas (dropdown) */}
          <div className={styles.formGroup}>
            <label htmlFor="relatedAreas">Áreas relacionadas*</label>
            <select id="relatedAreas" name="relatedAreas" required>
              <option value="">Selecione...</option>
              <option value="Inteligência Artificial">
                Inteligência Artificial
              </option>
              <option value="Ciência de Dados">Ciência de Dados</option>
              <option value="Desenvolvimento Web">Desenvolvimento Web</option>
              <option value="Desenvolvimento Mobile">
                Desenvolvimento Mobile
              </option>
              <option value="Segurança da Informação">
                Segurança da Informação
              </option>
              <option value="Redes de Computadores">
                Redes de Computadores
              </option>
              <option value="Sistemas Embarcados">Sistemas Embarcados</option>
              <option value="Outra">Outra</option>
            </select>
          </div>

          {/* Código-fonte (file upload) */}
          <div className={styles.formGroup}>
            <label htmlFor="sourceCode">
              <CodeIcon size={20} />
              Código-fonte (arquivo .zip)
            </label>
            <input
              type="file"
              id="sourceCode"
              name="sourceCode"
              accept=".zip,.rar,.7z"
            />
          </div>

          {/* GitHub (link) */}
          <div className={styles.formGroup}>
            <label htmlFor="github">
              <img src={githubLogo} alt="GitHub" width={20} height={20} />
              Link do GitHub
            </label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="https://github.com/usuario/projeto"
            />
          </div>

          {/* PDF (file upload) */}
          <div className={styles.formGroup}>
            <label htmlFor="pdf">
              <FilePdfIcon size={20} />
              Documentação (PDF)
            </label>
            <input type="file" id="pdf" name="pdf" accept=".pdf" />
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar Projeto
          </button>
        </form>
      </div>
      s
    </div>
  );
}
