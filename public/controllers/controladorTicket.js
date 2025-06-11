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
            this.VistaTicket.ticket.cabeceraTicket.innerHTML = '<h1>Algo salio mal</h1>';
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
            return total + producto.precio;
        }, 0);
    }

    mostrarTicket(productosCarrito){
        const fechaOperacion = new Date().toLocaleString();
        this.VistaTicket.ticket.nombreUsuario.textContent = localStorage.getItem('nombreCliente') || 'Desconocido';
        this.VistaTicket.ticket.fechaOperacion.textContent = fechaOperacion;

        const productosAgrupados = this.agruparProductos(productosCarrito);

        let detalleHTML = '';
        productosAgrupados.forEach(producto => {

            if (producto.modelo) {
                detalleHTML += `<p>${producto.marca + ' ' + producto.modelo} X ${producto.cantidad}\t$${(producto.precio * producto.cantidad).toFixed(2)}</p>`;
            } else {
                detalleHTML += `<p>${producto.tipo + ' ' + producto.marca} X ${producto.cantidad}\t$${(producto.precio * producto.cantidad).toFixed(2)}</p>`;
            }
        });
        
        const detalleTicket = this.VistaTicket.ticket.detalleTicket;
        detalleTicket.innerHTML = detalleHTML;

        const total = this.calcularTotal(productosCarrito)
        this.VistaTicket.ticket.total.innerHTML = `<p>Total a Pagar: $${total.toFixed(2)}</p>`;

        /* Agregar llamado a metodo que haga POST a la base de datos a la tabla ventas*/
    }

    generarPdf() {
        // Corrige la ruta del CSS y de la imagen del logo
        const cabecera = this.VistaTicket.ticket.cabeceraTicket.outerHTML
            .replace('./img/PocketStore.png', 'http://localhost:3000/img/PocketStore.png');
        const detalle = this.VistaTicket.ticket.detalleTicket.outerHTML;
        const html = `
            <html>
                <head>
                    <meta charset="utf-8">
                    <link rel="stylesheet" href="http://localhost:3000/styles.css">
                </head>
                <body>
                    ${cabecera}
                    ${detalle}
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
            window.location.href='./home.html';
        })

        this.VistaTicket.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaTicket.ticket.btnSalir.addEventListener("click", (e) =>{

            localStorage.removeItem('productosCarrito'); //DESPUES HAY QUE HACERLO QUE CUANDO TERMINA DE CARGAR EL TICKET, QUE LIMPIE EL LOCAL STORAGE

            window.location.href='./index.html';
        })

        this.VistaTicket.ticket.btnPdf.addEventListener("click", (e) =>{
            console.log("Generar PDF");
            this.generarPdf();
        })

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaTicket.navbar.titulo.textContent = `Gracias por tu Compra ${nombreCliente}!`;
        }else {
            this.VistaTicket.navbar.titulo.textContent = 'Gracias por tu Compra!';
        }
    }

}

export { ControlTicket };