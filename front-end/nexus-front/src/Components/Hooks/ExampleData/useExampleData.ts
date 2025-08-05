import { useState, } from "react";

import { 
  type ProjectProfile,
  type SearchResults,
} from "../../interfaces";

import persona3 from '/imgs/personas/persona-3.png';
import persona4 from '/imgs/personas/persona-4.png';
import persona5 from '/imgs/personas/persona-5.png';
import persona6 from '/imgs/personas/persona-6.png';

import projectImg1 from '/imgs/project-images/project-image-1.png';
import projectImg2 from '/imgs/project-images/project-image-2.jpg';
import projectImg3 from '/imgs/project-images/project-image-3.png';
import projectImg4 from '/imgs/project-images/project-image-4.png';
import projectImg5 from '/imgs/project-images/project-image-5.png';
import projectImg6 from '/imgs/project-images/project-image-6.png';
import projectImg7 from '/imgs/project-images/project-image-7.png';

export function useExampleData(){
  const [projectsDataArr, setProjectsDataArr] = useState<{[key: string]: ProjectProfile}>({
    "0001":{
      img_background: "/imgs/project-image-1.png",
      tags: ["Redes", "Engenharia de Software", "IA"],
      titulo: "Nome completo do projeto 1",
      descricao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      url_video_youtube: "https://www.youtube.com/embed/dQajOZf8wFQ?si=sihnCUf9N4KycZa5",
      imagens: [
        projectImg1,
        projectImg2,
        projectImg3,
        projectImg4,
        projectImg5,
        projectImg6,
        projectImg7,
      ],
      autor: [{
        img: persona5,
        nome: "Rafael Costa Moreira",
        perfil: {
          img: persona5,
          nome: 'Rafael Costa Moreira',
          categoria: 'Graduação - Ciência da Computação',
          bio: `
            Olá, sou estudante de graduação em Ciência da Computação, atualmente no 4º semestre, 
            com interesse especial na área de redes de computadores. Participo de projetos acadêmicos voltados 
            à configuração e segurança de redes, além de estar em constante desenvolvimento de habilidades práticas
            em protocolos, infraestrutura e administração de sistemas. Busco aprofundar meus conhecimentos em redes 
            corporativas, cloud computing e segurança da informação.
          `,
          email: '#',
          github: '#',
        },
      }],
      orientador: {
        img: persona3,
        nome: "Diego Nascimento Silva",
        perfil: {
          img: persona3,
          nome: 'Diego Nascimento Silva',
          categoria: 'Docente - Bioinformática - Ciência da Computação',
          bio: `
            Dr. Diego Nascimento Silva é professor adjunto na Universidade Federal do Pará (UFPA), com doutorado 
            em Bioinformática pela UFMG e estágio no Max Planck Institute for Informatics, na Alemanha. Realizou 
            pós-doutorados na UFMG, USP (CENA) e na Universidad de Buenos Aires. Atua na interface entre Computação 
            e Biologia, com foco em bioinformática, genômica e desenvolvimento de algoritmos para análise de dados 
            biológicos. Também orienta alunos de pós-graduação e participa de projetos financiados por agências de 
            fomento.
          `,
          email: '#',
          lattes: '#',
        },
      },
      detalhes: {
        categoria: "TCC",
        situacao: "Em desenvolvimento",
        data_publicacao: "15/06/2025",
        areas_relacionadas: [
          "Redes",
          "Engenharia de Software",
          "Arquitetura",
          "IA",
          "Visão computacional"
        ]
      },
      source_code: "#",
      pdf_publicacao: "#"
    },
    "0002":{
      img_background: "/imgs/project-image-2.png",
      tags: ["Arquitetura", "Visão computacional"],
      titulo: "Nome completo do projeto 2",
      descricao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      //url_video_youtube: "https://www.youtube.com/embed/01dn67QubYQ?si=p3Q9Gj3p0Sb_LIfY",
      imagens: [
        projectImg1,
        projectImg2,
        projectImg3,
        projectImg4,
      ],
      autor: [
        {
          img: persona5,
          nome: "Rafael Costa Moreira",
          perfil: {
            img: persona5,
            nome: 'Rafael Costa Moreira',
            categoria: 'Graduação - Ciência da Computação',
            bio: `
              Olá, sou estudante de graduação em Ciência da Computação, atualmente no 4º semestre, 
              com interesse especial na área de redes de computadores. Participo de projetos acadêmicos voltados 
              à configuração e segurança de redes, além de estar em constante desenvolvimento de habilidades práticas
              em protocolos, infraestrutura e administração de sistemas. Busco aprofundar meus conhecimentos em redes 
              corporativas, cloud computing e segurança da informação.
            `,
            email: '#',
            github: '#',
          },
        },
        {
          img: persona4,
          nome: "Isabela Martins Duarte",
          perfil: {
            img: persona4,
            nome: 'Isabela Martins Duarte',
            categoria: 'Graduação - Ciência da Computação',
            bio: `
              Sou aluna de graduação do curso de Ciência da Computação na UFPA, atualmente no 6º semestre. 
              Sou desenvolvedora web, com foco na parte de backend, mas pretendo seguir uma carreira fullstack. 
              Também tenho interesse em outras áreas como X, Y e Z.
            `,
            email: '#',
            github: '#',
          },
        },
        {
          img: persona6,
          nome: "Camila Renata Oliveira Santos",
          perfil: {
            img: persona6,
            nome: 'Camila Renata Oliveira Santos',
            categoria: 'Graduação - Ciência da Computação',
            bio: `
              Sou estudante do 8º semestre de Ciência da Computação, com ênfase em Engenharia de Software. 
              Atuo no desenvolvimento de aplicações web e mobile, com experiência em metodologias ágeis, arquitetura de software e testes automatizados. 
              Participo de projetos acadêmicos e de iniciação científica voltados à melhoria de processos de desenvolvimento e qualidade de software. 
              Meu foco está na criação de soluções escaláveis e no uso de boas práticas de engenharia para construção de sistemas eficientes e robustos.
            `,
            email: '#',
            github: '#',
            lattes: '#',
          },
        },
      ],
      detalhes: {
        categoria: "Graduação",
        situacao: "Finalizado",
        data_publicacao: "10/07/2025",
        areas_relacionadas: [
          "Engenharia de Software",
          "Arquitetura",
          "Visão computacional"
        ]
      },
      github_code: "#"
    }
  });

  const [SearchResults, setSearchResults] = useState<SearchResults[]>([
    {
      id_projeto: '0001',
      img: '/imgs/project-image-1.png',
      titulo: 'Nome completo do projeto 1',
      tags: ["Redes", "Engenharia de Software", "IA"],
      categoria: 'TCC',
      autor: [{
        img: persona5,
        nome: "Autor 1"
      }],
    },
    {
      id_projeto: '0002',
      img: '/imgs/project-image-2.png',
      titulo: 'Nome completo do projeto 2',
      tags: ["Arquitetura", "Visão computacional"],
      categoria: 'Graduação',
      autor: [
        {
          img: persona5,
          nome: "Autor 1"
        },
        {
          img: persona6,
          nome: "Autor 2"
        },
        {
          img: persona4,
          nome: "Autor 3"
        },
      ],
    },
  ]);

  function ProjectsData(id_projeto: string){
    return projectsDataArr[id_projeto];
  };

  function SetProjectsData(){
    setProjectsDataArr({});
  };
  
  return{
    ProjectsData: {
      get: ProjectsData,
      set: SetProjectsData,
    },
    SearchResults: {
      get: SearchResults,
      set: setSearchResults,
    },
  };
};

