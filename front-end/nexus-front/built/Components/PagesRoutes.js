"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagesRoutes;
var react_router_1 = require("react-router");
var DefaultLayout_1 = require("./DefaultLayout");
var GlobalContext_1 = require("./GlobalContext");
var LandingPage_1 = require("./Pages/LandingPage/LandingPage");
var Login_1 = require("./Pages/Login/Login");
var Home_1 = require("./Pages/Home/Home");
var Results_1 = require("./Pages/Results/Results");
var Project_1 = require("./Pages/Project/Project");
function PagesRoutes() {
    return (<react_router_1.BrowserRouter>
      <react_router_1.Routes>
        <react_router_1.Route path="/" element={<GlobalContext_1.GlobalContext />}>
          <react_router_1.Route path="/" element={<LandingPage_1.LandingPage />}/>
          <react_router_1.Route path="/login" element={<Login_1.Login />}/>

          <react_router_1.Route path="/inicio" element={<DefaultLayout_1.DefaultLayout />}>
            <react_router_1.Route path="/inicio" element={<Home_1.Home />}/>
            <react_router_1.Route path="/inicio/resultados" element={<Results_1.Results />}/>
            <react_router_1.Route path="/inicio/projeto" element={<Project_1.Project />}/>
          </react_router_1.Route>
        </react_router_1.Route>
      </react_router_1.Routes>
    </react_router_1.BrowserRouter>);
}
