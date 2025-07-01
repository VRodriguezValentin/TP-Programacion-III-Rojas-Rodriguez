class ControlTicket{
    Modelo;
    VistaTicket;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaTicket = p_vista;
        this.cargarTicket();
        this.registrarControlador();
    }


    cargarTicket(){
        const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];

        if (productosCarrito.length === 0) {
            this.VistaTicket.ticket.cabeceraTicket.innerHTML = '<img src="./img/empty_cart.png" alt="Carrito Vacio" class=""> <h1 style="display: flex; justify-content: center; align-items: center;">Algo salio mal</h1>';
            this.VistaTicket.ticket.detalleTicket.innerHTML = '<p>No se encontraron productos para su compra, intentelo en otro momento.</p>';
            this.VistaTicket.ticket.finTicket.innerHTML = '<button class="button" onclick="window.location.href=\'./index.html\'">Salir</button>';
        } else {
            this.mostrarTicket(productosCarrito);
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
            return total + parseFloat(producto.precio);
        }, 0);
    }

    mostrarTicket(productosCarrito){
        const fechaOperacion = new Date().toLocaleString();
        this.VistaTicket.ticket.fechaOperacion.textContent = fechaOperacion;

        const nombreUsuario = localStorage.getItem('nombreCliente') || 'Desconocido';
        this.VistaTicket.ticket.nombreUsuario.textContent = nombreUsuario;

        const productosAgrupados = this.agruparProductos(productosCarrito);

        let detalleHTML = '';
        let arrayDetalle = [];
        productosAgrupados.forEach(producto => {

            if (producto.modelo) {
                detalleHTML += `<p>${producto.marca + ' ' + producto.modelo} X ${producto.cantidad}\t$${(parseFloat(producto.precio) * producto.cantidad).toFixed(2)}</p>`;
            } else {
                detalleHTML += `<p>${producto.tipo + ' ' + producto.marca} X ${producto.cantidad}\t$${(parseFloat(producto.precio) * producto.cantidad).toFixed(2)}</p>`;
            }

            var detalleProducto = {
                id_producto: producto.id,
                cantidad: producto.cantidad,
                precio_unitario: parseFloat(producto.precio)
            };

            arrayDetalle.push(detalleProducto);
        });
        
        const detalleTicket = this.VistaTicket.ticket.detalleTicket;
        detalleTicket.innerHTML = detalleHTML;

        const total = this.calcularTotal(productosCarrito)
        this.VistaTicket.ticket.total.innerHTML = `<p>Monto Total: $${total.toFixed(2)}</p>`;

        this.registrarVenta(nombreUsuario, total, arrayDetalle);
    }

    registrarVenta(nombreUsuario, total, productos) {
        const venta = {
            nombreUsuario: nombreUsuario,
            total: total,
            productos: productos
        };

        fetch('/api/ventas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(venta)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('El servidor respondió con un error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const idVenta = data.venta.insertId;
            console.log('ID de la venta:', idVenta);

            localStorage.removeItem('productosCarrito');
        })
        .catch(error => {
            console.error('Error al registrar la venta:', error);
        });
    }

    generarPdf() {
        const cabecera = this.VistaTicket.ticket.cabeceraTicket.outerHTML
            .replace('./img/PocketStore.png', 'http://localhost:3000/img/PocketStore.png');
        const detalle = this.VistaTicket.ticket.detalleTicket.outerHTML;
        const total = this.VistaTicket.ticket.total.outerHTML;

        const html = `
            <html>
                <head>
                    <meta charset="utf-8">
                    <link rel="stylesheet" href="http://localhost:3000/styles.css">
                </head>
                <body>
                    ${cabecera}
                    <div style="text-align: center; margin: 20px;">
                        ${detalle}
                    </div>
                    <div id="finTicket">
                        ${total}
                    </div>
                </body>
            </html>
        `;

        fetch('/api/generar-ticket-pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ html })
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ticket_pocketstore.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch(err => {
            alert('No se pudo generar el PDF');
            console.error(err);
        });
    }

    registrarControlador(){

        this.VistaTicket.navbar.logo.addEventListener("click", (e) =>{
            alert("Su sesion ha expirado❗\nPor favor salga e introduzca su nombre nuevamente.");
        })

        this.VistaTicket.navbar.carrito.addEventListener("click", (e) => {
            alert("Su sesion ha expirado❗\nPor favor salga e introduzca su nombre nuevamente.");
        })

        this.VistaTicket.ticket.btnSalir.addEventListener("click", (e) =>{
            window.location.href='./index.html';
        })

        this.VistaTicket.ticket.btnPdf.addEventListener("click", (e) =>{
            console.log("Generar PDF");
            this.generarPdf();
        })

        if (localStorage.getItem("tema") === "oscuro") {
            document.body.classList.remove("bright");
        } else if (localStorage.getItem("tema") === "claro") {
            document.body.classList.add("bright");
        }

        this.VistaTicket.btnTema.addEventListener("click", (e) => {
            e.preventDefault();

            if (document.body.classList.contains("bright")) {
                document.body.classList.remove("bright");
                localStorage.setItem("tema", "oscuro");
            } else {
                document.body.classList.add("bright");
                localStorage.setItem("tema", "claro");
            }
        });

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaTicket.navbar.titulo.textContent = `Gracias por tu Compra ${nombreCliente}!`;
        }else {
            this.VistaTicket.navbar.titulo.textContent = 'Gracias por tu Compra!';
        }
    }

}

export { ControlTicket };