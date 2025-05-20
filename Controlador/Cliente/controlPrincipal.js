import { Celular } from "../../Modelo/celular.js";
import { Accesorio } from "../../Modelo/accesorio.js";

class ControlPrincipal{
    Modelo;
    VistaPrincipal;
    constructor(p_vista, p_modelo, datos_bd_json){
        this.Modelo = p_modelo;
        this.VistaPrincipal = p_vista;
        this.cargaInicial(datos_bd_json);
        this.registrarControlador();
    }

    cargaInicial(array) {

        this.Modelo.Productos = array.map(
            (x)=>{
                if(x.modelo){
                    return new Celular(x.id, x.marca, x.precio, x.imagen, x.activo , x.modelo, x.color, x.almacenamiento, x.ram);
                }else{
                    return new Accesorio(x.id, x.marca, x.precio, x.imagen, x.activo, x.tipo, x.compatibilidad);
                }
            }
        );
    }

    registrarControlador(){

        /*...*/

        this.VistaPrincipal.panelIzquierdo.imgCelular.addEventListener("click", (e) =>{

            const arrayCelulares = this.Modelo.Productos.filter(producto => {
                return producto instanceof Celular;
            })

            //this.Vista.dibujarFilas(arrayCelulares);
            
        })

        this.VistaPrincipal.panelIzquierdo.imgAccesorio.addEventListener("click", (e) =>{

            const arrayAccesorios = this.Modelo.Productos.filter(producto => {
                return producto instanceof Accesorio;
            })

            //this.Vista.dibujarFilas(arrayAccesorios);
            
        })

        
    }

}

export { ControlPrincipal };