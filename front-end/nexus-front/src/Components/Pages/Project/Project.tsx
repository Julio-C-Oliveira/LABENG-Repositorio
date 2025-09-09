import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Project.module.css";

import { CodeIcon, FilePdfIcon } from "@phosphor-icons/react";

import authorImg from "/imgs/user-img.png";
import teacherImg from "/imgs/persona-img-2.png";
import githubLogo from "/imgs/github-icon.png";

interface ProjectData {
  title: string;
  description: string;
  type: string;
  status: string;
  published_at: string;
  zip_url?: string;
  pdf_url?: string;
  github_url?: string;
  author: string;
  co_authors?: string;
  related_fields?: string[];
}

type ProjectState = { data: ProjectData } | null;

export function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/projects/${slug}`,
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar projeto");
        }
        const data = await response.json();

        console.log("Dados recebidos do backend:", data);

        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  if (loading) return <p>Carregando...</p>;
  if (!project) return <p>Projeto não encontrado</p>;

  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <section className={styles.project_section}>
        <div className={styles.wrapper}>
          <ul className={styles.tags}>
            {project.data.keywords?.split(',').map((keyword: string, idx: number) => (
              <li key={idx}>{keyword.trim()}</li>
            ))}
          </ul>

          <h1 className={styles.project_title}>{project.data.title}</h1>
          <p className={styles.project_description}>
            {project.data.description}
          </p>
          {/* <div className={styles.project_highlight}>
            <iframe
              src="https://www.youtube.com/embed/01dn67QubYQ?si=p3Q9Gj3p0Sb_LIfY"
              title="YouTube video player"
              //frameborder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div> */}
          <div className={styles.project_team}>
            <div className={styles.team_wrapper}>
              <div className={styles.profile_img}>
                <button type="button">
                  <img
                    src={authorImg}
                    alt="Imagem do perfil do autor do projeto"
                  />
                </button>
              </div>
              <span>{project.data.author}</span>
            </div>
            {/* <div className={styles.team_wrapper}>
              <div className={styles.profile_img}>
                <button type="button">
                  <img
                    src={teacherImg}
                    alt="Imagem do perfil do orientador do projeto"
                  />
                </button>
              </div>
              <span>Orientador</span>
            </div> */}
            {project.data.co_authors && (
              <div className={styles.team_wrapper}>
                <div className={styles.profile_img}>
                  <button type="button">
                    <img src={teacherImg} alt="Imagem do co-autor" />
                  </button>
                </div>
                <span>{project.data.co_authors}</span>
              </div>
            )}
          </div>
          <ul className={styles.project_details}>
            <li className={styles.row}>
              <span className={styles.title}>Categoria</span>
              <span className={styles.value}>{project.data.type}</span>
            </li>
            <li className={styles.row}>
              <span className={styles.title}>Situação</span>
              <span className={`${styles.value} ${styles.finalizado}`}>
                {project.data.status}
              </span>
            </li>
            <li className={styles.row}>
              <span className={styles.title}>Publicação</span>
              <span className={styles.value}>
                {new Date(project.data.published_at).toLocaleDateString("pt-BR")}
              </span>
            </li>
            <li className={`${styles.row} ${styles.row_tags}`}>
              <span className={styles.title}>Áreas relacionadas</span>
              <ul className={styles.details_tags}>
                {project.data.related_fields?.map((field: string, idx: number) => (
                  <li key={idx} className={styles.tag}>{field}</li>
                ))}
              </ul>
            </li>
          </ul>
          <div className={styles.project_links}>
            <a className={styles.codigo_fonte} href={project.data.zip_url}>
              <CodeIcon /> Código-fonte
            </a>
            <a className={styles.github} href={project.data.github_url}>
              <img src={githubLogo} alt="Logo do Github" />
              GitHub
            </a>

            <a className={styles.pdf_publicacao} href={project.data.pdf_url}>
              <FilePdfIcon /> PDF da publicação
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
