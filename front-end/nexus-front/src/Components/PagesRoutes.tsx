import { BrowserRouter, Route, Routes } from "react-router";

import { DefaultLayout } from "./DefaultLayout";
import { GlobalContext } from "./GlobalContext";

//import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { AuthContextProvider } from "../Contexts/AuthContext";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Project } from "./Pages/Project/Project";
import { Results } from "./Pages/Results/Results";
import { SendProject } from "./Pages/SendProject/SendProject";

export default function PagesRoutes() {
  return (
    <BrowserRouter>
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<GlobalContext />}>
                {/*<Route path="/" element={<LandingPage/>}/> */}
                <Route path="/login" element={<Login />} />

                <Route path="" element={<DefaultLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="/resultados" element={<Results />} />
                    <Route path="/projeto/:slug" element={<Project />} />
                    <Route path="/enviarProjeto" element={<SendProject />} />
                </Route>
                </Route>
            </Routes>
        </AuthContextProvider>
    </BrowserRouter>
  );
}
