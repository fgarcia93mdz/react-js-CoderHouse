import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ArrivalsBoard from "./pages/board-tv/ArrivalsBoard";
import DeparturesBoard from "./pages/board-tv/DeparturesBoard";
import Login from "./pages/login/Login";
import Ingreso from "./pages/login/Ingreso";
import Institucional from "./pages/login/Institucional";
import Contacto from "./pages/login/Contacto";
import FormTicket from "./pages/securityUser/SecurityCreateTicket";
import FormTicketinformes from "./pages/informsUser/InformsCreateTicket";
import FormEditUser from "./pages/RRHHUser.jsx/FormEditUser";
import FormCreateUser from "./components/profile/FormCreateUser";
import SecurityHome from "./pages/securityUser/SecurityHome";
import InformsHome from "./pages/informsUser/InformsHome";
import Protected from "./components/protected/Protected";
import ListUsers from "./pages/RRHHUser.jsx/ListUsers";
import ListUsersApplication from "./pages/RRHHUser.jsx/ListUsersApplication";
import ListUsersLogs from "./pages/RRHHUser.jsx/ListUsersLogs";
import jwt_decode from "jwt-decode";
import NavBarContainer from "./components/navbar/NavBarContainer";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/not-found/NotFound";
import PageResetPassword from "./pages/RRHHUser.jsx/PageResetPassword";
import WritePassword from "./components/forms/FormChangePassword";
import WritePasswordFirstOne from "./components/forms/FormChangePasswordFirstLogin";
import InformsEditTicket from "./pages/informsUser/InformsEditTicketEntry";
import InformsEditTicketOnPlatform from "./pages/informsUser/InformsEditTicketOnPlatform";
import InformsEditTicketOffPlatform from "./pages/informsUser/InformsEditTicketOffPlatform";
import InformsEditTicketError from "./pages/informsUser/InformsEditTicketError";
import AdminTable from "./pages/adminUser/AdminTable";
import AdminTableMonth from "./pages/adminUser/AdminTableMonth";
import AdminCompaniesList from "./pages/adminUser/AdminCompaniesList";
import AdminCompaniesCreate from "./pages/adminUser/AdminCompaniesCreate";
import AdminCompaniesEdit from "./pages/adminUser/AdminCompaniesEdit";
import AdminIntercityEdit from "./pages/adminUser/AdminIntercityEdit";
import TableMarquesine from "./components/table/TableMarquesine";
import MarquesineCreate from "./pages/marquesine/MarquesineCreate";
import InterurbanosBoard from "./pages/board-tv/InterurbanosBoard";
import InterurbanosList from "./pages/adminUser/InterurbanosList";
import FormInterurbanosCreate from "./components/forms/FormInterurbanosCreate";
import EmpresasBoxPublic from "./pages/adminUser/EmpresasBoxPublic";
import AdminTerminal from "./pages/adminUser/AdminTerminal";
import Graphics from "./pages/graphics/Graphics";

const AppWebRouter = () => {
  const token = window.sessionStorage.getItem("jwt");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const primerClave = () => {
    navigate("/perfil/cambiarClavePorPrimeraVez");
  };
  React.useEffect(() => {
    if (token === undefined || token === null) {
      setIsLoggedIn(false);
    } else if (token !== undefined || token !== null) {
      const tokenDecoded = jwt_decode(token);
      setIsLoggedIn(true);
      setUserId(tokenDecoded.id);
      const estadoPassword = tokenDecoded.estado_password;
      if (estadoPassword === 0) {
        primerClave();
      }
    }
  }, [token]);

  return (
    <>
      <NavBarContainer />
      <Routes>
        <Route exact path="/" element={<Ingreso />} />
        <Route path="/tablero-arribos" element={<ArrivalsBoard />} />
        <Route path="/tablero-partidas" element={<DeparturesBoard />} />
        <Route path="/tablero-interurbanos" element={<InterurbanosBoard />} />
        <Route exact path="/login" element={<Login />} />
        {/* Sección de rutas para el footer*/}
        <Route path="/agencias" element={<EmpresasBoxPublic />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* fin */}
        <Route
          exact
          path="/ingreso"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Ingreso />
            </Protected>
          }
        />
        {/* Supervisor */}
        <Route
          exact
          path="/supervisor/datos-terminal"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTerminal editar="List" editado="OK" />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/datos-terminal/editar/IA"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTerminal editar="IA" />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/datos-terminal/editar/RS"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTerminal editar="RS" />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/datos-terminal/editar/LI"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTerminal editar="LI" />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/datos-terminal/editar/Logo"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTerminal editar="Logo" />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/marquesina"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <MarquesineCreate />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/marquesina/tabla"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <TableMarquesine />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/graficos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Graphics />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/interurbanos/crear"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormInterurbanosCreate />
            </Protected>
          }
        />
        <Route
          path="/perfil/editar"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormEditUser />
            </Protected>
          }
        />
        <Route
          path="/perfil/modificar_clave"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <WritePassword />
            </Protected>
          }
        />
        <Route
          path="/perfil/cambiarClavePorPrimeraVez"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <WritePasswordFirstOne />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/registro-de-operaciones"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTable />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/registros-de-operaciones-descarga"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminTableMonth />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/seguridad/control-de-acceso"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <SecurityHome />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/crear-ingreso"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormTicketinformes id={userId} />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/informes/control-de-plataforma"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsHome />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/tablero-arribos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ArrivalsBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/tablero-partidas"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <DeparturesBoard />
            </Protected>
          }
        />
        <Route
          path="/supervisor/tablero-interurbanos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InterurbanosBoard />
            </Protected>
          }
        />
        <Route
          path="/seguridad/tablero-interurbanos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InterurbanosBoard />
            </Protected>
          }
        />
        <Route
          path="/informes/tablero-interurbanos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InterurbanosBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/informes/control-de-plataforma/editar/ingreso/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicket />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/informes/control-de-plataforma/editar/en-plataforma/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicketOnPlatform />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ListUsers />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios/solicitudes-cambio-clave"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ListUsersApplication />
            </Protected>
          }
        />
        <Route
          exact
          path="/usuarios/solicitudDeClave"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ListUsersApplication />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios/registro"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ListUsersLogs />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios/crear"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormCreateUser />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios/restaurar-clave"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <PageResetPassword token={token} />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/usuarios/editar/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormEditUser />
            </Protected>
          }
        />
        <Route
          exact
          path="/seguridad/control-de-accesos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <SecurityHome />
            </Protected>
          }
        />
        <Route
          exact
          path="/seguridad/crear-ingreso"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormTicket />
            </Protected>
          }
        />
        <Route
          exact
          path="/seguridad/arribos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ArrivalsBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/seguridad/partidas"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <DeparturesBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsHome />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/crear-ingreso"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormTicketinformes id={userId} />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/arribos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ArrivalsBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/partidas"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <DeparturesBoard />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/editar/ingreso/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicket />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/editar/fuera-plataforma/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicketOffPlatform />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/editar/en-plataforma/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicketOnPlatform />
            </Protected>
          }
        />
        <Route
          exact
          path="/informes/editar/registro/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InformsEditTicketError />
            </Protected>
          }
        />
        <Route
          exact
          path="/usuarios"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Protected isLoggedIn={isLoggedIn}>
                <ListUsers />
              </Protected>
            </Protected>
          }
        />
        <Route
          exact
          path="/usuarios/crear"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Protected isLoggedIn={isLoggedIn}>
                <FormCreateUser />
              </Protected>
            </Protected>
          }
        />
        <Route
          exact
          path="/usuarios/restablecer-clave-usuarios"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Protected isLoggedIn={isLoggedIn}>
                <PageResetPassword token={token} />
              </Protected>
            </Protected>
          }
        />
        <Route
          exact
          path="/usuarios/editar/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <FormEditUser />
            </Protected>
          }
        />
        <Route
          exact
          path="/supervisor/empresas"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminCompaniesList />
            </Protected>
          }
        />
        <Route
          path="/supervisor/empresas/crear"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminCompaniesCreate />
            </Protected>
          }
        />
        <Route
          path="/supervisor/empresas/editar/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminCompaniesEdit />
            </Protected>
          }
        />
        <Route
          path="/supervisor/interurbano/editar/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminIntercityEdit />
            </Protected>
          }
        />
        <Route
          path="/supervisor/interurbanos"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <InterurbanosList />
            </Protected>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer edit="OK" />
    </>
  );
};

export default AppWebRouter;
