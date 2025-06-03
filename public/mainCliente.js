import { Modelo } from "./models/modelo.js";

import { VistaLogin }     from "./views/vistaLogin.js";
import { VistaPrincipal } from "./views/vistaPrincipal.js";
import { VistaCarrito }   from "./views/vistaCarrito.js";
import { VistaTicket }    from "./views/vistaTicket.js";

import { ControlLogin }     from "./controllers/controladorLogin.js";
import { ControlPrincipal } from "./controllers/controladorPrincipal.js";
import { ControlCarrito }   from "./controllers/controladorCarrito.js";
import { ControlTicket }    from "./controllers/controladorTicket.js";

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