import { Celular } from "../models/celular.js";
import { Accesorio } from "../models/accesorio.js";

class ControlPrincipal{
    Modelo;
    VistaPrincipal;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaPrincipal = p_vista;
        this.obtenerProductos()
        this.registrarControlador();
    }


    obtenerProductos() {
        const spinner = document.getElementById('spinner-container');
        spinner.style.display = 'flex';

        fetch('http://localhost:3000/api/productos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const productos = this.createProductos(data);
                console.log(productos);
                this.dibujarProductos(productos);
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
        var productos = this.Modelo.Productos;
        productos = data.map(
            (x)=>{
                if(x.modelo){
                    return new Celular(x.id, x.marca, x.precio, x.imagen, x.activo , x.modelo, x.color, x.almacenamiento, x.ram);
                }else{
                    return new Accesorio(x.id, x.marca, x.precio, x.imagen, x.activo, x.tipo, x.compatibilidad);
                }
            }
        );

        return productos;
    }

    dibujarProductos(productos){
        const panelCelulares = document.getElementById('panel-derecho-celulares')
        const panelAccesorios = document.getElementById('panel-derecho-accesorios')

        panelCelulares.innerHTML = '';
        panelAccesorios.innerHTML = '';

        productos.forEach(prod => {

            console.log(prod);

            const div = document.createElement('div');
            div.classList.add('producto');

            const img = document.createElement('img');
            img.src = prod.imagen;
            prod instanceof Celular ? img.alt = 'Imagen de Celular' : img.alt = 'Imagen de Accesorio'
            img.classList.add('img-producto');

            const name = document.createElement('h3') 
            prod instanceof Celular ? name.textContent = prod.marca + ' ' + prod.modelo : name.textContent = prod.tipo + ' ' + prod.marca

            if (prod instanceof Celular){
                var p_color = document.createElement('p');
                p_color.textContent = `Color: ${prod.color}`;

                var p_almacenamiento = document.createElement('p');
                p_almacenamiento.textContent = `Almacenamiento: ${prod.almacenamiento}GB`;

                var p_ram = document.createElement('p');
                p_ram.textContent = `Memoria RAM: ${prod.ram}GB`;

            } else{
                var p_compatibilidad = document.createElement('p');
                p_compatibilidad.textContent = `Compatibilidad: ${prod.compatibilidad}`;
            }

            const p_precio = document.createElement('p');
            p_precio.textContent = `$${prod.precio}`;

            const btnCarrito = document.createElement('button');
            btnCarrito.textContent = 'Agregar al carrito'
            btnCarrito.classList.add('btn-carrito');

            btnCarrito.addEventListener('click', (e) => {
                e.preventDefault();

                const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];

                productosCarrito.push(prod);
                localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));

                console.log(productosCarrito);

                alert('El producto ha sido guardado.');
            });

            div.appendChild(img);
            div.appendChild(name);
            if (prod instanceof Celular){
                div.appendChild(p_color);
                div.appendChild(p_almacenamiento);
                div.appendChild(p_ram);
            } else {
                div.appendChild(p_compatibilidad);
            }
            div.appendChild(p_precio);
            div.appendChild(btnCarrito);

            prod instanceof Celular ? panelCelulares.appendChild(div) : panelAccesorios.appendChild(div);
        });
    }

    registrarControlador(){

        this.VistaPrincipal.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./home.html';
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

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaPrincipal.navbar.titulo.textContent = `Bienvenido ${nombreCliente}!`;
        }
        else {
            this.VistaPrincipal.navbar.titulo.textContent = 'Bienvenido Cliente!';
        }
    }

}

export { ControlPrincipal };