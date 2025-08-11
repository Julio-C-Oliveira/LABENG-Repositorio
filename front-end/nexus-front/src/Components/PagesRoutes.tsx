import { BrowserRouter, Routes, Route } from "react-router";

import { DefaultLayout } from "./DefaultLayout";
import { GlobalContext } from "./GlobalContext";

//import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Results } from "./Pages/Results/Results";
import { Project } from "./Pages/Project/Project";
import { SendProject } from "./Pages/SendProject/SendProject";
export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalContext />}>
          {/*<Route path="/" element={<LandingPage/>}/> */}
          <Route path="/login" element={<Login />} />

          <Route path="/inicio" element={<DefaultLayout />}>
            <Route path="/inicio" element={<Home />} />
            <Route path="/inicio/resultados" element={<Results />} />
            <Route path="/inicio/projeto" element={<Project />} />
            <Route path="/inicio/enviarProjeto" element={<SendProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
