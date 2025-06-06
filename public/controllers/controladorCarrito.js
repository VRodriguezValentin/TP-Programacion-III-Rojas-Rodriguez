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

            this.VistaCarrito.carrito.total.textContent = `Total a Pagar: $${this.calcularTotal(productosCarrito)}`;
        }
    }

    agruparProductos(productosCarrito) {
        const mapa = new Map();
        productosCarrito.forEach(producto => {
            if (mapa.has(producto.id)) {
                mapa.get(producto.id).cantidad += 1;
            } else {
                mapa.set(producto.id, { ...producto, cantidad: 1 });
            }
        });
        return Array.from(mapa.values());
    }

    calcularTotal(productosCarrito){
        return productosCarrito.reduce((total, producto) => {
            return total + producto.precio;
        }, 0);
    }

    mostrarProductosCarrito(productosCarrito){
        const contenedorProductos = this.VistaCarrito.carrito.productosCarrito;
        contenedorProductos.innerHTML = '';

        const productosAgrupados = this.agruparProductos(productosCarrito);

        productosAgrupados.forEach((producto) => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto-carrito');

            const imgProducto = document.createElement('img');
            imgProducto.src = producto.imagen;
            imgProducto.alt = producto.modelo ? 'Imagen de Celular' : 'Imagen de Accesorio';
            imgProducto.classList.add('img-carrito');

            const nombreProducto = document.createElement('h3');
            nombreProducto.textContent = producto.modelo ? producto.marca + ' ' + producto.modelo : producto.tipo + ' ' + producto.marca;

            const cantidadProducto = document.createElement('p');
            cantidadProducto.textContent = `Cantidad: ${producto.cantidad}`;

            const precioProducto = document.createElement('p');
            precioProducto.textContent = `Precio unitario: $${producto.precio}`;

            const precioTotal = document.createElement('p');
            precioTotal.textContent = `Precio total: $${producto.precio * producto.cantidad}`;

            const btnAgregar = document.createElement('button');
            btnAgregar.textContent = '➕';
            btnAgregar.classList.add('button-small');

            btnAgregar.addEventListener('click', (e) => {
                e.preventDefault();
                
                const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
                productosCarrito.push(producto);
                localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
                this.cargarCarrito();
            });

            const btnRemover = document.createElement('button');
            btnRemover.textContent = '➖';
            btnRemover.classList.add('button-small');

            btnRemover.addEventListener('click', (e) => {
                e.preventDefault();
                
                let productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
                const index = productosCarrito.findIndex(p => p.id === producto.id);

                if (index !== -1) {
                    productosCarrito.splice(index, 1);
                    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
                    this.cargarCarrito();
                }
            });

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = '🗑';
            btnEliminar.classList.add('button-small');
            btnEliminar.style.fontSize = 'larger';
            btnEliminar.style.background = 'red';

            btnEliminar.addEventListener('click', (e) => {
                e.preventDefault();
                
                let productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
                productosCarrito = productosCarrito.filter(p => p.id !== producto.id);
                localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
                this.cargarCarrito();
            });

            divProducto.appendChild(imgProducto);
            divProducto.appendChild(nombreProducto);
            divProducto.appendChild(cantidadProducto);
            divProducto.appendChild(precioProducto);
            divProducto.appendChild(precioTotal);
            divProducto.appendChild(btnAgregar);
            divProducto.appendChild(btnRemover);
            divProducto.appendChild(btnEliminar);

            contenedorProductos.appendChild(divProducto);
        });
    }

    registrarControlador(){

        this.VistaCarrito.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./home.html';
        })

        this.VistaCarrito.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaCarrito.carrito.btnCancelar.addEventListener("click", (e) =>{
            localStorage.removeItem('productosCarrito');
            window.location.href='./home.html';
        })

        this.VistaCarrito.carrito.btnFinalizar.addEventListener("click", (e) =>{
            window.location.href='./ticket.html';
        })

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaCarrito.navbar.titulo.textContent = `Carrito de ${nombreCliente}`;
        }else {
            this.VistaCarrito.navbar.titulo.textContent = 'Carrito de Compras';
        }

    }

}

export { ControlCarrito };