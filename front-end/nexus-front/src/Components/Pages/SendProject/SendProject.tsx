import { useNavigate } from "react-router";
import { useState } from "react";
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
  const [coAutor, setCoAutor] = useState<string>("");
  const [coAutorList, setCoAutorList] = useState<Array<string>>([]);
  const [autor, setAutor] = useState<string>("");
  //const [selectedValue, setSelectedValue] = useState<string>("");

  const addKeyWords = (e: any) => {
    e.preventDefault();
    setListKeyWords((prev) => [...prev, keyWord]);
    setKeyWord("");
  };

  const addCoAutor = (e: any) => {
    e.preventDefault();
    setCoAutorList((prev) => [...prev, coAutor]);
    setCoAutor("");
  };
  const handleChange = (e: any) => {
    if (e.target.name === "autor") {
      setAutor(e.target.value);
    }
    if (e.target.name === "keywords") {
      setKeyWord(e.target.value);
    }
    if (e.target.name === "coautores") {
      setCoAutor(e.target.value);
    }
  };
  function DropdownAutores() {
    const handleChangeDropDown = (e: any) => {
      setAutor(e.target.value);
    };
    return (
      <div>
        <label>
          <select
            name="pets"
            multiple
            size="4"
            value=""
            onChange={(e: any) => handleChangeDropDown(e)}
          >
            <optgroup>
              <option value="Autor 1">Autor 1</option>
              <option value="Autor 2">Autor 2</option>
              <option value="Autor 3">Autor 3</option>
              <option value="Autor N">Autor N</option>
            </optgroup>
          </select>
        </label>
      </div>
    );
  }

  function DropdownCoAutores() {
    const handleChangeDropDown = (e: any) => {
      setCoAutor(e.target.value);
    };
    return (
      <div>
        <label>
          <select
            name="pets"
            multiple
            size="4"
            value=""
            onChange={(e: any) => handleChangeDropDown(e)}
          >
            <optgroup>
              <option value="CoAutor 1">CoAutor 1</option>
              <option value="CoAutor 2">CoAutor 2</option>
              <option value="CoAutor 3">CoAutor 3</option>
              <option value="CoAutor N">CoAutor N</option>
            </optgroup>
          </select>
        </label>
      </div>
    );
  }

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
            <div>
              <label htmlFor="keywords">Palavras-chave*</label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                placeholder="Escreva aqui as palavras-chave"
                value={keyWord}
                onChange={(e: any) => handleChange(e)}
                required
              />
              <button type="button" onClick={(e) => addKeyWords(e)}>
                +
              </button>
            </div>
            {listKeyWords.length > 0 && (
              <div>
                {listKeyWords.map((kw) => (
                  <p>{kw}</p>
                ))}
              </div>
            )}
          </div>

          {/* Autor */}
          <div className={styles.formGroup}>
            <label htmlFor="author">Autor*</label>
            <input
              type="text"
              id="autor"
              name="autor"
              placeholder="Nome do autor"
              value={autor}
              onChange={(e: any) => handleChange(e)}
              required
            />
            {autor != "" && <DropdownAutores />}
          </div>

          {/* Co-autores */}
          <div className={styles.formGroup}>
            <div>
              <label htmlFor="coautores">Co-autores</label>
              <input
                type="text"
                id="coautores"
                name="coautores"
                placeholder="Escreva aqui o nome dos co-autores"
                onChange={(e) => handleChange(e)}
                value={coAutor}
              />
              <button type="button" onClick={(e) => addCoAutor(e)}>
                +
              </button>
              {coAutor != "" && <DropdownCoAutores />}
              {coAutorList.length > 0 && (
                <div>
                  {coAutorList.map((coAutor: string) => (
                    <p>{coAutor}</p>
                  ))}
                </div>
              )}
            </div>
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
