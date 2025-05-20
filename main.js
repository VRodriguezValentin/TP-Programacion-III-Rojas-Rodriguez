import { Modelo, Producto, Celular, Accesorio } from "../Modelo/modelo.js";
import { VistaLogin, VistaPrincipal, VistaCarrito, VistaTicket } from "../Vista/vistaCliente.js";
import { ControlLogin, ControlPrincipal, ControlCarrito, ControlTicket } from "../Controlador/controladorCliente.js";

var modelo   = new Modelo();
var vista    = new VistaLogin();
var control  = new ControlLogin(modelo, vista);