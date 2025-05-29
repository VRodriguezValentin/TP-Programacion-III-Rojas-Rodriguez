import { Modelo } from "./modelos/modelo.js";

import { VistaLogin }     from "./vistas/vistaLogin.js";
import { VistaPrincipal } from "./vistas/vistaPrincipal.js";
import { VistaCarrito }   from "./vistas/vistaCarrito.js";
import { VistaTicket }    from "./vistas/vistaTicket.js";

import { ControlLogin }     from "./controladores/controladorLogin.js";
import { ControlPrincipal } from "./controladores/controladorPrincipal.js";
import { ControlCarrito }   from "./controladores/controladorCarrito.js";
import { ControlTicket }    from "./controladores/controladorTicket.js";

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

   if (path.includes("carrito.html")) {
      const vistaCarrito = new VistaCarrito();
      new ControlCarrito(modelo, vistaCarrito);
   }

   if (path.includes("ticket.html")) {
      const vistaTicket = new VistaTicket();
      new ControlTicket(modelo, vistaTicket);
   }
});