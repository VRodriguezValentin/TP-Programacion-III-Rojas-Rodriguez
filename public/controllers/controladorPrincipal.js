import { Celular } from "../models/celular.js";
import { Accesorio } from "../models/accesorio.js";

class ControlPrincipal{
    Modelo;
    VistaPrincipal;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaPrincipal = p_vista;
        this.obtenerProductos('celular', 0)
        this.registrarControlador();
    }


    obtenerProductos(tipo, offset, callback) {
        const spinner = document.getElementById('spinner-container');
        spinner.style.display = 'flex';

        fetch(`/api/productos/${tipo}/${offset}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                const productos = this.createProductos(data);
                this.dibujarProductos(productos);
                if (callback) callback(productos.length);
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

        var productosActivos = data.filter(x => x.activo);

        productos = productosActivos.map(
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

                const carritoSpan = this.VistaPrincipal.navbar.carritoSpan;
                localStorage.getItem('productosCarrito') ? carritoSpan.textContent = JSON.parse(localStorage.getItem('productosCarrito')).length : carritoSpan.textContent = 0;

                btnCarrito.disabled = true;
                btnCarrito.style.backgroundColor = '#28a745';
                btnCarrito.innerHTML = '✔';

                setTimeout(() => {
                    btnCarrito.disabled = false;
                    btnCarrito.style.backgroundColor = '';
                    btnCarrito.textContent = 'Agregar al carrito';
                }, 1200);
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

        const carritoSpan = this.VistaPrincipal.navbar.carritoSpan;
        localStorage.getItem('productosCarrito') ? carritoSpan.textContent = JSON.parse(localStorage.getItem('productosCarrito')).length : carritoSpan.textContent = 0;

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaPrincipal.navbar.titulo.textContent = `Bienvenido ${nombreCliente}!`;
        }
        else {
            this.VistaPrincipal.navbar.titulo.textContent = 'Bienvenido Cliente!';
        }

        this.VistaPrincipal.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./home.html';
        })

        // Cambiar a celulares
        this.VistaPrincipal.panelIzquierdo.celulares.addEventListener("click", (e) => {
            this.VistaPrincipal.panelDerecho.celulares.style.display = "grid";
            this.VistaPrincipal.panelDerecho.accesorios.style.display = "none";
            this.VistaPrincipal.panelDerecho.btnCelulares.style.display = "flex";
            this.VistaPrincipal.panelDerecho.btnAccesorios.style.display = "none";
            localStorage.setItem('offsetCelulares', 0);
            this.obtenerProductos('celular', 0);
        });

        // Cambiar a accesorios
        this.VistaPrincipal.panelIzquierdo.accesorios.addEventListener("click", (e) => {
            this.VistaPrincipal.panelDerecho.celulares.style.display = "none";
            this.VistaPrincipal.panelDerecho.accesorios.style.display = "grid";
            this.VistaPrincipal.panelDerecho.btnCelulares.style.display = "none";
            this.VistaPrincipal.panelDerecho.btnAccesorios.style.display = "flex";
            localStorage.setItem('offsetAccesorios', 0);
            this.obtenerProductos('accesorio', 0);
        });

        // Siguiente celulares
        this.VistaPrincipal.panelDerecho.sigCelulares.addEventListener("click", (e) => {
            e.preventDefault();

            let offset = parseInt(localStorage.getItem('offsetCelulares')) || 0;
            offset += 4;
            this.obtenerProductos('celular', offset, (cantidad) => {
                if (cantidad > 0) {
                    localStorage.setItem('offsetCelulares', offset);
                } else {
                    offset -= 4;
                    localStorage.setItem('offsetCelulares', offset);
                    alert('No hay más productos para mostrar.');
                    this.obtenerProductos('celular', offset);
                }
            });
        });

        // Anterior celulares
        this.VistaPrincipal.panelDerecho.antCelulares.addEventListener("click", (e) => {
            e.preventDefault();

            let offset = parseInt(localStorage.getItem('offsetCelulares')) || 0;
            offset = Math.max(0, offset - 4);
            localStorage.setItem('offsetCelulares', offset);
            this.obtenerProductos('celular', offset);
        });

        // Siguiente accesorios
        this.VistaPrincipal.panelDerecho.sigAccesorios.addEventListener("click", (e) => {
            e.preventDefault();

            let offset = parseInt(localStorage.getItem('offsetAccesorios')) || 0;
            offset += 4;
            this.obtenerProductos('accesorio', offset, (cantidad) => {
                if (cantidad > 0) {
                    localStorage.setItem('offsetAccesorios', offset);
                } else {
                    offset -= 4;
                    localStorage.setItem('offsetAccesorios', offset);
                    alert('No hay más productos para mostrar.');
                    this.obtenerProductos('accesorio', offset);
                }
            });
        });

        // Anterior accesorios
        this.VistaPrincipal.panelDerecho.antAccesorios.addEventListener("click", (e) => {
            e.preventDefault();

            let offset = parseInt(localStorage.getItem('offsetAccesorios')) || 0;
            offset = Math.max(0, offset - 4);
            localStorage.setItem('offsetAccesorios', offset);
            this.obtenerProductos('accesorio', offset);
        });

        if (localStorage.getItem("tema") === "oscuro") {
            document.body.classList.remove("bright");
        } else if (localStorage.getItem("tema") === "claro") {
            document.body.classList.add("bright");
        }

        this.VistaPrincipal.btnTema.addEventListener("click", (e) => {
            e.preventDefault();

            if (document.body.classList.contains("bright")) {
                document.body.classList.remove("bright");
                localStorage.setItem("tema", "oscuro");
            } else {
                document.body.classList.add("bright");
                localStorage.setItem("tema", "claro");
            }
        });


    }

}

export { ControlPrincipal };