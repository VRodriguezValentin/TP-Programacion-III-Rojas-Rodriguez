import { Celular } from "../modelos/celular.js";
import { Accesorio } from "../modelos/accesorio.js";

class ControlPrincipal{
    Modelo;
    VistaPrincipal;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaPrincipal = p_vista;
        //this.obtenerProductos()
        this.registrarControlador();
    }


    obtenerProductos() {
        const spinner = document.getElementById('spinner-container');
        spinner.style.display = 'flex';

        fetch('http://localhost:3036/api/productos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const productos = createProductos(data);
                dibujarProductos(productos);
            })
            .catch(error => {
                console.error('Error en la peticion', error);
                alert('Error al cargar los productos.\n\nVuelva a intentarlo en otro momento:(');
            })
            .finally(() => {
                spinner.style.display = 'none';
            });
    }

    createProductos(data) {

        this.Modelo.Productos = data.map(
            (x)=>{
                if(x.modelo){
                    return new Celular(x.id, x.marca, x.precio, x.imagen, x.activo , x.modelo, x.color, x.almacenamiento, x.ram);
                }else{
                    return new Accesorio(x.id, x.marca, x.precio, x.imagen, x.activo, x.tipo, x.compatibilidad);
                }
            }
        );
    }

    dibujarProductos(productos){
        const panelCelulares = document.getElementById('panel-derecho-celulares')
        const panelAccesorios = document.getElementById('panel-derecho-accesorios')

        productos.forEach(prod => {
            const div = document.createElement('div');
            div.classList.add('producto');

            const img = document.createElement('img');
            img.src = prod.imagen;
            prod instanceof Celular ? img.alt = 'Imagen de Celular' : img.alt = 'Imagen de Accesorio'
            img.classList.add('img-producto');

            const name = document.createElement('h3') 
            prod instanceof Celular ? name.textContent = prod.marca + ' ' + prod.modelo : name.textContent = prod.tipo + ' ' + prod.marca

            if (prod instanceof Celular){
                let p_color = document.createElement('p');
                p_color.textContent = prod.color;

                let p_almacenamiento = document.createElement('p');
                p_almacenamiento.textContent = prod.almacenamiento;

                let p_ram = document.createElement('p');
                p_ram.textContent = prod.ram;

            } else{
                let p_tipo = document.createElement('p');
                p_tipo.textContent = prod.tipo;

                let p_compatibilidad = document.createElement('p');
                p_compatibilidad.textContent = prod.compatibilidad;
            }

            const p_precio = document.createElement('p');
            p_precio.textContent = prod.precio;

            const btnCarrito = document.createElement('button');
            btnCarrito.textContent = 'Agregar al carrito'
            btnCarrito.classList.add('btn-carrito');

            div.appendChild(img);
            div.appendChild(name);
            if (prod instanceof Celular){
                div.appendChild(p_color);
                div.appendChild(p_almacenamiento);
                div.appendChild(p_ram);
            } else {
                div.appendChild(p_tipo);
                div.appendChild(p_compatibilidad);
            }
            div.appendChild(p_precio);
            div.appendChild(btnCarrito);

            prod instanceof Celular ? panelCelulares.appendChild(div) : panelAccesorios.appendChild(div);
        });
    }

    registrarControlador(){

        this.VistaPrincipal.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./index.html';
        })

        this.VistaPrincipal.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaPrincipal.panelIzquierdo.imgCelular.addEventListener("click", (e) =>{

            document.getElementById("panel-derecho-celulares").style.display = "grid";
            document.getElementById("panel-derecho-accesorios").style.display = "none";

        })

        this.VistaPrincipal.panelIzquierdo.imgAccesorio.addEventListener("click", (e) =>{

            document.getElementById("panel-derecho-celulares").style.display = "none";
            document.getElementById("panel-derecho-accesorios").style.display = "grid";

        })
    }

}

export { ControlPrincipal };