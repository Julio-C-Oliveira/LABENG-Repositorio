"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = LandingPage;
var react_router_1 = require("react-router");
var LandingPage_module_css_1 = require("./LandingPage.module.css");
var nexus_logo_svg_1 = require("/logo-nexus/nexus-logo.svg");
var nexus_logotipo_svg_1 = require("/logo-nexus/nexus-logotipo.svg");
function LandingPage() {
    return (<div className={LandingPage_module_css_1.default.container}>
      <img className={LandingPage_module_css_1.default.logo} src={nexus_logo_svg_1.default} alt="Logo da plataforma"/>
      <h1>Página em construção...</h1>
      <react_router_1.NavLink to={'/login'}>
        Acessar plataforma
      </react_router_1.NavLink>

      <img className={LandingPage_module_css_1.default.bg_img} src={nexus_logotipo_svg_1.default} alt="Logotipo da plataforma"/>
    </div>);
}
;
