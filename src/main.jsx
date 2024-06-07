import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./paginas/Login";
import ListagemDePrestadoras from "./paginas/ListagemDePrestadoras";
import ConsultaServicos from "./paginas/ConsultaServicos";
import Perfil from "./paginas/Perfil";
import Financeiro from "./paginas/ExtratoFinanceiro";
import Solicitacao from "./paginas/SolicitacaoServicos";
import RelatorioRendimento from "./paginas/RelatorioDeRendimento";
import { Root } from "./Root";
import NotFound from "./paginas/NotFound";
import { LayoutDash } from "./LayoutDash";

const routes = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <LayoutDash/>,
        children:[
          {
            path: "/listagemprestadoras",
            element: <ListagemDePrestadoras/>,
          },
          {
            path: "/servicos",
            element: <ConsultaServicos/>,
          },
          {
            path: "/perfil",
            element: <Perfil/>,
          },
          {
            path: "/financeiro",
            element: <Financeiro/>,
          },
          {
            path: "/solicitacaoservico",
            element: <Solicitacao/>,
          },
          {
            path: "/relatorioderendimento",
            element: <RelatorioRendimento/>,
          }
        ],
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/404",
        element: <NotFound/>,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
