import { Modelo } from "../Modelo/modelo.js";
import { VistaLogin } from "../Vista/Cliente/vistaLogin.js";
import { ControlLogin } from "../Controlador/Cliente/controllerLogin.js";

var modelo   = new Modelo();
var vista    = new VistaLogin();
var control  = new ControlLogin(modelo, vista);