import { Modelo } from "./modelos/modelo.js";

import { VistaLogin } from "./vistas/vistaLogin.js";
import { VistaPrincipal } from "./vistas/vistaPrincipal.js";

import { ControlLogin } from "./controladores/controladorLogin.js";
import { ControlPrincipal } from "./controladores/controladorPrincipal.js";

document.addEventListener("DOMContentLoaded", () => {
   const modelo = new Modelo();
   const path = window.location.pathname;

   if (path.includes("bienvenido.html")) {
      const vistaLogin = new VistaLogin();
      new ControlLogin(modelo, vistaLogin);
   }

   if (path.includes("index.html")) {
      const vistaPrincipal = new VistaPrincipal();
      new ControlPrincipal(modelo, vistaPrincipal);
   }

});