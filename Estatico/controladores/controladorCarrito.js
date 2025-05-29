class ControlCarrito{
    Modelo;
    VistaCarrito;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaCarrito = p_vista;
        this.cargarCarrito();
        this.registrarControlador();
    }


    cargarCarrito(){
        const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
        const carritoVacio = this.VistaCarrito.carrito.carritoVacio;
        const carritoFin = this.VistaCarrito.carrito.finCarrito;

        if (productosCarrito.length === 0) {
            carritoVacio.style.display = 'flex';
            carritoFin.style.display = 'none';
        } else {
            carritoVacio.style.display = 'none';
            carritoFin.style.display = 'flex';

            this.mostrarProductosCarrito(productosCarrito);

            carritoFin.total.textContent = `Total: $${calcularTotal(productosCarrito)}`;
        }
    }

    mostrarProductosCarrito(productosCarrito){
        const contenedorProductos = this.VistaCarrito.$("contenedor-productos");
        contenedorProductos.innerHTML = ''; // Limpiar el contenedor

        productosCarrito.forEach((producto) => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto-carrito');

            const imgProducto = document.createElement('img');
            imgProducto.src = producto.imagen;
            imgProducto.alt = producto.nombre;

            const nombreProducto = document.createElement('h3');
            nombreProducto.textContent = producto.nombre;

            const precioProducto = document.createElement('p');
            precioProducto.textContent = `Precio: $${producto.precio}`;

            /* Agregar botones (+) ; (-) ; (eliminar) */

            divProducto.appendChild(imgProducto);
            divProducto.appendChild(nombreProducto);
            divProducto.appendChild(precioProducto);

            contenedorProductos.appendChild(divProducto);
        });
    }

    calcularTotal(productosCarrito){
        return productosCarrito.reduce((total, producto) => {
            return total + producto.precio;
        }, 0);
    }

    registrarControlador(){

        this.VistaCarrito.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./index.html';
        })

        this.VistaCarrito.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaCarrito.carrito.finCarrito.btnCancelar.addEventListener("click", (e) =>{
            /* Vacia el array del carrito */
            window.location.href='./index.html';
        })

        this.VistaCarrito.carrito.finCarrito.btnFinalizar.addEventListener("click", (e) =>{
            window.location.href='./ticket.html';
        })
    }

}

export { ControlCarrito };