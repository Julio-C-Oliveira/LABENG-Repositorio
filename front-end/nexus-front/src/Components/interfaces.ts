// Tela inicial


// Tela de "resultados da pesquisa"
export interface SearchResults{
  img: string,
  titulo: string,
  tags: string[],
  categoria: string,
  id_projeto: string,
  autor: {
    img: string,
    nome: string,
  }[],
};

// Tela de perfil do projeto
export interface ProjectProfile{
  img_background: string,
  tags: string[],
  titulo: string,
  descricao: string,

  url_video_youtube?: string,
  imagens?: string[],

  autor: {
    img: string,
    nome: string,
    perfil: UserProfile,
  }[],
  orientador?: {
    img: string,
    nome: string,
    perfil: UserProfile,
  },
  detalhes: {
    categoria: string,
    situacao: string, // Finalizado; Em desenvolvimento; Parado; 
    data_publicacao: string,
    areas_relacionadas: string[],
  },

  source_code?: string,
  github_code?: string,
  pdf_publicacao?: string,
}

// Tela de "enviar projeto"


// Perfil do usuário
export interface UserProfile{
  img: string,
  nome: string,
  categoria: string,
  bio: string,
  email?: string,
  github?: string,
  lattes?: string,
}
