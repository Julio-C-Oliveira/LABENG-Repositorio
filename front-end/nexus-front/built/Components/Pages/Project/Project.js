"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = Project;
var react_router_1 = require("react-router");
var Project_module_css_1 = require("./Project.module.css");
var react_1 = require("@phosphor-icons/react");
var user_img_png_1 = require("/imgs/user-img.png");
var persona_img_2_png_1 = require("/imgs/persona-img-2.png");
var github_icon_png_1 = require("/imgs/github-icon.png");
function Project() {
    var navigate = (0, react_router_1.useNavigate)();
    return (<div className={Project_module_css_1.default.container}>
      <div className={Project_module_css_1.default.gradient}></div>
      <section className={Project_module_css_1.default.project_section}>
        <div className={Project_module_css_1.default.wrapper}>
          <ul className={Project_module_css_1.default.tags}>
            <li>Palavra-chave 1</li>
            <li>Palavra-chave 2</li>
            <li>Palavra-chave 3</li>
          </ul>
          <h1 className={Project_module_css_1.default.project_title}>Nome completo do projeto 1</h1>
          <p className={Project_module_css_1.default.project_description}>
            There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form, by injected humour, or randomised words which 
            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
            necessary, making this the first true generator on the Internet. It uses a dictionary 
            of over 200 Latin words, combined with a handful of model sentence structures, to generate 
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
          <div className={Project_module_css_1.default.project_highlight}>
            <iframe src="https://www.youtube.com/embed/01dn67QubYQ?si=p3Q9Gj3p0Sb_LIfY" title="YouTube video player" 
    //frameborder={0} 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className={Project_module_css_1.default.project_team}>
            <div className={Project_module_css_1.default.team_wrapper}>
              <div className={Project_module_css_1.default.profile_img}>
                <button type="button">
                  <img src={user_img_png_1.default} alt="Imagem do perfil do autor do projeto"/>
                </button>
              </div>
              <span>Autor</span>
            </div>
            <div className={Project_module_css_1.default.team_wrapper}>
              <div className={Project_module_css_1.default.profile_img}>
                <button type="button">
                  <img src={persona_img_2_png_1.default} alt="Imagem do perfil do orientador do projeto"/>
                </button>
              </div>
              <span>Orientador</span>
            </div>
          </div>
          <ul className={Project_module_css_1.default.project_details}>
            <li className={Project_module_css_1.default.row}>
              <span className={Project_module_css_1.default.title}>Categoria</span>
              <span className={Project_module_css_1.default.value}>TCC</span>
            </li>
            <li className={Project_module_css_1.default.row}>
              <span className={Project_module_css_1.default.title}>Situação</span>
              <span className={"".concat(Project_module_css_1.default.value, " ").concat(Project_module_css_1.default.finalizado)}>Finalizado</span>
            </li>
            <li className={Project_module_css_1.default.row}>
              <span className={Project_module_css_1.default.title}>Publicação</span>
              <span className={Project_module_css_1.default.value}>15/06/2025</span>
            </li>
            <li className={"".concat(Project_module_css_1.default.row, " ").concat(Project_module_css_1.default.row_tags)}>
              <span className={Project_module_css_1.default.title}>Áreas relacionadas</span>
              <ul className={Project_module_css_1.default.details_tags}>
                <li className={Project_module_css_1.default.tag}>Redes</li>
                <li className={Project_module_css_1.default.tag}>Engenharia de Software</li>
                <li className={Project_module_css_1.default.tag}>Arquitetura</li>
                <li className={Project_module_css_1.default.tag}>IA</li>
                <li className={Project_module_css_1.default.tag}>Visão computacional</li>
              </ul>
            </li>
          </ul>
          <div className={Project_module_css_1.default.project_links}>
            <a className={Project_module_css_1.default.codigo_fonte} href="#">
              <react_1.CodeIcon /> Código-fonte
            </a>
            <a className={Project_module_css_1.default.github} href="#">
              <img src={github_icon_png_1.default} alt="Logo do Github"/>
              GitHub
            </a>
            <a className={Project_module_css_1.default.pdf_publicacao} href="#">
              <react_1.FilePdfIcon /> PDF da publicação
            </a>
          </div>
        </div>
      </section>
      <button className={Project_module_css_1.default.back_bttn} type="button" onClick={function () { return navigate('/inicio/resultados'); }}>
        <react_1.ArrowBendDownLeftIcon />
        <span>Voltar</span>
      </button>
    </div>);
}
;
