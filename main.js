import { Modelo } from "../Modelo/modelo.js";
import { VistaLogin } from "../Vista/Cliente/vistaLogin.js";
import { VistaPrincipal } from "../Vista/Cliente/vistaPrincipal.js";
import { ControlLogin } from "../Controlador/Cliente/controladorLogin.js";
import { ControlPrincipal } from "../Controlador/Cliente/controladorPrincipal.js";

/*window.addEventListener("DOMContentLoaded", () => {
    var modelo   = new Modelo();
    var vista    = new VistaLogin();
    var control  = new ControlLogin(vista, modelo);
});*/

window.addEventListener("DOMContentLoaded", () => {
    var modelo   = new Modelo();
    var vista    = new VistaPrincipal();
    var control  = new ControlPrincipal(vista, modelo);
});