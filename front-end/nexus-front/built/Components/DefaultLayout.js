"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLayout = DefaultLayout;
var react_router_1 = require("react-router");
require("./Fonts.css");
require("./GlobalStyle.css");
var DefaultLayout_module_css_1 = require("./DefaultLayout.module.css");
var react_1 = require("@phosphor-icons/react");
var nexus_logo_svg_1 = require("/logo-nexus/nexus-logo.svg");
var user_img_png_1 = require("/imgs/user-img.png");
function DefaultLayout() {
    return (<div className={DefaultLayout_module_css_1.default.container}>
      <header className={DefaultLayout_module_css_1.default.header}>
        <react_router_1.NavLink className={DefaultLayout_module_css_1.default.logo} to={'/inicio'}>
          <img src={nexus_logo_svg_1.default} alt="Logo da plataforma"/>
        </react_router_1.NavLink>
        <div className={DefaultLayout_module_css_1.default.header_wrapper}>
          <button className={DefaultLayout_module_css_1.default.send_project_bttn} type="button">
            <react_1.CloudArrowUpIcon />
            <span>Enviar projeto</span>
          </button>
          <button className={DefaultLayout_module_css_1.default.profileBttn} type="button">
            <img src={user_img_png_1.default} alt="Imagem de perfil do usuário"/>
          </button>
        </div>
      </header>
      <section className={DefaultLayout_module_css_1.default.main}>
        <react_router_1.Outlet />
      </section>
    </div>);
}
;
