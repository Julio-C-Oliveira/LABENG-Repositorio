import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./SendProject.module.css";

import {
    ArrowBendDownLeftIcon,
    CodeIcon,
    FilePdfIcon,
} from "@phosphor-icons/react";

//import authorImg from "/imgs/user-img.png";
//import teacherImg from "/imgs/persona-img-2.png";
import React from "react";
import Swal from "sweetalert2";
import { api } from "../../../services/api";
import githubLogo from "/imgs/github-icon.png";

export function SendProject() {
  const navigate = useNavigate();

  const titleRef = React.useRef<HTMLInputElement>(null);
  const pdfRef = React.useRef<HTMLInputElement>(null);
  const codeRef = React.useRef<HTMLInputElement>(null);
  const githubRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);
  const statusRef = React.useRef<HTMLSelectElement>(null);
  const autorRef = React.useRef<HTMLInputElement>(null);
  const selectedValueRef = React.useRef<HTMLSelectElement>(null);
  const relatedAreasRef = React.useRef<HTMLSelectElement>(null);

  const [keyWord, setKeyWord] = useState<string>("");
  const [listKeyWords, setListKeyWords] = useState<Array<string>>([]);
  const [coAutor, setCoAutor] = useState<string>("");
  const [coAutorList, setCoAutorList] = useState<Array<string>>([]);

  const resetFields = () => {
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
    statusRef.current!.value = "";
    pdfRef.current!.value = "";
    githubRef.current!.value = "";
    relatedAreasRef.current!.value = "";
    codeRef.current!.value = "";
    dateRef.current!.value = "";
    autorRef.current!.value = "";
    selectedValueRef.current!.value = "";
    setListKeyWords([]);
    setCoAutorList([]);
  };

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

    // ✅ Adicione este estado para related fields
  const [relatedFieldsSelected, setRelatedFieldsSelected] = useState<string[]>([]);

  // ✅ função para atualizar o estado quando um checkbox mudar
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setRelatedFieldsSelected(prev => [...prev, value]);
    } else {
      setRelatedFieldsSelected(prev => prev.filter(v => v !== value));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();


    const form = new FormData();
    form.set("title", titleRef.current!.value);
    form.set("description", descriptionRef.current!.value);
    form.set("type", selectedValueRef.current!.value);
    form.set("author", autorRef.current!.value);
    form.set("co_authors", coAutorList.join(", "));
    form.set("status", statusRef.current!.value);
    relatedFieldsSelected.forEach(name => form.append("related_fields[]", name));

    if (pdfRef.current!.files && pdfRef.current!.files[0]) {
      form.set("pdf", pdfRef.current!.files[0]);
    }
    form.set("github_link", githubRef.current!.value);
    if (codeRef.current!.files && codeRef.current!.files[0]) {
      form.set("project", codeRef.current!.files[0]);
    }
    form.set("keywords", listKeyWords.join(", "));
    form.set("published_at", dateRef.current!.value);

    try {
      const response = await api.post(`/projects`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        Swal.fire({
          title: "Sucesso!",
          text: "Projeto enviado com sucesso.",
          icon: "success",
          confirmButtonText: "OK",
        });
        resetFields();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e: any) => {
    if (e.target.name === "keywords") {
      setKeyWord(e.target.value);
    }
    if (e.target.name === "coautores") {
      setCoAutor(e.target.value);
    }
  };


  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.back_bttn}>
        <ArrowBendDownLeftIcon size={20} />
        Voltar
      </button>
      <div>
        <h1 className={styles.title}>Enviar Projeto</h1>

        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          {/* Nome */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do projeto"
              required
              ref={titleRef}
            />
          </div>

          {/* Tipo */}
          <div className={styles.formGroup}>
            <label htmlFor="type">Tipo*</label>
            <select id="type" name="type" ref={selectedValueRef} required>
              <option value="">Selecione um tipo</option>
              <option value="TCC">TCC</option>
              <option value="Article">Article</option>
            </select>
          </div>

          {/* Descrição */}
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição*</label>
            <textarea
              id="description"
              name="description"
              placeholder="Descreva seu projeto..."
              rows={4}
              ref={descriptionRef}
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
            ref={autorRef}
              required
            />
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
              ref={dateRef}
              required
            />
          </div>

          {/* Situação (dropdown) */}
          <div className={styles.formGroup}>
            <label htmlFor="status">Situação*</label>
            <select
              id="status"
              name="status"
              ref={statusRef}
              required
            >
              <option value="">Selecione...</option>
              <option value="draft">Em andamento</option>
              <option value="published">Publicado</option>
              <option value="archived">Arquivado</option>
            </select>
          </div>

          {/* Áreas relacionadas (dropdown) */}
          <div className={styles.checkboxGroup}>
            {[
              "Inteligência Artificial",
              "Ciência de Dados",
              "Desenvolvimento Web",
              "Desenvolvimento Mobile",
              "Segurança da Informação",
              "Redes de Computadores",
              "Sistemas Embarcados",
              "Outra",
            ].map(area => (
              <label key={area}>
                <input
                  type="checkbox"
                  value={area}
                  onChange={handleCheckboxChange}
                />
                {area}
              </label>
            ))}
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
                ref={codeRef}
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
              ref={githubRef}
            />
          </div>

          {/* PDF (file upload) */}
          <div className={styles.formGroup}>
            <label htmlFor="pdf">
              <FilePdfIcon size={20} />
              Documentação (PDF)
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf"
              ref={pdfRef}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar Projeto
          </button>
        </form>
      </div>
    </div>
  );
}
